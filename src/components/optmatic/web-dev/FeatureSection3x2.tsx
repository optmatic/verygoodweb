import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
import React from 'react'
  
  // Define the interface for a feature item
  export interface FeatureItem {
    name?: string
    description?: string
    icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref">>
  }
  
  interface FeatureSectionProps {
    features?: FeatureItem[]
    darkMode?: boolean
    title?: string
    subtitle?: string
    description?: string
  }
  
  export default function FeatureSection({ 
    features = [], 
    darkMode = false,
    title = "Everything you need",
    subtitle = "No server? No problem.",
    description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis."
  }: FeatureSectionProps) {
    return (
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} py-24 sm:py-32`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base/7 font-semibold text-indigo-400">{title}</h2>
            <p className={`mt-2 text-pretty text-4xl font-semibold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl`}>
              {subtitle}
            </p>
            <p className={`mt-6 text-lg/8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {description}
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
            {features.map((feature, index) => feature.name && (
              <div key={index} className="relative pl-9">
                <dt className={`inline font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {React.createElement(feature.icon || CloudArrowUpIcon, { 
                    "aria-hidden": "true",
                    className: "absolute left-1 top-1 size-5 text-indigo-500"
                  })}
                  {feature.name}
                </dt>{' '}
                <dd className={`inline ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  