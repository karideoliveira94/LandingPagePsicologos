import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-semibold text-foreground">
          Dra. Ana Clara
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
