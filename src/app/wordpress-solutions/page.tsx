"use client"

// import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import WordPressSolutionsFeature from "@/images/features/wordpress-feature-abstraction.webp"
import SubPageLayout from "@/app/layouts/SubPageLayout"
import SimpleContent from "@/components/subpage-components/SimpleContent";
import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";
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
    <SubPageLayoutAlt
  breadcrumbPath={[
    { label: "WordPress Solutions", href: "/wordpress-solutions" }
  ]}
  metadata={metadata}
  title="WordPress Solutions"
  subtitle="Transform your WordPress website into a powerful tool for growth with our customised, expert solutions."
  imageSrc={WordPressSolutionsFeature.src}
  imageAlt="WordPress Solutions Feature Image"
  buttonText="Request a Site Audit"
  buttonLink="/site-audit"
>
  <SimpleContent
    badge="Empowering Your WordPress Website"
    title="Customised Solutions for Your Business"
    leftColumnContent={`Our WordPress services focus on delivering tailored solutions to enhance functionality, performance, and user experience. Whether you're building a new site or improving an existing one, we ensure your WordPress website stands out.

**With our services, you'll benefit from:**

- Custom WordPress theme and plugin development for unique functionality
- Performance optimisation to improve loading times and overall user experience
- Secure, scalable designs to grow alongside your business
- Ongoing updates and maintenance to keep your site running smoothly
`}
    rightColumnContent={`As experts in WordPress development and management, we provide solutions that combine creativity with robust functionality. From custom builds to enhancing existing websites, we ensure your site is optimised for success.

Whether you need a complete overhaul, bespoke features, or regular updates, we have the expertise to deliver. Let us help you make the most of your WordPress website and achieve your business objectives.`}
    ctaText="Get started"
      ctaLink="/get-started"
    />
  </SubPageLayoutAlt>

  );
}
