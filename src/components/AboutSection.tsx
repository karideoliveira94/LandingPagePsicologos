import portraitImage from "@/assets/psychologist-portrait.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="sobre" className="section-padding bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* Image */}
          <div className="animate-on-scroll">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={portraitImage}
                alt="Dra. Ana Clara — Psicóloga Clínica"
                className="h-full w-full object-cover aspect-[4/5]"
              />
            </div>
          </div>

          {/* Text */}
          <div className="animate-on-scroll">
            <p className="mb-3 font-body text-sm font-medium uppercase tracking-widest text-primary">
              Sobre Mim
            </p>
            <h2 className="mb-6 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Dra. Ana Clara Mendes
            </h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                Sou psicóloga clínica com mais de 10 anos de experiência em atendimento 
                individual para adultos. Meu trabalho é baseado na Terapia Cognitivo-Comportamental 
                (TCC) e na abordagem humanista, buscando sempre um espaço seguro e acolhedor 
                para cada paciente.
              </p>
              <p>
                Acredito que a terapia é uma jornada de autoconhecimento e transformação, 
                e que cada pessoa merece ser ouvida com respeito e empatia.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-card p-4">
                <p className="font-body text-xs font-medium uppercase tracking-wider text-primary">Formação</p>
                <p className="mt-1 font-body text-sm text-foreground">Psicologia — USP</p>
                <p className="font-body text-sm text-muted-foreground">Especialização em TCC</p>
              </div>
              <div className="rounded-xl bg-card p-4">
                <p className="font-body text-xs font-medium uppercase tracking-wider text-primary">Registro</p>
                <p className="mt-1 font-body text-sm text-foreground">CRP 06/123456</p>
                <p className="font-body text-sm text-muted-foreground">10+ anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
