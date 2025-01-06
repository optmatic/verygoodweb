"use client"

import { useState, useEffect } from 'react';

export default function TechUsed() {
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    
    const logos = [
      {
        alt: "Transistor",
        src: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
      },
      {
        alt: "Reform",
        src: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
      },
      {
        alt: "Tuple",
        src: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
      },
      {
        alt: "SavvyCal",
        src: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
      },
      {
        alt: "Statamic",
        src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
      },
      
    ];

    return (
      <div className="bg-stone-400 py-16 sm:pt-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center uppercase text-xl font-normal text-gray-900">
            Tech we&apos;re most familiar with
          </h2>
          <div className="mx-auto mt-10 flex justify-between items-center">
            {logos.map((logo, index) => (
              <img
                key={index}
                alt={logo.alt}
                src={logo.src}
                width={158}
                height={48}
                className={`max-h-12 w-auto object-contain transition-all duration-500 ${
                  currentLogoIndex === index 
                    ? 'opacity-100 scale-110' 
                    : 'opacity-50 scale-100'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
}
  