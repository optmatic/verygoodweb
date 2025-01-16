"use client"

import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import WebDevFeature from "@/images/features/website-dev-feature.webp"
import SubPageLayout from "@/app/layouts/SubPageLayout"

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
      activeComponentId="web-development"
      availableComponents={components}
      variant="dark"
    //   imageSrc={WebDevFeature.src}
    //   imageAlt="Web Development Feature Image"
    >
      <div>
        Your web development content goes here
      </div>
    </SubPageLayout>
  );
}
