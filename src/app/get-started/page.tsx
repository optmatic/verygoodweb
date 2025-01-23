"use client"

// import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
// import EcommerceFeature from "@/images/features/ecommerce-feature-abstraction.webp"
import SubPageLayoutAlt from "@/app/layouts/SubPageLayoutAlt"
// import SimpleContent from "@/components/subpage-components/SimpleContent";
import GetStartedUI from "@/components/contact/GetStarted";

const metadata = {
  title: "E-commerce | Optmatic",
  description: "E-commerce services for your business.",
}

export default function GetStartedPage() {
  return (
    <SubPageLayoutAlt
      breadcrumbPath={[
        { label: "Get Started", href: "/get-started" }]}
      metadata={metadata}
      title="Get Started"
      subtitle="Let's work together. Complete the form below and we'll get back to you as soon as possible."
    //   activeComponentId="web-development"
    //   availableComponents={components}
    //   imageSrc={EcommerceFeature.src}
    //   imageAlt="E-commerce Feature Image"
    //   buttonText="Request a Site Audit"
    //   buttonLink="/get-started"
    >
      <GetStartedUI />
      
    </SubPageLayoutAlt>
  );
}
