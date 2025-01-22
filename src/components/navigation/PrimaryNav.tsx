'use client'

// import { SquaresPlusIcon, CursorArrowRaysIcon, HomeIcon,DocumentIcon, ChatBubbleBottomCenterIcon, Square2StackIcon, GlobeAltIcon, FingerPrintIcon, BellIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { useRef, useEffect } from 'react'
import PrimaryButton from '@/components/optmatic/GradientButton'
import Image from 'next/image'
import Link from 'next/link'
import { mainMenuItems } from '@/config/navConfig'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

import Logo from '@/images/optmatic-logo.svg'

const resources = [
  {
    name: 'Web App Development',
    description: 'This is a description of the web app development service.',
    href: '/web-app-development',
  },
  { name: 'Site Management', description: 'This is a description of the site management service.', href: '/website-management' },
  { name: 'WordPress Solutions', description: 'This is a description of the WordPress solutions service.', href: '/wordpress-solutions' },
]

import { useState } from 'react'
import LightButton from '../optmatic/LightButton'
import DarkButton from '../optmatic/DarkButton'

export default function PrimaryNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

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
    <header className="primary-nav relative bg-slightBlue sticky top-0 z-50 shadow-md shadow-optBlue/5 w-full">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex-shrink-0">
            <Link href="/" className="optmatic-logo flex">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src={Logo.src}
                
                width={250}
                height={80}
              />
            </Link>
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
          <div className="hidden md:flex md:flex-1 md:items-center">
            <div className="flex flex-1 justify-center space-x-2">
              {mainMenuItems.map((item) => (
                <div key={item.name} className="h-10 flex items-center">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="group inline-flex items-center rounded-md text-md font-semibold text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-darkerPrimary focus:ring-offset-2 py-2 px-3">
                        <span>{item.name}</span>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="ml-2 h-5 w-5 text-white group-hover:text-white/80"
                        />
                      </button>

                      {activeDropdown === item.name && item.dropdownItems && (
                        <div className="absolute z-10 mt-0 pt-2 w-screen max-w-xs -translate-x-1/4 transform px-2 transition">
                          <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid bg-deepBlue py-4 sm:gap-8 sm:px-4 sm:py-4">
                              {item.dropdownItems.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href || '#'}
                                  className="-m-3 block px-4 py-2 hover:text-white/80 hover:bg-slightBlue hover:border-optBlue/5 hover:border border border-deepBlue"
                                >
                                  <p className="text-md font-semibold text-white">{dropdownItem.name}</p>
                                  <p className="text-sm text-white/80">{dropdownItem.description}</p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className={`text-md font-semibold ${
                        pathname === item.href 
                          ? 'gradient-text hover:no-underline' 
                          : 'text-white hover:underline underline-offset-4 decoration-lightAccent decoration-2'
                      } py-2 px-3`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end items-center ml-6">
              <div className="hidden lg:block">
                <PrimaryButton text="Contact us" link="/contact" targetVal="_self" type="primary" />
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
                    {mainMenuItems.map((item) => (
                      <div key={item.name}>
                        {item.hasDropdown && item.dropdownItems ? (
                          <>
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link 
                                key={dropdownItem.name} 
                                href={dropdownItem.href || '#'}
                                className={`text-base font-semibold ${
                                  pathname === dropdownItem.href 
                                    ? 'gradient-text' 
                                    : 'text-gray-900 hover:text-gray-700'
                                }`}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </>
                        ) : (
                          <Link 
                            href={item.href || '#'}
                            className={`text-base font-semibold ${
                              pathname === item.href 
                                ? 'gradient-text' 
                                : 'text-gray-900 hover:text-gray-700'
                            }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="grid grid-cols-2 gap-4">
                  <a href="/web-development" className="text-base gradient-text font-semibold text-gray-900 hover:text-gray-700">
                    Web Development
                  </a>
                  <a href="/e-commerce" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    E-commerce
                  </a>
                  <a href="/contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Contact Us
                  </a>
                  {resources.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href || '#'}
                      className={`text-base font-semibold ${
                        pathname === item.href 
                          ? 'gradient-text' 
                          : 'text-gray-900 hover:text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-col">
                  <PrimaryButton text="Schedule a Call" link="/contact" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}