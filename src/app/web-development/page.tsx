"use client"

// import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import WebDevFeature from "@/images/features/web-dev-abstraction.webp"
import SubPageLayout from "@/app/layouts/SubPageLayout"
import SimpleContent from "@/components/subpage-components/SimpleContent"
import RotatingProjects from "@/components/ui/rotating-projects";
import Faqs from "@/components/ui/faqs";
const metadata = {
  title: "Web Development | Optmatic",
  description: "Web Development services for your business.",
}

const faqs = [
  {
    question: "What is web development?",
    answer: "Web development is the process of creating websites and web applications."
  }
]

export default function WebDevelopment() {
  // const components = [
    
  //   {
  //     id: "web-development",
  //     name: "Web Development",
  //     icon: QuestionMarkCircleIcon as React.ComponentType<unknown>
  //   }
  // ]

  return (
    <SubPageLayout
      breadcrumbPath={[
        { label: "Web Development", href: "/web-development" }]}
      metadata={metadata}
      title="Web Development"
      subtitle="We offer a range of web development services designed to help you achieve your business goals with precision and efficiency."
      // activeComponentId="web-development"
      // availableComponents={components}
      imageSrc={WebDevFeature.src}
      imageAlt="Web Development Feature Image"
      buttonText="Request a Site Audit"
      buttonLink="/web-development"
    >
      <SimpleContent
      badge="Optimise Your Digital Presence"
      title="A Streamlined Workflow"
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
    <hr className="mt-10"/>
    <RotatingProjects />
    <Faqs darkMode={false} faqs={faqs} />
    </SubPageLayout>
  );
}

