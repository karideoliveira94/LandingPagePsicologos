import { Brain, Heart, Users, Flame, Sparkles, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const specialties = [
  {
    icon: Brain,
    title: "Ansiedade",
    description: "Tratamento para transtornos de ansiedade, crises de pânico e preocupação excessiva.",
  },
  {
    icon: Heart,
    title: "Depressão",
    description: "Acompanhamento terapêutico para tristeza profunda, desmotivação e perda de interesse.",
  },
  {
    icon: Sparkles,
    title: "Autoconhecimento",
    description: "Processo de descoberta pessoal para uma vida com mais propósito e clareza.",
  },
  {
    icon: Users,
    title: "Relacionamentos",
    description: "Desenvolvimento de habilidades para relações mais saudáveis e equilibradas.",
  },
  {
    icon: Flame,
    title: "Estresse e Burnout",
    description: "Estratégias para lidar com o esgotamento físico e emocional do dia a dia.",
  },
  {
    icon: User,
    title: "Terapia Individual",
    description: "Sessões personalizadas focadas nas suas necessidades e objetivos pessoais.",
  },
];

const SpecialtiesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="especialidades" className="section-padding bg-card" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-widest text-primary">
            Áreas de Atendimento
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            Especialidades
          </h2>
        </div>

        <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="animate-on-scroll group rounded-2xl bg-background p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sage-light text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon size={24} />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
