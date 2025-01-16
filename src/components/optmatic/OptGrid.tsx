import WebsiteDevelopmentFeature from "@/images/features/website-dev-feature.webp"
import EcommerceFeature from "@/images/features/insights-img.jpeg"
import WebAppFeature from "@/images/features/web-app-feature.webp"
import SiteManagementFeature from "@/images/features/site-mgmt-feature.webp"
import WordPressFeature from "@/images/features/wordpress-feature.webp"


export default function OptGrid() {
  const mainServices = [
    {
      title: "Website Development",
      category: "Core Service",
      description: "Custom-built websites that deliver exceptional user experiences, optimised for performance and conversion.",
      image: WebsiteDevelopmentFeature.src,
      className: "lg:col-span-3",
      containerClassName: "min-h-[400px] max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]",
      imageClassName: "object-left"
    },
    {
      title: "E-commerce Solutions",
      category: "Core Service",
      description: "Powerful online stores built with WooCommerce and Shopify, designed to maximise sales and customer engagement.",
      image: EcommerceFeature.src ,
      className: "lg:col-span-3",
      containerClassName: "min-h-[400px] lg:rounded-tr-[2rem]",
      imageClassName: "object-left lg:object-right"
    },
  ];

  const subServices = [
    {
      title: "Web Applications",
      category: "Advanced Solutions",
      description: "Custom web applications that streamline your business processes and enhance productivity.",
      image: WebAppFeature.src,
      className: "lg:col-span-2",
      containerClassName: "min-h-[350px] lg:rounded-bl-[2rem]",
      imageClassName: "object-left"
    },
    {
      title: "Site Management",
      category: "Support",
      description: "Comprehensive website maintenance and updates to keep your site secure and performing optimally.",
      image: SiteManagementFeature.src,
      className: "lg:col-span-2",
      containerClassName: "min-h-[350px]",
      imageClassName: ""
    },
    {
      title: "WordPress Solutions",
      category: "Platform",
      description: "Expert WordPress development and customisation for scalable, content-driven websites.",
      image: WordPressFeature.src,
      className: "lg:col-span-2",
      containerClassName: "min-h-[350px] max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]",
      imageClassName: ""
    },
  ];

  return (
    <div className="topographic py-24 sm:py-32">
      
      {/* <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8"> */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="intro max-w-lg">
        <h4 className="subheading text-base/7 font-semibold">Streamlined & Future-ready</h4>
        <hr className="mt-2 mb-6 border-deepBlue/50" />
         <h2 className="mt-2 max-w-lg text-pretty text-4xl !font-bold tracking-tight text-black sm:text-5xl">
          End-to-end solutions for the <span className="gradient-text">modern web.</span>
        </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {[...mainServices, ...subServices].map((item) => (
            <div key={item.title} className={`relative ${item.className}`}>
              <div className={`group relative h-full overflow-hidden rounded-lg ${item.containerClassName}`}>
                <img
                  alt={item.title}
                  src={item.image}
                  className={`absolute h-full w-full object-cover ${item.imageClassName}`}
                />
                <div className="absolute inset-0  bg-black/10" />
                
                <div className="relative p-6 flex h-full flex-col justify-end">
                  <div className="bg-deepBlue/85 rounded-md p-4">
                  {/* <h3 className="text-sm font-semibold italic uppercase font-sans text-light">{item.category}</h3> */}
                  <h3 className="text-sm font-semibold  uppercase font-mono text-light">{item.title}</h3>
                  <hr className="my-2 border-light/30" />
                  <p className="mt-2 max-w-lg text-sm lg:text-md text-white">
                    {item.description}
                  </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
