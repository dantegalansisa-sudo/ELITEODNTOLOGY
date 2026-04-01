import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import OrthoEvalSection from '../sections/OrthoEvalSection';
import ResultsGallerySection from '../sections/ResultsGallerySection';
import HappyClientsSection from '../sections/HappyClientsSection';
import SmileDesignVideoSection from '../sections/SmileDesignVideoSection';
import CEOSection from '../sections/CEOSection';
import StatsSection from '../sections/StatsSection';
import AboutSection from '../sections/AboutSection';
import TeamSection from '../sections/TeamSection';
import ProcessSection from '../sections/ProcessSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import PaymentMethodsSection from '../sections/PaymentMethodsSection';
import FAQSection from '../sections/FAQSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <OrthoEvalSection />
        <ResultsGallerySection />
        <HappyClientsSection />
        <SmileDesignVideoSection />
        <CEOSection />
        <StatsSection />
        <AboutSection />
        <TeamSection />
        <ProcessSection />
        <TestimonialsSection />
        <PaymentMethodsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
