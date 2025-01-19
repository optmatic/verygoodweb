"use client"

import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import WebDevFeature from "@/images/features/web-dev-abstraction.webp"
import SubPageLayout from "@/app/layouts/SubPageLayout"
import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";

const metadata = {
  title: "Web Development | Optmatic",
  description: "Web Development services for your business.",
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
        { label: "Web Development", href: "/web-development" }]}
      metadata={metadata}
      title="Web Development"
      subtitle="We offer a range of web development services to help you achieve your business goals."
      // activeComponentId="web-development"
      // availableComponents={components}
      imageSrc={WebDevFeature.src}
      imageAlt="Web Development Feature Image"
      buttonText="Request a Site Audit"
      buttonLink="/web-development"
    >
      <div>
        Your web development content goes here
      </div>
    </SubPageLayout>
  );
}
