"use client"

// import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import WebsiteManagementFeature from "@/images/features/website-mgmt-feature-abstract.webp"
import SubPageLayout from "@/app/layouts/SubPageLayout"
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
    <SubPageLayout
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
      buttonLink="/website-management"
    >
      <div>
        Your website management content goes here
      </div>
    </SubPageLayout>
  );
}
