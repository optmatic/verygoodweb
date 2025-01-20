"use client"

import { useState } from 'react'
import { createPortal } from 'react-dom'

// Add interfaces
interface TooltipProps {
  text: string;
  isVisible: boolean;
  position: { x: number; y: number; };
}

// Add Tooltip component
const Tooltip = ({ text, isVisible, position }: TooltipProps) => {
  if (!isVisible) return null;
  
  return createPortal(
    <div 
      className="
        fixed px-4 py-3
        bg-gray-900 text-white text-sm 
        rounded-lg whitespace-normal
        max-w-[300px] z-[100]
        pointer-events-none
      "
      style={{
        top: `${position.y - 10}px`,
        left: `${position.x}px`,
        transform: 'translate(-50%, -100%)'
      }}
    >
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900"></div>
    </div>,
    document.body
  );
};

// Update logos array to include descriptions
const logos = [
  {
    alt: "Shopify",
    src: "https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-monotone-black-6bded589fa6172f888c4b4f6ae1eca654e865dbb93271f7e2b94a563749aeb40.svg",
    description: "Transform your business with a robust e-commerce platform that handles everything from product listings to secure payments."
  },
  {
    alt: "Next",
    src: "/nextjs-logotype-light-background.svg",
    description: "Supercharge your website's performance and user experience. Our Next.js applications load faster, rank better in search results, and provide a smooth, app-like browsing experience across all devices."
    },
    {
      alt: "Astro",
      src: "https://astro.build/assets/press/astro-logo-dark.svg",
      description: "Achieve lightning-fast websites that load incredibly quickly. Ideal for businesses wanting to improve their online visibility, reduce bounce rates, and provide a seamless user journey."
    },
    {
      alt: "Vercel",
      src: "/vercel-logotype-dark.svg",
      description: "Deploy your website with ease. Our Vercel expertise ensures your site is always online, globally accessible, and performs brilliantly. Automatic updates, instant deployments, and rock-solid reliability."
    },
    {
      alt: "Tailwind",
      src: "/tailwindcss-logotype.svg",
      description: "Craft beautiful, responsive designs with a utility-first approach. Our Tailwind CSS expertise ensures your website looks modern and performs optimally across all devices."
    }
]

export default function TechUsed() {
  const [tooltip, setTooltip] = useState({ 
    text: '', 
    isVisible: false, 
    position: { x: 0, y: 0 } 
  });

  return (
    <div className="bg-white py-16 sm:py-24 flex items-center justify-center w-full">
      <div className="w-full max-w-5xl px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-center text-xl font-bold text-gray-900">
          [tech we use]
        </h2>
        <div className="mt-10 w-full flex justify-center overflow-hidden">
          <div className="animate-scroll hover:[animation-play-state:paused] flex gap-8 [&>*]:shrink-0">
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={`${logo.alt}-${index}`}
                className="relative inline-flex items-center py-8"
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setTooltip({
                    text: logo.description || logo.alt,
                    isVisible: true,
                    position: {
                      x: rect.left + rect.width / 2,
                      y: rect.top + (rect.height / 4)
                    }
                  });
                }}
                onMouseLeave={() => setTooltip(prev => ({ ...prev, isVisible: false }))}
              >
                <img
                  alt={logo.alt}
                  src={logo.src}
                  className="w-[200px] h-auto grayscale hover:[animation-play-state:paused]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Tooltip 
        text={tooltip.text}
        isVisible={tooltip.isVisible}
        position={tooltip.position}
      />
    </div>
  )
}
  