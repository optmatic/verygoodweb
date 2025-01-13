const logos = [
  {
    alt: "Shopify",
    src: "https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-monotone-black-6bded589fa6172f888c4b4f6ae1eca654e865dbb93271f7e2b94a563749aeb40.svg"
  },
  {
    alt: "Next",
    src: "/nextjs-logotype-light-background.svg"
    },
    {
      alt: "Astro",
        src: "https://astro.build/assets/press/astro-logo-dark.svg"
    },
    {
      alt: "Vercel",
      src: "/vercel-logotype-dark.svg"
    },
    {
      alt: "Tailwind",
      src: "/tailwindcss-logotype.svg"
    }

]

export default function TechUsed() {
    return (
      <div className="bg-stone-100 py-16 sm:py-24 flex items-center justify-center w-full">
        <div className="w-full max-w-4xl px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-center text-xl font-bold text-gray-900">
            [tech]
          </h2>
          <div className="mt-10 w-full flex justify-center overflow-hidden">
            <div className="animate-scroll flex gap-8 [&>*]:shrink-0">
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={`${logo.alt}-${index}`}
                  alt={logo.alt}
                  src={logo.src}
                  className="w-[150px] h-auto grayscale"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}
  