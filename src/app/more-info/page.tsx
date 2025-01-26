"use client"

import ContactUs from "@/components/contact/ContactUs";
import SubPageLayoutAlt from "../layouts/SubPageLayoutAlt";
import DarkButton from "@/components/optmatic/DarkButton";
import RotatingProjects from "@/components/ui/rotating-projects";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { DownloadPriceList } from "@/components/price-list/DownloadPriceList";


const metadata = {
  title: "More Information | Optmatic",
  description: "Learn more about Optmatic and our services.",
}

export default function MoreInfo() {
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
      title="Important Information"
      // subtitle="We offer a range of web development services to help you achieve your business goals."
      // activeComponentId="web-development"
      // availableComponents={components}
    //   imageSrc={WebDevFeature.src}
    //   imageAlt="Web Development Feature Image"
    >
      <div className="flex flex-col items-start pb-10"> 
        <h3 className="text-3xl md:text-4xl font-bold text-start mb-4 underline underline-offset-4 decoration-optBlue decoration-4">Our Pricing</h3>
        <p className="text-lg md:text-xl text-start mb-8">We offer a range of pricing options to suit your business needs.</p>
      {/* <DarkButton link="/pricing" text="Download our price list" />  */}
      <DownloadPriceList />
      </div>
    </SubPageLayoutAlt>
  );
}

