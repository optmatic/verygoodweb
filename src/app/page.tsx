import PrimaryHero from "@/componeeeents/hero-sections/PrimaryHero";
import WhyOptmatic from "@/componeeeents/optmatic/WhyOptmatic";
import OptGrid from "@/componeeeents/optmatic/OptGrid";
import Footer from "@/componeeeents/navigation/ContactFooterLight";
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
  