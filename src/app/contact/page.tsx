"use client"

import ContactUs from "@/components/contact/ContactUs";
import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";
import DarkButton from "@/components/optmatic/DarkButton";
import RotatingProjects from "@/components/ui/rotating-projects";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";


const metadata = {
  title: "Contact us | Optmatic",
  description: "Contact us for any questions or enquiries.",
}

export default function WebDevelopment() {
  // const components = [
    
  //   {
  //     id: "contact",
  //     name: "Contact",
  //     icon: QuestionMarkCircleIcon as React.ComponentType<unknown>
  //   }
  // ]

  return (
    <SubPageLayoutAlt
      breadcrumbPath={[
        { label: "More Info", href: "/more-info" }]}
      metadata={metadata}
      title="Contact Us"
      subtitle="We offer a range of web development services to help you achieve your business goals."
      // activeComponentId="web-development"
      // availableComponents={components}
    //   imageSrc={WebDevFeature.src}
    //   imageAlt="Web Development Feature Image"
    >
      <ContactUs />
    </SubPageLayoutAlt>
  );
}

