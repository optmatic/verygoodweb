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
    description: "E-commerce platform powering online stores"
  },
  {
    alt: "Next",
    src: "/nextjs-logotype-dark-background.svg"
    },
    {
      alt: "Astro",
        src: "/astro-logo-light.svg"
    },
    {
      alt: "Vercel",
      src: "/vercel-logotype-light.svg"
    },
    {
      alt: "Tailwind",
      src: "/tailwindcss-logotype-white.svg"
    }

]

// Add types to the Tooltip component
const Tooltip = ({ text, isVisible, position }: TooltipProps) => {
  if (!isVisible) return null;
  
  return createPortal(
    <div 
      className="
        fixed
        px-3 py-2 
        bg-gray-900 
        text-white 
        text-sm 
        rounded-lg 
        whitespace-nowrap 
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
                  className="relative inline-block"
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setTooltip({
                      text: logo.description || logo.alt,
                      isVisible: true,
                      position: {
                        x: rect.left + rect.width / 2,
                        y: rect.top
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
      </div>
      <Tooltip 
        text={tooltip.text}
        isVisible={tooltip.isVisible}
        position={tooltip.position}
      />
    </div>
  )
}