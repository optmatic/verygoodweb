import PrimaryHero from "@/components/hero-sections/PrimaryHero";
import CS from "@/components/optmatic/CS";
import Contact from "@/components/optmatic/Contact";
import TechUsed from "@/components/optmatic/Tech";
import TechUsedDark from "@/components/optmatic/TechUsedDark";
export default function Home() {
  return (
    <div> 
      <PrimaryHero />
      <TechUsed />
      <TechUsedDark />
        <Contact />
    </div>
  );
}
