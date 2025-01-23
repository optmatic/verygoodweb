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
      badge="Optimise Your Digital Presence"
      title="Efficiency at Every Step"
      leftColumnContent={`We simplify the web development process to ensure it's smooth and efficient, saving you time and resources whilst delivering outstanding results.

**With our services, you'll benefit from:**

- Custom web solutions tailored to your business needs
- Enhanced website performance for an improved user experience
- Expert guidance throughout the development journey
- Regular updates, maintenance, and post-launch support.
`}
      rightColumnContent={`Our approach ensures that your website isn't just visually appealing but also fully functional and optimised for performance. We prioritise user experience, ensuring that your visitors have a seamless interaction with your site, which helps boost engagement and conversions.

Ready to elevate your digital presence? Let's collaborate to create a high-performing website that meets your goals and adapts as your business grows.`}
      ctaText="Get started"
      ctaLink="/get-started"
      imageSrc="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
      imageAlt="Screenshot of the project"
    />
      
    </SubPageLayoutAlt>
  );
}
