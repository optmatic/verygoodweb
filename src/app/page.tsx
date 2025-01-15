import PrimaryHero from "@/components/hero-sections/PrimaryHero";
// import CS from "@/components/optmatic/CS";
import TechUsed from "@/components/optmatic/TechUsed";
import TechUsedDark from "@/components/optmatic/TechUsedDark";
import WhyOptmatic from "@/components/optmatic/WhyOptmatic";
export default function Home() {
  return (
    <div> 
      <PrimaryHero />
      <WhyOptmatic />
        <TechUsedDark />
      <TechUsed />
    </div>
  );
}
