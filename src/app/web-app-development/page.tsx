"use client"

import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import WebDevFeature from "@/images/features/web-app-feature-abstraction.webp"
import SubPageLayout from "@/app/layouts/SubPageLayout"
// import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";

const metadata = {
  title: "Web Application Development | Optmatic",
  description: "Web Application Development services for your business.",
}

export default function WebDevelopment() {
  const components = [
    
    {
      id: "web-development",
      name: "Web Development",
      icon: QuestionMarkCircleIcon as React.ComponentType<unknown>
    }
  ]

  return (
    <SubPageLayout
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
      <div>
        Your web application development content goes here
      </div>
    </SubPageLayout>
  );
}
