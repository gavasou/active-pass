import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import SolutionSection from "@/components/landing/SolutionSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import PricingSection from "@/components/landing/PricingSection";
import ObjectionSection from "@/components/landing/ObjectionSection";
import AudienceSection from "@/components/landing/AudienceSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <BenefitsSection />
      <PricingSection />
      <ObjectionSection />
      <AudienceSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
