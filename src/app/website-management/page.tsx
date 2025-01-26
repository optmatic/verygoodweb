"use client"

// import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import WebsiteManagementFeature from "@/images/features/website-mgmt-feature-abstract.webp"
import SubPageLayout from "@/app/layouts/SubPageLayout"
import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";
import SimpleContent from "@/components/subpage-components/SimpleContent";
// import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";

const metadata = {
  title: "Website Management | Optmatic",
  description: "Let Optmatic handle the technical and strategic aspects of your website, so you can focus on what matters most—your business.",
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
    { label: "Website Management", href: "/website-management" }
  ]}
  metadata={metadata}
  title="Website Management"
  subtitle="Let us handle the technical and strategic aspects of your website, so you can focus on what matters most—your business."
  imageSrc={WebsiteManagementFeature.src}
  imageAlt="Website Management Feature Image"
  buttonText="Request a Site Audit"
  buttonLink="/site-audit"
>
  <SimpleContent
    badge="Streamline Your Online Presence"
    title="Comprehensive Management for Your Website"
    leftColumnContent={`Our website management services ensure your site remains functional, secure, and up to date. Whether it's routine maintenance or implementing new features, we provide everything needed to keep your website performing at its best.

**With our services, you'll benefit from:**

- Proactive updates to ensure your website runs smoothly and securely
- Regular performance monitoring and optimisation to maintain speed and reliability
- Content updates and enhancements tailored to your business goals
- Seamless integration of new features and tools to elevate user experience
`}
    rightColumnContent={`A well-managed website is essential for maintaining your online presence and ensuring customer satisfaction. Our team specialises in managing all aspects of your site, so you can focus on growing your business.

From technical updates to strategic content improvements, we provide the expertise needed to ensure your website not only runs efficiently but also stands out in a competitive digital landscape.

Ready to optimise your website? Let us handle the details so you can focus on what matters most.`}
    ctaText="Get started"
    ctaLink="/get-started"
  />
</SubPageLayoutAlt>

  );
}
