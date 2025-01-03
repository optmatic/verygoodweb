import { Container } from "@/components/radiant/container";
import { Gradient } from "@/components/radiant/gradient";
import { Link } from "@/components/radiant/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Button } from "@/components/radiant/button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";


let title1 = "Adapt to the";
let title2 = " ever-evolving";
let title3 = " digital ecosystem.";

export default function PrimaryHero() {
  return (
    <div className="relative -mt-24 bg-gray-900 overflow-x-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-y-0 left-0 w-full overflow-hidden ring-1 ring-white/5 z-10">
        <svg
          className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-pattern"
              width={200}
              height={200}
              x="100%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M130 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
            <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#hero-pattern)" />
        </svg>
      </div>

      {/* Gradient blob */}
      <div
        className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)] z-20"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
          }}
        />
      </div>

      <Container className="relative z-30">
        <div className="max-w-3xl pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
        <h1 className="mt-14 text-4xl font-bold tracking-tight lg:leading-loose sm:text-5xl xl:text-6xl">
          <span className="text-white">{title1}</span>
          <span className="text-gray-950 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">{title2}</span>
          <span className="text-white">{title3}</span>
        </h1>
          <p className="mt-8 max-w-2xl text-md font-light text-white sm:text-xl">
          Optimising your digital presence is our forte. Entrust Optmatic's cutting-edge, data-driven approach for exceptional web development and optimisation.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <a href="/contact" className="mt-3 w-full rounded-md border border-gray-900 bg-gradient-to-br from-green-400 to-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
