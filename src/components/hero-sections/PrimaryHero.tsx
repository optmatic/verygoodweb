"use client";

import { Container } from "@/components/radiant/container";
import { Gradient } from "@/components/radiant/gradient";
import { Link } from "@/components/radiant/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Button } from "@/components/radiant/button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from 'react';


let title1 = "Adapt to the";
let title2 = " ever-evolving";
let title3 = " digital ecosystem.";

export default function PrimaryHero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const rotatingWords = ['E-commerce', 'UI Design', 'Web Development', 'Mobile Apps', 'Search Engine Optimisation'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 3000); // Changed from 1000 to 3000 for better readability

    return () => clearInterval(interval);
  }, []);

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
          background: `url('/wave-bg.jpeg')`,
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
        <div className="max-w-3xl pb-16 pt-16 sm:pb-24 sm:pt-24 md:pb-32 md:pt-32">
        <h1 className="mt-14 text-4xl font-bold tracking-tight lg:leading-loose sm:text-5xl xl:text-6xl">
          <span className="text-white">{title1}</span>
          <span className="text-gray-950 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">{title2}</span>
          <span className="text-white">{title3}</span>
        </h1>
          <p className="mt-8 max-w-2xl text-md font-light text-white sm:text-xl">
          Optimising your digital presence is our forte. Entrust Optmatic's cutting-edge, data-driven approach for exceptional web development and optimisation.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <a href="/contact" className="mt-3 w-full rounded-md border border-gray-900 bg-gradient-to-br from-green-400 to-blue-600 px-3 py-1.5 text-base font-medium text-white shadow-sm hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center">
              Contact
            </a>
          </div>

          <div className="mt-12  relative py-2 rounded-sm shadow-lg shadow-black/20 overflow-hidden whitespace-nowrap">
            <div 
              className="inline-flex scrolling-words"
              style={{
                // Removed the animation for the transition
                // animation: `scroll ${rotatingWords.length * 3}s linear infinite`
                // Commented out the animation to remove any slight movement
                // animation: 'none' // Uncomment this line if you want to explicitly set no animation
              }}
            >
              {/* Double the words to create seamless loop */}
              {[...rotatingWords, ...rotatingWords].map((word, index) => (
                <span 
                  key={index}
                  className="text-white font-medium mx-4 cursor-pointer hover:italic"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

