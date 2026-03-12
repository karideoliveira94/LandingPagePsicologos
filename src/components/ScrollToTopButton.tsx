import { ArrowUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const SHOW_AFTER_PX = 400;

function prefersReducedMotion(): boolean {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return prefersReducedMotion();
  }, []);

  useEffect(() => {
    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      setIsVisible(window.scrollY > SHOW_AFTER_PX);
    };

    const onScroll = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId != null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Voltar ao topo"
      className={[
        "fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full hover:brightness-110",
        "bg-primary text-primary-foreground shadow-lg transition-all duration-300",
        "hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "ring-offset-background",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0",
      ].join(" ")}
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default ScrollToTopButton;

