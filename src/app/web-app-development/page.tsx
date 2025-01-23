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
        { label: "Web Application Development", href: "/web-app-development" }]}
      metadata={metadata}
      title="Web Application Development"
      subtitle="We offer a range of web application development services designed to help you achieve your business goals with precision and efficiency."
      imageSrc={WebDevFeature.src}
      imageAlt="Web Development Feature Image"
      buttonText="Request a Site Audit"
      buttonLink="/site-audit"
    >
    <SimpleContent
  badge="Enhance Your Online Store"
  title="Efficiency in Every Detail"
  leftColumnContent={`Our e-commerce development process is focused on creating seamless, efficient experiences for both you and your customers. From design to functionality, we ensure your store is optimized for success.

**With our services, you'll benefit from:**

- Custom-built online stores using Shopify/Liquid, WooCommerce, and FourthWall integrations
- Enhanced user experience for smoother navigation and faster checkouts
- Integration of secure payment gateways and essential e-commerce tools
- Scalable designs that grow with your business
`}
  rightColumnContent={`We specialize in building e-commerce platforms that are both visually appealing and built to convert. By leveraging the capabilities of Shopify, WooCommerce, and FourthWall, we ensure your store has the tools it needs to thrive.

Ready to grow your online business? Let’s work together to create a high-performing e-commerce website that drives sales and engages your customers.`}
  ctaText="Get started"
  ctaLink="/get-started"
  />
    </SubPageLayoutAlt>
  );
}
