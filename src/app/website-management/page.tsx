"use client"

// import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import WebsiteManagementFeature from "@/images/features/website-mgmt-feature-abstract.webp"
import SubPageLayout from "@/app/layouts/SubPageLayout"
import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";
import SimpleContent from "@/components/subpage-components/SimpleContent";
// import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";

const metadata = {
  title: "Web Development | Optmatic",
  description: "Web Development services for your business.",
}

export default function WebsiteManagement() {
  // const components = [
    
  //   {
  //     id: "website-management",
  //     name: "Website Management",
  //     icon: QuestionMarkCircleIcon as React.ComponentType<unknown>
  //   }
  // ]

  return (
    <SubPageLayoutAlt
      breadcrumbPath={[
    { label: "Website Management", href: "/website-management" }]}
      metadata={metadata}
      title="Website Management"
      subtitle="We offer a range of website management services designed to help you achieve your business goals with precision and efficiency."
      // activeComponentId="web-development"
      // availableComponents={components}
      imageSrc={WebsiteManagementFeature.src}
      imageAlt="Website Management Feature Image"
      buttonText="Request a Site Audit"
      buttonLink="/site-audit"
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
      ctaText="Learn More"
      ctaLink="/website-management"
      imageSrc="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
      imageAlt="Screenshot of the project"
    />
    </SubPageLayoutAlt>
  );
}
