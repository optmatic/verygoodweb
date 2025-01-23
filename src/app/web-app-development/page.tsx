"use client"

// import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import WebDevFeature from "@/images/features/web-app-feature-abstraction.webp"
// import SubPageLayout from "@/app/layouts/SubPageLayout"
import SimpleContent from "@/components/subpage-components/SimpleContent";
import RotatingProjects from "@/components/ui/rotating-projects";
import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";
// import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";

const metadata = {
  title: "Web Application Development | Optmatic",
  description: "Web Application Development services for your business.",
}

export default function WebDevelopment() {
  // const components = [
    
  //   {
  //     id: "web-development",
  //     name: "Web Development",
  //     icon: QuestionMarkCircleIcon as React.ComponentType<unknown>
  //   }
  // ]

  return (
    <SubPageLayoutAlt
      breadcrumbPath={[
        { label: "Web Application Development", href: "/web-app-development" }]}
      metadata={metadata}
      title="Web Application Development"
      subtitle="We offer a range of web application development services designed to help you achieve your business goals with precision and efficiency."
      // activeComponentId="web-development"
      // availableComponents={components}
      imageSrc={WebDevFeature.src}
      imageAlt="Web Development Feature Image"
      buttonText="Request a Site Audit"
      buttonLink="/web-app-development"
    >
    <SimpleContent 
    badge="Deploy faster"
    title="Expand your business capabilities"
    leftColumnContent={`**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. _Lorem Ipsum_ has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, [remaining essentially unchanged](https://www.example.com).
        `}
              rightColumnContent={`Lorem Ipsum is simply dummy text of the **printing and typesetting industry**. _Lorem Ipsum_ has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the [this is a link](https://www.example.com) leap into electronic typesetting..
`
              }
    ctaText="Learn More"
    ctaLink="/web-app-development"
   />
    </SubPageLayoutAlt>
  );
}
