import { MessageCircle, CalendarCheck, Sofa, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Primeiro Contato",
    description: "Entre em contato pelo WhatsApp para tirar dúvidas e alinhar suas expectativas.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Agendamento",
    description: "Escolha o melhor dia e horário para a sua sessão — presencial ou online.",
  },
  {
    icon: Sofa,
    step: "03",
    title: "Sessão Terapêutica",
    description: "Sessão de 50 minutos em um espaço seguro e acolhedor para você se expressar.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Acompanhamento",
    description: "Evolução contínua com acompanhamento personalizado ao longo do tratamento.",
  },
];

const HowItWorksSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="como-funciona" className="section-padding bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-widest text-primary">
            Passo a Passo
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            Como Funciona o Atendimento
          </h2>
        </div>

        <div className="stagger-children grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="animate-on-scroll text-center">
              <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-sage-light text-primary">
                <item.icon size={28} />
              </div>
              <span className="mb-2 block font-body text-xs font-bold uppercase tracking-widest text-primary">
                Passo {item.step}
              </span>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll mt-16 flex flex-wrap justify-center gap-4">
          <span className="rounded-full bg-accent px-5 py-2 font-body text-sm font-medium text-accent-foreground">
            🖥 Atendimento Online
          </span>
          <span className="rounded-full bg-accent px-5 py-2 font-body text-sm font-medium text-accent-foreground">
            🏢 Atendimento Presencial
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
