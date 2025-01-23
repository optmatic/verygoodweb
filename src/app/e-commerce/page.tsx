"use client"

// import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import EcommerceFeature from "@/images/features/ecommerce-feature-abstraction.webp"
import SubPageLayoutAlt from "@/app/layouts/SubPageLayoutAlt"
import SimpleContent from "@/components/subpage-components/SimpleContent";

const metadata = {
  title: "E-commerce | Optmatic",
  description: "E-commerce services for your business.",
}

export default function WebDevelopment() {
  // const components = [
    
  //   {
  //     id: "e-commerce",
  //     name: "E-commerce",
  //     icon: QuestionMarkCircleIcon as React.ComponentType<unknown>
  //   }
  // ]

  return (
    <SubPageLayoutAlt
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
        <SimpleContent
  badge="Smarter online selling"
  title="Future-ready Digital Shopfronts"
  leftColumnContent={`Our e-commerce development process combines innovation with efficiency, creating seamless experiences for you and your customers. From cutting-edge design to advanced functionality, we optimise every detail to help your store succeed.

**With our services, you'll benefit from:**

- Bespoke online stores built using Shopify/Liquid, WooCommerce, and FourthWall integrations
- Enhanced user journeys for smoother navigation and streamlined checkouts
- Integration of secure payment gateways and innovative e-commerce tools
- Scalable, future-ready solutions that grow with your business
`}
  rightColumnContent={`We craft e-commerce platforms that stand out and deliver results. By harnessing the latest technologies with Shopify, WooCommerce, and FourthWall, we ensure your online store is equipped to thrive in today’s competitive market.

Ready to elevate your online business? Let’s collaborate to create a high-performing e-commerce website that drives sales and delights your customers.`}
  ctaText="Get started"
  ctaLink="/get-started"
/>

      
    </SubPageLayoutAlt>
  );
}
