import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Conversar no WhatsApp"
    >
      <FaWhatsapp size={28} className="text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
