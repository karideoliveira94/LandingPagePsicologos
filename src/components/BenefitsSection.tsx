import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  "Melhor controle emocional",
  "Autoconhecimento profundo",
  "Melhora nos relacionamentos",
  "Redução da ansiedade e estresse",
  "Maior qualidade de vida",
  "Desenvolvimento de resiliência",
  "Clareza para tomar decisões",
  "Equilíbrio entre vida pessoal e profissional",
];

const BenefitsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="animate-on-scroll">
            <p className="mb-3 font-body text-sm font-medium uppercase tracking-widest text-primary">
              Por que Fazer Terapia?
            </p>
            <h2 className="mb-6 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Benefícios da Psicoterapia
            </h2>
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              A psicoterapia é um processo transformador que vai muito além de tratar sintomas. 
              É uma oportunidade de se conhecer melhor, desenvolver novas habilidades emocionais 
              e construir uma vida com mais significado.
            </p>
          </div>

          <div className="animate-on-scroll">
            <div className="stagger-children grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="animate-on-scroll flex items-start gap-3 rounded-xl bg-background p-4"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="font-body text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
