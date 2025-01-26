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

export default function WebAppDevelopment() {

  return (
    <SubPageLayoutAlt
  breadcrumbPath={[
    { label: "Web Application Development", href: "/web-app-development" }
  ]}
  metadata={metadata}
  title="Web Application Development"
  subtitle="We build powerful, user-driven web applications that streamline processes, enhance functionality, and grow with your business."
  imageSrc={WebDevFeature.src}
  imageAlt="Web Development Feature Image"
  buttonText="Request a Site Audit"
  buttonLink="/site-audit"
>
  <SimpleContent
    badge="Build Smarter, Scale Faster"
    title="Tailored Solutions for Your Business"
    leftColumnContent={`Our web application development process focuses on creating scalable, user-centric platforms tailored to your business needs. From building robust client portals to improving existing systems, we prioritise functionality, performance, and security.

**With our services, you'll benefit from:**

- Custom web apps built using React for dynamic, high-performance experiences
- Secure and user-friendly client portals to enhance customer interaction and accessibility
- Scalable architectures designed to grow alongside your business
- Continuous support and improvements for existing platforms
`}
    rightColumnContent={`We specialise in crafting intuitive, feature-rich web applications that solve real business challenges. By leveraging React, we deliver engaging and interactive user experiences designed to drive efficiency and innovation.

Looking to enhance your business processes or deliver seamless user experiences? Let us help you build or improve your web application today.`}
    ctaText="Start Your Project"
    ctaLink="/get-started"
  />
</SubPageLayoutAlt>

  

  );
}
