import HeroSection from "@/components/hero-section";
import HeroSection1 from "@/components/hero-section1";
import IntroSection from "@/components/intro-section";
import StatsSection from "@/components/stats-section";
import CtaSection from "@/components/cta-section";
import LocationPagesSection from "@/components/location-pages-section";
import FaqSection from "@/components/faq-section";
import TestimonialCarousel from "@/components/testimonial-carousel";
import PricingList from "@/components/pricing-list";

export default function Home() {
  return (
    <>
      <HeroSection1 />
      <IntroSection />
      <StatsSection />
      <CtaSection />
      <LocationPagesSection />
      <FaqSection />
      <TestimonialCarousel />
      <PricingList />
    </>
  );
}
