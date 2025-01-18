"use client"

import React, { useState, useEffect, type ReactNode } from "react";
// import Image from "next/image";
import Link from "next/link";
import GradientButton3d from "@/components/optmatic/GradientButton3d";
import { ChevronRightIcon, HomeIcon, ChevronDownIcon, LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'
// import { BuildingOfficeIcon, CreditCardIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid'
import type { Metadata } from "next";
import WaveBackground from "@/images/wave-bg.jpeg"

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface TabItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: string }>;
  current: boolean;
  componentId: string;
}

interface SubPageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  breadcrumbPath: BreadcrumbItem[];
  activeComponentId?: string;
  availableComponents?: readonly {
    readonly id: string;
    readonly name: string;
    readonly icon: React.ComponentType<{ className?: string; "aria-hidden"?: string }>;
  }[];
  metadata?: Metadata;
  variant?: 'dark' | 'light';
  cards?: {
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string; "aria-hidden"?: string }>;
  }[];
}

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const SubPageLayout: React.FC<SubPageLayoutProps> = ({
  children,
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  breadcrumbPath,
  activeComponentId,
  availableComponents = [],
  metadata,
  variant = 'dark',
  cards = [
    {
      name: 'Sales',
      description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
      icon: PhoneIcon,
    },
    {
      name: 'Technical Support',
      description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
      icon: LifebuoyIcon,
    },
    {
      name: 'Media Inquiries',
      description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
      icon: NewspaperIcon,
    },
  ],
}) => {
  const [currentActiveId, setCurrentActiveId] = useState(activeComponentId);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && availableComponents.some(comp => comp.id === hash)) {
        setCurrentActiveId(hash);
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [availableComponents]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.querySelector('[aria-label="Tabs"]')?.parentElement?.parentElement?.parentElement;
      if (navElement) {
        const rect = navElement.getBoundingClientRect();
        setIsScrolled(rect.top <= 132); // 132px is the sticky top position
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add intersection observer effect
  useEffect(() => {
    if (!availableComponents.length) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newActiveId = entry.target.id;
          setCurrentActiveId(newActiveId);
          window.history.replaceState(null, '', `#${newActiveId}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      // Increased top margin to detect sections earlier
      // // rootMargin: '-300px 0px -70% 0px',
      // threshold: 0
    });

    availableComponents.forEach(component => {
      const element = document.getElementById(component.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [availableComponents]);

  // Generate dynamic tabs using currentActiveId instead of activeComponentId
  const dynamicTabs: TabItem[] = availableComponents.map(component => ({
    name: component.name,
    href: `#${component.id}`,
    icon: component.icon,
    current: component.id === currentActiveId,
    componentId: component.id
  }));

  // Simplify the wrapper function to respect existing IDs
  const wrapChildrenWithAnchors = (children: ReactNode) => {
    if (!availableComponents.length) return children;

    if (Array.isArray(children)) {
      return children.map((child, index) => {
        if (!React.isValidElement(child)) return child;
        
        const element = child as React.ReactElement<{ style?: React.CSSProperties; id?: string }>;
        const existingStyle = element.props.style || {};
        
        const componentId = availableComponents[index]?.id;
        
        return React.cloneElement(element, {
          key: componentId || index,
          style: {
            ...existingStyle,
            scrollMarginTop: '400px' // Increased to ensure better section detection
          },
          ...(componentId && !element.props.id ? { id: componentId } : {})
        });
      });
    }

    return children;
  };

  // Set metadata if provided
  useEffect(() => {
    if (metadata) {
      document.title = metadata.title as string || '';
      // You can also set other metadata like description, etc.
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", metadata.description as string || '');
      }
    }
  }, [metadata]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative overflow-x-hidden overflow-y-hidden">
        {/* Background gradient - Updated with conditional styles */}
        <div 
          className={`absolute inset-0 w-full h-full ${
            variant === 'dark' ? 'bg-deepBlue' : 'bg-slightBlue'
          }`}
          style={{
            background: variant === 'dark' 
              ? 'linear-gradient(to left, rgb(17 24 39) 40%, rgba(17, 24, 39, 0.8) 70%, rgba(17, 24, 39, 0.7) 100%)'
              : 'linear-gradient(to left, rgb(249 250 251) 40%, rgba(249, 250, 251, 0.8) 70%, rgba(249, 250, 251, 0.7) 100%)',
          }}
        />

        {/* Animated Wave Background - Updated opacity and filters */}
        <div 
          className="absolute right-0 top-0 w-full h-full z-10"
          style={{
            background: `url(${WaveBackground.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right 25%',
            opacity: variant === 'dark' ? '.15' : '.2',
            filter: variant === 'dark' 
              ? 'contrast(1.2) brightness(.6) blur(1px)'
              : 'contrast(1) brightness(1) blur(1px)',
            mixBlendMode: variant === 'dark' ? 'overlay' : 'multiply',
            animation: 'wave-move 15s ease-in-out infinite',
            transform: 'scale(1.4)',
          }}
        />

        {/* Gradient Overlay - Updated with stronger gradient */}
        <div 
          className="absolute right-0 top-0 h-full z-20"
          style={{
            background: variant === 'dark'
              ? 'linear-gradient(to right, rgb(17 24 39) 20%, rgba(17, 24, 39, 0.95) 40%, rgba(17, 24, 39, 0.8) 100%)'
              : 'linear-gradient(to right, rgb(249 250 251) 20%, rgba(249, 250, 251, 0.95) 40%, rgba(249, 250, 251, 0.8) 100%)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Content */}
        <div className="relative z-30 py-8 lg:py-14">
          <div className={`pt-12 ${availableComponents.length > 0 ? 'pb-12' : 'pb-12 sm:pt-12'} mx-auto max-w-7xl px-6 lg:px-8`}>
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="lg:gap-y-8 md:w-1/2 mb-8 md:mb-0">
                <nav aria-label="Breadcrumb" className="flex mb-6 sm:mb-4">
                  <ol role="list" className="flex items-center sm:space-x-4">
                    <li>
                      <Link href="/" className="text-optBlue/30">
                        <HomeIcon className="size-5 shrink-0" aria-hidden="true" />
                        <span className="sr-only">Home</span>
                      </Link>
                    </li>
                    {breadcrumbPath.map((item, index) => (
                      <li key={item.href}>
                        <div className="flex items-center">
                          <ChevronRightIcon className="size-5 shrink-0 text-gradient" aria-hidden="true" />
                          {item.href === '/' ? (
                            <HomeIcon className="ml-4 size-5 shrink-0 text-riverBlue" aria-hidden="true" />
                          ) : (
                            <Link
                              href={item.href}
                              className="ml-4 text-xs sm:text-sm font-medium text-riverBlue hover:text-riverBlue/90"
                              aria-current={index === breadcrumbPath.length - 1 ? 'page' : undefined}
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </nav>
                {title && (
                  <h1 className={`pr-2 max-w-2xl text-3xl font-extrabold tracking-tight text-balance ${
                    variant === 'dark' ? 'text-light' : 'text-gray-900'
                  } sm:text-5xl lg:col-span-2 xl:col-auto`}>
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <div className="mt-4 max-w-2xl lg:mt-6 xl:col-end-1 xl:row-start-1">
                    <p className={`text-md font-normal text-pretty ${
                      variant === 'dark' ? 'text-white' : 'text-gray-600'
                    } sm:text-lg`}>
                      {subtitle}
                    </p>
                    {buttonText && buttonLink && (
                      <div className="mt-10 flex items-center gap-x-6">
                        <GradientButton3d text={buttonText} link={buttonLink} />
                      </div>
                    )}
                  </div>
                )}
              </div>
              {imageSrc && (
                <div className="md:w-1/2 md:pl-[25px]">
                  <img
                    src={imageSrc}
                    alt={imageAlt || ""}
                    className="rounded-md shadow-md shadow-riverBlueLight lg:h-64 lg:w-auto lg:object-cover object-top"
                  />
                </div>
              )}
            </div>

            {/* Add the cards section */}
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {cards.map((card) => (
                <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                  <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-400" />
                  <div className="text-base/7">
                    <h3 className="font-semibold text-white">{card.name}</h3>
                    <p className="mt-2 text-gray-300">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {availableComponents.length > 0 && (
        <div className={classNames(
          'sticky z-40 transition-all duration-200',
          isScrolled ? 'top-[132px] bg-white' : 'top-0 bg-light'
        )}>
          <div className={classNames(
            'transition-all duration-200',
            isScrolled ? 'bg-white shadow-lg' : 'bg-light'
          )}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {/* Mobile tab alternative, will leave for now */}
              <div className="grid grid-cols-1 hidden">
                <select
                  defaultValue={dynamicTabs.find((tab) => tab.current)?.name}
                  aria-label="Select a tab"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                >
                  {dynamicTabs.map((tab) => (
                    <option key={tab.name}>{tab.name}</option>
                  ))}
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
                />
              </div>
              <div className="hidden sm:block">
                <nav aria-label="Tabs" className="flex space-x-8">
                  {dynamicTabs.map((tab) => (
                    <a
                      key={tab.name}
                      href={tab.href}
                      onClick={() => {
                        if (!tab.current) {
                          window.location.hash = tab.componentId;
                        }
                      }}
                      aria-current={tab.current ? 'page' : undefined}
                      className={classNames(
                        tab.current
                          ? 'border-riverBlue text-riverBlue'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'group inline-flex items-center border-b-2 p-2 text-sm font-medium transition-colors duration-200',
                      )}
                    >
                      <tab.icon
                        aria-hidden="true"
                        className={classNames(
                          tab.current ? 'text-riverBlue' : 'text-gray-400 group-hover:text-gray-500',
                          'mr-2 -ml-0.5 size-5',
                        )}
                      />
                      <span>{tab.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className={classNames(
              'border-b w-full',
              isScrolled ? 'border-gray-100' : 'border-gray-200'
            )} />
          </div>
        </div>
      )}

      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          {wrapChildrenWithAnchors(children)}
        </div>
      </main>
    </div>
  );
};

export default SubPageLayout;