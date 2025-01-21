"use client"

// import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import WordPressSolutionsFeature from "@/images/features/wordpress-feature-abstraction.webp"
import SubPageLayout from "@/app/layouts/SubPageLayout"
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
    <SubPageLayout
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
      <div>
        Your WordPress solutions content goes here
      </div>
    </SubPageLayout>
  );
}
