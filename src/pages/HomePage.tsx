import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import CEOSection from '../sections/CEOSection';
import StatsSection from '../sections/StatsSection';
import AboutSection from '../sections/AboutSection';
import TeamSection from '../sections/TeamSection';
import ProcessSection from '../sections/ProcessSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <CEOSection />
        <StatsSection />
        <AboutSection />
        <TeamSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
