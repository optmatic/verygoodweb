"use client"

// import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import WordPressSolutionsFeature from "@/images/features/wordpress-feature-abstraction.webp"
import SubPageLayout from "@/app/layouts/SubPageLayout"
import SimpleContent from "@/components/subpage-components/SimpleContent";
import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";
// import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";

const metadata = {
  title: "WordPress Solutions | Optmatic",
  description: "WordPress Solutions services for your business.",
}

export default function WordPressSolutions() {
  // const components = [
    
  //   {
  //     id: "wordpress-solutions",
  //     name: "WordPress Solutions",
  //     icon: QuestionMarkCircleIcon as React.ComponentType<unknown>
  //   }
  // ]

  return (
    <SubPageLayoutAlt 
      breadcrumbPath={[
    { label: "WordPress Solutions", href: "/wordpress-solutions" }]}
      metadata={metadata}
      title="WordPress Solutions"
      subtitle="We offer a range of WordPress solutions services designed to help you achieve your business goals with precision and efficiency."
      // activeComponentId="web-development"
      // availableComponents={components}
      imageSrc={WordPressSolutionsFeature.src}
      imageAlt="WordPress Solutions Feature Image"
      buttonText="Request a Site Audit"
      buttonLink="/wordpress-solutions"
    >
      <SimpleContent
      badge="Optimise Your Digital Presence"
      title="Efficiency at Every Step"
      leftColumnContent={`We simplify the web development process to ensure it's smooth and efficient, saving you time and resources whilst delivering outstanding results.
`}
      rightColumnContent={`Our approach ensures that your website isn't just visually appealing but also fully functional and optimised for performance. We prioritise user experience, ensuring that your visitors have a seamless interaction with your site, which helps boost engagement and conversions.

Ready to elevate your digital presence? Let's collaborate to create a high-performing website that meets your goals and adapts as your business grows.`}
      ctaText="Learn More"
      ctaLink="/wordpress-solutions"
      imageSrc="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
      imageAlt="Screenshot of the project"
    />
    </SubPageLayoutAlt>
  );
}
