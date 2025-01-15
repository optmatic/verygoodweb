"use client"

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

// Add interfaces for our types
interface TooltipProps {
  text: string;
  isVisible: boolean;
  position: {
    x: number;
    y: number;
  };
}

interface TooltipState {
  text: string;
  isVisible: boolean;
  position: {
    x: number;
    y: number;
  };
}

const logos = [
  {
    alt: "Shopify",
    src: "/shopify_monotone_white.svg",
    description: "Transform your business with a robust e-commerce platform that handles everything from product listings to secure payments. Perfect for entrepreneurs wanting a professional online store without complex technical setup."
  },
  {
    alt: "Next",
    src: "/nextjs-logotype-dark-background.svg",
    description: "Supercharge your website's performance and user experience. Our Next.js applications load faster, rank better in search results, and provide a smooth, app-like browsing experience across all devices."
  },
  {
    alt: "Astro",
    src: "/astro-logo-light.svg",
    description: "Achieve lightning-fast websites that load incredibly quickly. Ideal for businesses wanting to improve their online visibility, reduce bounce rates, and provide a seamless user journey."
  },
  {
    alt: "Vercel",
    src: "/vercel-logotype-light.svg",
    description: "Enterprise-grade hosting that ensures your website is always online, globally accessible, and performs brilliantly. Automatic updates, instant deployments, and rock-solid reliability."
  },
  {
    alt: "Tailwind",
    src: "/tailwindcss-logotype-white.svg",
    description: "Custom design without the hefty price tag. We create pixel-perfect, responsive interfaces that look professional and work flawlessly across all screen sizes and devices."
  }
]


// Add types to the Tooltip component
const Tooltip = ({ text, isVisible, position }: TooltipProps) => {
  if (!isVisible) return null;
  
  return createPortal(
    <div 
      className="
        fixed
        px-4 py-3
        bg-gray-900 
        text-white 
        text-sm 
        rounded-lg 
        whitespace-normal
        max-w-[300px]
        z-[100]
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

export default function TechUsedDark() {
  const [tooltip, setTooltip] = useState<TooltipState>({ 
    text: '', 
    isVisible: false, 
    position: { x: 0, y: 0 } 
  });

  return (
    <div className="bg-deepBlue py-16 sm:py-24 flex items-center justify-center w-full">
      <div className="w-full max-w-5xl px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-center text-xl font-bold text-white">
          [tech we use]
        </h2>
        <div className="mt-10 w-full flex justify-center relative">
          <div className="w-full overflow-hidden">
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
                    className={`
                      w-auto grayscale hover:[animation-play-state:paused] object-contain
                      ${logo.alt === "Astro" || logo.alt === "Tailwind" ? "h-[80px]" : "h-[45px]"}
                      min-w-[120px] max-w-[200px]
                    `}
                  />
                </div>
              ))}
            </div>
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