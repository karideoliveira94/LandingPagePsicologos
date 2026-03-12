import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SpecialtiesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
