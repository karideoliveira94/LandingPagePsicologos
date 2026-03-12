import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <p className="font-display text-lg font-semibold text-foreground">
          Dra. Ana Clara Mendes
        </p>
        <p className="font-body text-sm text-muted-foreground">
          Psicóloga Clínica — CRP 06/123456
        </p>
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:bg-sage-light hover:text-primary"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:bg-sage-light hover:text-primary"
          >
            <Linkedin size={18} />
          </a>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dra. Ana Clara Mendes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
