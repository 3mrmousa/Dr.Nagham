import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ResultsSection } from "@/components/ResultsSection";
import { ClinicTourSection } from "@/components/ClinicTourSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BookingSection } from "@/components/BookingSection";
import { FaqSection } from "@/components/FaqSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full font-body-md text-on-surface">
          <HeroSection />
          <CredentialsSection />
          <AboutSection />
          <ServicesSection />
          <ResultsSection />
          <ClinicTourSection />
          <TestimonialsSection />
          <BookingSection />
          <FaqSection />
          <FloatingWhatsApp />
        </div>
      </main>
      <Footer />
    </>
  );
}
