'use client'

import { SquaresPlusIcon, CursorArrowRaysIcon, HomeIcon,DocumentIcon, ChatBubbleBottomCenterIcon, Square2StackIcon, GlobeAltIcon, FingerPrintIcon, BellIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { useRef, useEffect } from 'react'
import PrimaryButton from '@/components/optmatic/GradientButton3d'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/images/optmatic-logo.svg'

// Comment out the detailed dropdown array
/*
const detailedDropdown = [
  {
    name: "Hero sections",
    description: "Collection of hero sections.",
    href: "/hero-sections",
    icon: SquaresPlusIcon,
  },
  {
    name: "Features",
    description: "Features of Optimise Learning.",
    href: "/features",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Buttons",
    description: "The buttons/visual link components that make up the site.",
    href: "/buttons",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
   name: "Social proof",
    description: "UI components inc. positive feedback.",
    href: "/social-proof",
    icon: FingerPrintIcon,
  },
  {
    name: "Contact us",
    description: "Contact us sections that will be used across the site.",
    href: "/contact-us",
    icon: BellIcon,

  },
  {
    name: "Blog UI",
    description: "Sections w/ components to use within our blog pages.",
    href: "/blog-ui",
    icon: SquaresPlusIcon,
  },
  {
    name: "Frequently asked",
    description: "Lorem ipsum tutoring description",
    href: "/frequently-asked",
    icon: ArrowPathIcon,
  },
  {
    name: "Calls to action",
    description: "Lorem ipsum tutoring description",
    href: "/cta",
    icon: Square2StackIcon,
  }, 
  {
  name: "Location",
  description: "UI for planned location pages, to help with pSEO efforts.",
  href: "/location",
  icon: GlobeAltIcon,
  },
  {
  name: "Core",
  description: "essential UI and aren't necessarily categorisable",
  href: "/core",
  icon: HomeIcon,
  },

  {
    name: "Content sections",
    description: "UI for content layouts across the site.",
    href: "/content-sections",
    icon: DocumentIcon,
  },

]
*/

const resources = [
  {
    name: 'Subject page',
    description: 'Example subject page',
    href: '/subject-page',
  },
  { name: 'Example home', description: 'Learn how to maximize our platform to get the most out of it.', href: '/' },
  { name: 'Sub item 3', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
  { name: 'Sub item 4', description: 'Understand how we take your privacy seriously.', href: '#' },
]

import { useState } from 'react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function PrimaryNav() {
  // Remove or comment out the detailed dropdown state
  // const [detailedDropdownPopoverOpen, setDetailedDropdownPopoverOpen] = useState(false);
  const [morePopoverOpen, setMorePopoverOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="relative bg-slightBlue sticky top-0 z-50 shadow-md shadow-optBlue/5 w-full">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div>
            <a href="/" className="flex">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src={Logo.src}
                className="md:mr-10"
                width={250}
                height={80}
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md bg-deepBlue p-2 text-white hover:bg-deepBlue/80 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkerPrimary"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <div className="flex space-x-2">
              {/* Comment out the detailed dropdown menu section
              <div className="h-10 flex items-center">
                <div 
                  className="relative"
                  onMouseEnter={() => setDetailedDropdownPopoverOpen(true)}
                  onMouseLeave={() => setDetailedDropdownPopoverOpen(false)}
                >
                  ... detailed dropdown content ...
                </div>
              </div>
              */}
              <div className="h-10 flex items-center">
                <a href="#" className="text-md font-semibold text-white hover:underline underline-offset-4 decoration-lightAccent decoration-2 py-2 px-3">
                  Menu item
                </a>
              </div>
              <div className="h-10 flex items-center">
                <a href="#" className="text-md font-semibold text-white hover:underline underline-offset-4 decoration-lightAccent decoration-2 py-2 px-3">
                  Menu item 2
                </a>
              </div>
              <div className="h-10 flex items-center">
                <a href="#" className="text-md font-semibold text-white hover:underline underline-offset-4 decoration-lightAccent decoration-2 py-2 px-3">
                  Menu item 3
                </a>
              </div>
              <div className="h-10 flex items-center">
                <div 
                  className="relative"
                  onMouseEnter={() => setMorePopoverOpen(true)}
                  onMouseLeave={() => setMorePopoverOpen(false)}
                >
                  <button className="group inline-flex items-center rounded-md text-md font-semibold text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-darkerPrimary focus:ring-offset-2 data-[open]:text-white py-2 px-3">
                    <span>More</span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="ml-2 h-5 w-5 text-white group-hover:text-white/80 group-data-[open]:text-gray-600 group-data-[open]:group-hover:text-gray-500"
                    />
                  </button>

                  {morePopoverOpen && (
                    <div
                      className="absolute z-10 mt-0 pt-2 left-1/2 w-screen max-w-xs -translate-x-1/2 transform px-2 transition"
                    >
                      <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid bg-deepBlue py-4 sm:gap-8 sm:px-4 sm:py-4">
                          {resources.map((item) => (
                            <Link 
                              key={item.name} 
                              href={item.href} 
                              className="-m-3 block px-4 py-2 hover:text-white/80 hover:bg-slightBlue hover:border-optBlue/5 hover:border border border-deepBlue"
                            >
                              <p className="text-md font-semibold text-white">{item.name}</p>
                              <p className="mt-1 text-sm text-white/80">{item.description}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center md:ml-12">
              {/* <a href="#" className="hidden lg:block text-sm md:mr-2 lg:mr-10 font-medium underline decoration-lightAccent decoration-2 underline-offset-2 text-white hover:text-white/80">
                Sign in
              </a> */}
              <div className="hidden lg:block">
              <PrimaryButton text="Request a Site Audit" link="/contact" targetVal="_self" type="primary" />
              </div>
            </div>        
          </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-25 z-40" aria-hidden="true" />
          <div 
            ref={mobileMenuRef}
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      alt="Your Company"
                      src={Logo.src}
                      className="h-10 w-auto"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={toggleMobileMenu}
                      className="relative inline-flex items-center justify-center rounded-md bg-deepBlue p-2 text-white hover:bg-slightBlue hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkerPrimary"
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-6">
                    {/*{detailedDropdown.map((item) => (
                      ... detailed dropdown mobile content ...
                    ))}*/}
                  </nav>
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="text-base font-semibold text-gray-900 hover:text-gray-700">
                    Alt link
                  </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Alt link
                  </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Alt link
                  </a>
                  {resources.map((item) => (
                    <Link key={item.name} href={item.href} className="text-base font-semibold text-gray-900 hover:text-gray-700">
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-col">
                  <PrimaryButton text="Book a Free Trial Lesson" link="#" />
                  <p className="mt-6 text-left text-base font-medium text-white">
                    Optimise Hub -{' '}
                    <a href="#" className="text-darkerPrimary underline decoration-lightAccent decoration-2 underline-offset-2 hover:text-darkerPrimary/70">
                      Log in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}