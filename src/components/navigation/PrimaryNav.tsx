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
// import LightButton from '../optmatic/LightButton'
// import DarkButton from '../optmatic/DarkButton'

export default function PrimaryNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="primary-nav relative bg-slightBlue sticky top-0 z-50 w-full shadow-md shadow-optBlue/10">
      <div className="mx-auto max-w-7xl">

        {/* <nav className="flex items-center justify-between py-6 md:justify-start md:space-x-10"> */}
        
        <nav className="flex items-center justify-between py-6 md:justify-start md:space-x-10 px-2 xs:px-6 lg:px-4">
          <div className="flex-shrink-0">
            <Link href="/" className="optmatic-logo flex">
              <span className="sr-only">Your Company</span>
              <img
                alt="Optmatic logo"
                src={Logo.src}
                className="w-[200px] h-[70px] sm:w-[250px] sm:h-[80px]"
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md bg-deepBlue px-4 py-2 text-white hover:bg-deepBlue/80 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkerPrimary"
            >
              <span className="absolute -inset-0.5" />
              <span className="text-sm font-medium">MENU</span>
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
                      <button className="group inline-flex items-center rounded-md text-md font-light text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-darkerPrimary focus:ring-offset-2 py-2 px-3">
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
                                  className={`-m-3 block px-4 py-2 hover:text-white/80 hover:bg-slightBlue hover:border-optBlue/5 hover:border border border-deepBlue
                                    ${dropdownItem.name === 'Important Information' ? 'bg-gradient-to-r from-optBlue/40 to-deepBlue border-l-2 border-l-optBlue/70 hover:bg-gradient-to-r hover:from-optBlue/70 hover:to-deepBlue hover:border-l-2 hover:border-l-optBlue hover:border-r-none hover:border-b-none hover:border-t-none hover:shadow-none' : ''}`}
                                >
                                  <p className={`text-md font-normal ${dropdownItem.name === 'Important Information' ? 'gradient-text' : 'text-white'}`}>
                                    {dropdownItem.name}
                                  </p>
                                  <p className={`text-xs ${dropdownItem.name === 'Important Information' ? 'text-light' : 'text-white/80'}`}>
                                    {dropdownItem.description}
                                  </p>
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
                      className={`text-md font-light ${
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
          <div className="fixed inset-0 bg-deepBlue/95 z-40" aria-hidden="true" />
          <div 
            ref={mobileMenuRef}
            className="fixed inset-0 z-50 overflow-y-auto bg-deepBlue shadow-md shadow-optBlue/10"
          >
            <div className="min-h-screen w-full">
              <div className="px-2 xs:px-6 lg:px-4 py-4">
                <div className="flex items-center justify-between shadow-md shadow-optBlue/10 bg-deepBlue pt-2 pb-6">
                  <div className="flex-shrink-0">
                    <Link href="/" className="optmatic-logo flex">
                    <img
                alt="Optmatic logo"
                src={Logo.src}
                className="w-[200px] h-[70px] sm:w-[250px] sm:h-[80px]"
              />
                    </Link>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-slightBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkerPrimary"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                
                <nav className="mt-12 space-y-2 px-4 xs:px-6 lg:px-4">
                  {mainMenuItems.map((item) => (
                    <div key={item.name} className="">
                      {item.hasDropdown && item.dropdownItems ? (
                        <div className="border-t border-white/10 mt-6 mb-2 pt-4">
                          <p className="text-white text-xl font-semibold mb-2">{item.name}</p>
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link 
                              key={dropdownItem.name} 
                              href={dropdownItem.href || '#'}
                              className={`block text-md font-light ${
                                pathname === dropdownItem.href 
                                  ? 'gradient-text' 
                                  : 'text-white hover:text-white/80'
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link 
                          href={item.href || '#'}
                          className={`block text-xl font-semibold ${
                            pathname === item.href 
                              ? 'gradient-text' 
                              : 'text-white hover:text-white/80'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                
                <div className="pt-6 px-4 xs:px-6 lg:px-4">
                  <PrimaryButton 
                    text="Schedule a Call" 
                    link="/contact" 
                    targetVal="_self"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}