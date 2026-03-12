import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    name: "Mariana S.",
    text: "A terapia com a Dra. Ana Clara transformou minha forma de lidar com a ansiedade. Me sinto muito mais leve e segura para enfrentar os desafios do dia a dia.",
    role: "Paciente há 1 ano",
  },
  {
    name: "Lucas R.",
    text: "Encontrei um espaço seguro e acolhedor para falar sobre tudo o que eu sentia. A abordagem humanizada fez toda a diferença no meu processo de autoconhecimento.",
    role: "Paciente há 8 meses",
  },
  {
    name: "Camila T.",
    text: "Depois de meses de tratamento, consigo perceber mudanças significativas nos meus relacionamentos e na minha qualidade de vida. Recomendo de olhos fechados.",
    role: "Paciente há 2 anos",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="depoimentos" className="section-padding bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-widest text-primary">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            O Que Dizem Meus Pacientes
          </h2>
        </div>

        <div className="stagger-children grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="animate-on-scroll rounded-2xl bg-card p-8"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 font-body text-sm italic leading-relaxed text-muted-foreground">
                "{t.text}"
              </p>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
