import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a terapia?",
    answer:
      "A terapia é um processo de conversa e reflexão em um ambiente seguro e confidencial. Nas sessões, trabalhamos juntos para entender seus sentimentos, pensamentos e comportamentos, desenvolvendo estratégias para lidar com as dificuldades do dia a dia.",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer:
      "Cada sessão tem duração de 50 minutos. A frequência recomendada é semanal, mas pode ser ajustada de acordo com a necessidade de cada paciente.",
  },
  {
    question: "O atendimento pode ser online?",
    answer:
      "Sim! Ofereço atendimento online por videochamada, com a mesma qualidade e sigilo do atendimento presencial. É uma ótima opção para quem tem dificuldade de deslocamento ou prefere a comodidade de casa.",
  },
  {
    question: "A terapia é confidencial?",
    answer:
      "Absolutamente. O sigilo é um princípio fundamental da psicologia. Tudo o que é compartilhado nas sessões é protegido pelo Código de Ética do Psicólogo e permanece estritamente confidencial.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "Você pode agendar sua primeira consulta entrando em contato pelo WhatsApp. Basta clicar no botão de agendamento nesta página e enviar uma mensagem. Responderei o mais breve possível!",
  },
];

const FAQSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="faq" className="section-padding bg-card" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-widest text-primary">
            Dúvidas
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="animate-on-scroll">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border-none bg-background px-6"
              >
                <AccordionTrigger className="font-body text-base font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
