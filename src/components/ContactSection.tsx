import { Mail, MapPin, Phone, Video } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ContactSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="contato" className="section-padding bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-widest text-primary">
            Entre em Contato
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            Informações de Contato
          </h2>
        </div>

        <div className="stagger-children mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Phone, label: "WhatsApp", value: "(11) 99999-9999", href: "https://wa.me/5511999999999" },
            { icon: Mail, label: "Email", value: "contato@draanaclara.com.br", href: "mailto:contato@draanaclara.com.br" },
            { icon: MapPin, label: "Localização", value: "São Paulo, SP", href: "#" },
            { icon: Video, label: "Modalidade", value: "Online e Presencial", href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="animate-on-scroll flex flex-col items-center rounded-2xl bg-card p-6 text-center transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-primary">
                <item.icon size={22} />
              </div>
              <p className="font-body text-xs font-medium uppercase tracking-wider text-primary">
                {item.label}
              </p>
              <p className="mt-1 font-body text-sm text-foreground">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
