"use client"

// import ContactUs from "@/components/contact/ContactUs";
import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";
// import DarkButton from "@/components/optmatic/DarkButton";
// import RotatingProjects from "@/components/ui/rotating-projects";
// import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
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
      { label: "Site Audit", href: "/site-audit" }
    ]}
    metadata={metadata}
    title="Request a Site Audit"
    subtitle="Gain valuable insights into your website’s performance, usability, and overall effectiveness with a professional audit tailored to your business."
  >
    <SimpleContent
        badge="Limited Offer: Free for the Next 24 Requests!"
        title="Comprehensive Website Analysis"
        leftColumnContent={`A professional site audit can reveal hidden issues and untapped potential within your website. Our thorough audits are designed to give you a clear picture of how your website is performing and what can be improved.
    
  **Our site audit includes:**
    
  - **Performance Review**: Analysis of loading speed, responsiveness, and technical functionality  
  - **SEO Assessment**: Evaluation of on-page SEO, keywords, and ranking opportunities  
  - **User Experience Audit**: Insights into navigation, accessibility, and overall usability  
  - **Security Check**: Identification of vulnerabilities and recommendations for safeguarding your site  
  `}
        rightColumnContent={`Whether you’re looking to increase traffic, improve user engagement, or streamline your website’s functionality, our audit provides actionable insights tailored to your goals.
  
  The next **24 site audits** we perform are completely free! Don’t miss this opportunity to gain valuable insights and actionable recommendations at no cost.
  
  With our expertise, we go beyond surface-level issues to provide practical solutions that deliver measurable results. Let us help you identify opportunities to elevate your website’s performance and effectiveness.`} />
    <div className="-mt-4 mb-12">
      <SiteAuditForm />
    </div>
  </SubPageLayoutAlt>
  
  );
}