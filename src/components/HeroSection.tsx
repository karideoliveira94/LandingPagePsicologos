import heroImage from "@/assets/hero-therapy.jpg";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Consultório de psicologia acolhedor"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-12 lg:px-24">
        <div className="max-w-2xl">
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-widest text-primary">
            Psicóloga Clínica — CRP 06/123456
          </p>
          <h1 className="mb-6 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Cuidar da sua saúde mental é um passo importante para uma vida mais leve.
          </h1>
          <p className="mb-10 max-w-lg font-body text-lg leading-relaxed text-muted-foreground">
            Atendimento humanizado e acolhedor em psicoterapia individual para adultos. 
            Sessões presenciais e online com foco no seu bem-estar emocional.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-body text-base font-medium text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Agendar Consulta pelo WhatsApp
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/60 px-8 py-4 font-body text-base font-medium text-foreground backdrop-blur-sm transition-all hover:bg-secondary"
            >
              Conhecer Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
