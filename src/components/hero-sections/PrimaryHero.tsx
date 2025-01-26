"use client";

import { Container } from "@/components/radiant/container";
// import { Gradient } from "@/components/radiant/gradient";
// import { Link } from "@/components/radiant/link";
// import { Navbar } from "@/components/navigation/Navbar";
// import { Button } from "@/components/radiant/button";
// import { ChevronRightIcon } from "@heroicons/react/24/outline";
// import { useState, useEffect } from 'react';
import WaveBackground from "@/images/wave-bg.jpeg"
import GradientButton3d from "../optmatic/GradientButton";


const title1 = "Thrive in the";
const title2 = " ever-evolving";
const title3 = " digital ecosystem.";

export default function PrimaryHero() {
  const rotatingWords = [
    { text: 'E-commerce', link: '/e-commerce' },
    { text: 'Web Development', link: '/web-development' },
    { text: 'Site Management', link: '/website-management' },
    { text: 'WordPress', link: '/wordpress-solutions' },
    { text: 'Web Applications', link: '/web-app-development' }
  ];

  return (
    <div className="relative bg-deepBlue overflow-x-hidden overflow-y-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 w-full h-full bg-deepBlue"
        style={{
          background: 'linear-gradient(to left, rgb(17 24 39) 40%, rgba(17, 24, 39, 0.8) 70%, rgba(17, 24, 39, 0.7) 100%)',
        }}
      />

      {/* Animated Wave Background - Right Side Only */}
      <div 
        className="absolute right-0 top-0 w-full h-full z-10"
        style={{
          background: `url(${WaveBackground.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right 25%',
          opacity: '.4',
          filter: 'contrast(1.4) brightness(.5)',
          mixBlendMode: 'soft-light',
          animation: 'wave-move 15s ease-in-out infinite',
          transform: 'scale(1.1)',
        }}
      />

      {/* Gradient Overlay - Right Side Only */}
      <div 
        className="absolute right-0 top-0 h-full z-20"
        style={{
          background: 'linear-gradient(to right, rgb(17 24 39), transparent)',
          mixBlendMode: 'multiply',
        }}
      />


      <div
        className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)] z-20"
        aria-hidden="true"
      >
        {/* <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
          }}
        /> */}
      </div>

      {/* Adjust container z-index to be above the wave */}
      <Container className="relative z-40">
        {/* WAS <div className="max-w-3xl pb-16 pt-16 sm:pb-24 sm:pt-24 md:pt-32"> */}
        <div className="max-w-3xl pb-16 pt-16 sm:pb-24 sm:pt-24">
          <div className="leading-10">
        <h1 className="text-5xl pt-4 font-bold font-serif sm:text-6xl">
          <span className="text-white">{title1}</span>
          <span className="text-gray-950 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">{title2}</span>
          <span className="text-white">{title3}</span>
        </h1>
        </div>
          <p className="mt-8 max-w-2xl text-md font-normal text-white sm:text-xl">
          Optimising your digital presence is our forte. Entrust Optmatic&apos;s cutting-edge, data-driven approach for exceptional web dev and optimisation.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
         <GradientButton3d text="Why Optmatic?" link="#why-optmatic" targetVal="_self" type="primary" />
          </div>

          <div className="border border-optBlue/10 shadow-lg shadow-optBlue/5 mt-12 relative py-2 rounded-sm overflow-hidden whitespace-nowrap">
            <div 
              className="inline-flex scrolling-words"
            >
              {[...rotatingWords, ...rotatingWords].map((word, index) => (
                <a 
                  href={word.link}
                  key={index}
                  className="text-white font-medium mx-4 cursor-pointer hover:italic transition-all duration-300"
                >
                  {word.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

