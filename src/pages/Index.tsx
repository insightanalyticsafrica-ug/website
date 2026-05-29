import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import BrandPillars from "@/components/BrandPillars";
import CaseStudySection from "@/components/CaseStudySection";
import TeamSection from "@/components/TeamSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <BrandPillars />
      <CaseStudySection />
      <TeamSection />
      <FooterSection />
    </div>
  );
};

export default Index;
