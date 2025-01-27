import GradientButton3d from '../optmatic/GradientButton'
import OptmaticLogo from '@/images/optmatic-logo-dark.svg'
import { GradientFooterBackground } from '../radiant/gradient'
  
  export default function Footer() {
    return (
      <footer className="relative bg-white border-t border-deepBlue/20">
        <GradientFooterBackground />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-4 lg:px-0 lg:pt-32 lg:pb-8">
        {/* <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-0 lg:py-32"> */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-deepBlue sm:text-5xl">
              Ready to discuss your project? Let&apos;s get started.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg/8 text-deepBlue">
              Excited to bring your vision to life? Let&apos;s kick off your project with a conversation!
            </p>
            <div className="mt-8 flex justify-center">
              <GradientButton3d text="Get started" link="/get-started" />
            </div>
          </div>
          <div className="mt-12 lg:mt-24 border-t border-deepBlue p-4 md:flex md:items-center md:justify-between">
            <div className="md:flex md:items-center md:justify-between">
              <img
                alt="Company name"
                src={OptmaticLogo.src}
                className="h-[50px]"
              />
            </div>
            <p className="mt-4 text-sm/6 text-deepBlue md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} Optmatic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  