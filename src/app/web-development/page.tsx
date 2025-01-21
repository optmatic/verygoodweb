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
      badge="Channel your eliteness"
      title="A better workflow"
      leftColumnContent={`**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. _Lorem Ipsum_ has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, [remaining essentially unchanged](https://www.example.com).
`}
      rightColumnContent={`
Another paragraph with markdown support.

- List item 1
- List item 2
      `}
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

