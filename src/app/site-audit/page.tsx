"use client"

import ContactUs from "@/components/ContactUs";
import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";
import DarkButton from "@/components/optmatic/DarkButton";
import RotatingProjects from "@/components/ui/rotating-projects";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import SiteAuditForm from "@/components/site-audit/SiteAuditForm";
import SimpleContent from "@/components/subpage-components/SimpleContent";


const metadata = {
  title: "Request a Site Audit | Optmatic",
  description: "Request a site audit for your website.",
}

export default function SiteAudit() {

  return (
    <SubPageLayoutAlt
      breadcrumbPath={[
        { label: "Site Audit", href: "/site-audit" }]}
      metadata={metadata}
      title="Request a Site Audit"
      subtitle="We offer a range of web development services to help you achieve your business goals."
    >
    <SimpleContent
        badge="Optimise Your Digital Presence"
        title="Efficiency at Every Step"
        leftColumnContent={`We simplify the web development process to ensure it's smooth and efficient, saving you time and resources whilst delivering outstanding results.

**With our services, you'll benefit from:**

- Custom web solutions tailored to your business needs
- Enhanced website performance for an improved user experience
- Expert guidance throughout the development journey
- Regular updates, maintenance, and post-launch support.
`}
        rightColumnContent={`Our approach ensures that your website isn't just visually appealing but also fully functional and optimised for performance. We prioritise user experience, ensuring that your visitors have a seamless interaction with your site, which helps boost engagement and conversions.

Ready to elevate your digital presence? Let's collaborate to create a high-performing website that meets your goals and adapts as your business grows.`} ctaText={""} ctaLink={""}      // ctaText="Get started"
/>
      <div className="-mt-4 pb-10">
        <SiteAuditForm />
      </div>

    
    </SubPageLayoutAlt>
  );
}