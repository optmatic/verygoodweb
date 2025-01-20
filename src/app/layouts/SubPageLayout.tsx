"use client"

import React, { useState, useEffect, type ReactNode } from "react";
// import Image from "next/image";
import Link from "next/link";
import GradientButton3d from "@/components/optmatic/GradientButton";
import { ChevronRightIcon, HomeIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
// import { BuildingOfficeIcon, CreditCardIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid'
import type { Metadata } from "next";
import WaveBackground from "@/images/wave-bg.jpeg"
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/navigation/ContactFooterLight";

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
    <div className="sublayout min-h-screen flex flex-col">
      <div className="relative overflow-x-hidden overflow-y-hidden">
        {/* Background gradient */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(to left, rgb(17 24 39 / 0.7) 40%, rgba(17, 24, 39, 0.8) 70%, rgba(17, 24, 39, 0.9) 100%)',
          }}
        />

        {/* Animated Wave Background */}
        <div 
          className="absolute right-0 top-0 w-full h-full z-10"
          style={{
            background: `url(${WaveBackground.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right 25%',
            opacity: '.15',
            filter: 'contrast(1.2) brightness(.6) blur(1px)',
            mixBlendMode: 'overlay',
            animation: 'wave-move 15s ease-in-out infinite',
            transform: 'scale(1.4)',
          }}
        />

        {/* Gradient Overlay */}
        <div 
          className="absolute right-0 top-0 h-full z-20"
          style={{
            background: 'linear-gradient(to right, rgb(17 24 39) 20%, rgba(17, 24, 39, 0.85) 40%, rgba(17, 24, 39, 0.6) 100%)',
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
                      <Link href="/" className="">
                        <HomeIcon className="size-6 shrink-0 text-light" aria-hidden="true" />
                        <span className="sr-only">Home</span>
                      </Link>
                    </li>
                    {breadcrumbPath.map((item, index) => (
                      <li key={item.href}>
                        <div className="flex items-center">
                          <ChevronRightIcon className="size-5 shrink-0 text-light" aria-hidden="true" />
                          {item.href === '/' ? (
                            <HomeIcon className="ml-4 size-5 shrink-0 text-light" aria-hidden="true" />
                          ) : (
                            <Link
                              href={item.href}
                              className="ml-4 text-xs sm:text-sm font-mono uppercase gradient-text font-black"
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
                  <h1 className="pr-2 max-w-2xl text-3xl font-semibold tracking-tight text-light sm:text-6xl lg:col-span-2 xl:col-auto">
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <div className="mt-4 max-w-2xl lg:mt-6 xl:col-end-1 xl:row-start-1">
                    <p className="subtitle text-md font-light leading-8 text-pretty text-white sm:text-lg">
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
                <div className="md:pl-[25px] md:w-1/2 flex items-center justify-center">
                  <img
                    src={imageSrc}
                    alt={imageAlt || ""}
                    className="rounded-sm object-cover saturate-150 border border-lighterBlue shadow-md shadow-deepBlue/70 w-auto lg:min-w-[450px] h-auto max-h-[300px] object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {availableComponents.length > 0 && (
        <div className={classNames(
          'sticky z-40 transition-all duration-200',
          isScrolled ? 'top-[132px] bg-deepBlue' : 'top-0 bg-deepBlue'
        )}>
          <div className={classNames(
            'transition-all duration-200',
            isScrolled ? 'bg-white shadow-lg' : 'bg-deepBlue'
          )}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {/* Mobile tab alternative, will leave for now */}
              <div className="grid grid-cols-1 hidden">
                <select
                  defaultValue={dynamicTabs.find((tab) => tab.current)?.name}
                  aria-label="Select a tab"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-light outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-deepBlue"
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          {wrapChildrenWithAnchors(children)}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubPageLayout;