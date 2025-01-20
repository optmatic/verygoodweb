import PrimaryHero from "@/components/hero-sections/PrimaryHero";
import WhyOptmatic from "@/components/optmatic/WhyOptmatic";
import OptGrid from "@/components/optmatic/OptGrid";
import Footer from "@/components/navigation/ContactFooterLight";
export default function Home() {
  return (
    <div> 
      <PrimaryHero />
      <OptGrid />
      <WhyOptmatic />
      <Footer />
    </div>
  );
}
  