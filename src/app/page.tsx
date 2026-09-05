import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] cyber-grid relative overflow-hidden space-y-12">
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}