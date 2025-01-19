'use client'

// import { SquaresPlusIcon, CursorArrowRaysIcon, HomeIcon,DocumentIcon, ChatBubbleBottomCenterIcon, Square2StackIcon, GlobeAltIcon, FingerPrintIcon, BellIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { useRef, useEffect, useState } from 'react'
import PrimaryButton from '@/components/optmatic/GradientButton3d'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

import Logo from '@/images/optmatic-logo.svg'
import { styles } from '@/config/navStyles'
import { mainMenuItems, moreMenuItems } from '@/config/navConfig'

export default function PrimaryNav() {
  const [morePopoverOpen, setMorePopoverOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

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
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
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
              className={styles.mobileMenuButton}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className={styles.desktopMenu}>
            <div className="flex space-x-2">
              {mainMenuItems.map((item) => (
                <div key={item.name} className="h-10 flex items-center">
                  <a href={item.href} className={styles.menuItem}>
                    {item.name}
                  </a>
                </div>
              ))}
              <div className="h-10 flex items-center">
                <div 
                  className="relative"
                  onMouseEnter={() => setMorePopoverOpen(true)}
                  onMouseLeave={() => setMorePopoverOpen(false)}
                >
                  <button className={styles.moreButton}>
                    <span>More</span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="ml-2 h-5 w-5 text-white group-hover:text-white/80"
                    />
                  </button>

                  {morePopoverOpen && (
                    <div className={styles.dropdownContainer}>
                      <div className="overflow-hidden rounded-lg bg-deepBlue shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="p-4 space-y-2">
                          {moreMenuItems.map((item) => (
                            <Link 
                              key={item.name} 
                              href={item.href} 
                              className={styles.dropdownItem}
                            >
                              <div>
                                <p className="text-md font-semibold">{item.name}</p>
                                <p className="text-sm text-white/80">{item.description}</p>
                              </div>
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
              <div className="hidden lg:block">
                <PrimaryButton text="Schedule a Call" link="/contact" targetVal="_self" type="primary" />
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
                  <a href="/web-development" className="text-base gradient-text font-semibold text-gray-900 hover:text-gray-700">
                    Web Development
                  </a>
                  <a href="/e-commerce" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    E-commerce
                  </a>
                  <a href="/contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Contact Us
                  </a>
                  {moreMenuItems.map((item) => (
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