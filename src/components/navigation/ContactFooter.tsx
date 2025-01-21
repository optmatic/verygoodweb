import GradientButton3d from '../optmatic/GradientButton'
import OptmaticLogo from '@/images/optmatic-logo.svg'
import { GradientFooterBackground } from '../radiant/gradient'
  
  export default function Footer() {
    return (
      <footer className="relative bg-deepBlue">
        <GradientFooterBackground />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-0 lg:pt-32 lg:pb-16">
        {/* <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-0 lg:py-32"> */}
        {/* <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32"> */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-light sm:text-5xl">
              Ready to discuss your project? Let&apos;s get started.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg/8 text-light">
            Excited to bring your vision to life? Let’s kick off your project with a conversation!
            </p>
            <div className="mt-8 flex justify-center">
            <GradientButton3d text="Get started" link="/contact" />
            </div>
          </div>
          {/* <div className="mt-24 border-t border-gray-200 pt-12 xl:grid xl:grid-cols-3 xl:gap-8">
            <img
              alt="Company name"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
              className="h-9"
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-900">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-900">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-900">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-900">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          <div className="mt-12 lg:mt-24 border-t border-light pt-4 md:flex md:items-center md:justify-between">
          {/* <div className="flex gap-x-6 md:order-2">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div> */}
            <div className="flex flex-col items-center">
            <img
              alt="Company name"
              src={OptmaticLogo.src}
              className="h-9"
            />
            </div>
            <p className="mt-8 text-sm/6 text-light md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} Optmatic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  