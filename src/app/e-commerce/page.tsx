"use client"

import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import EcommerceFeature from "@/images/features/ecommerce-feature-abstraction.webp"
import SubPageLayout from "@/app/layouts/SubPageLayout"

const metadata = {
  title: "E-commerce | Optmatic",
  description: "E-commerce services for your business.",
}

export default function WebDevelopment() {
  const components = [
    
    {
      id: "e-commerce",
      name: "E-commerce",
      icon: QuestionMarkCircleIcon as React.ComponentType<unknown>
    }
  ]

  return (
    <SubPageLayout
      breadcrumbPath={[
        { label: "E-commerce", href: "/e-commerce" }]}
      metadata={metadata}
      title="E-commerce"
      subtitle="We offer a range of e-commerce services designed to help you achieve your business goals with precision and efficiency."
      // activeComponentId="web-development"
      // availableComponents={components}
      imageSrc={EcommerceFeature.src}
      imageAlt="E-commerce Feature Image"
      buttonText="Request a Site Audit"
      buttonLink="/e-commerce"
    >
      <div>
        Your e-commerce content goes here
      </div>
    </SubPageLayout>
  );
}
