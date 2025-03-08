import PrimaryHero from "@/components/hero-sections/PrimaryHero";
import WhyOptmatic from "@/components/optmatic/WhyOptmatic";
import OptGrid from "@/components/optmatic/OptGrid";
import Footer from "@/components/navigation/ContactFooterLight";
import HeroSection from "@/components/hero-sections/HeroSection1";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <OptGrid />
      <WhyOptmatic />
      <Footer />
    </div>
  );
}
