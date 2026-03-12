import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.";

const CTASection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-primary" ref={ref}>
      <div className="mx-auto max-w-3xl text-center">
        <div className="animate-on-scroll">
          <h2 className="mb-6 font-display text-3xl font-semibold text-primary-foreground md:text-4xl lg:text-5xl">
            Dar o primeiro passo pode transformar sua vida.
          </h2>
          <p className="mb-10 font-body text-lg text-primary-foreground/80">
            Você não precisa passar por isso sozinho(a). Estou aqui para te acompanhar 
            nessa jornada de cuidado e autoconhecimento.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-background px-10 py-4 font-body text-base font-semibold text-primary shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Agendar Consulta no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
