import GradientButton3d from '../optmatic/GradientButton'
import OptmaticLogo from '@/images/optmatic-logo-dark.svg'
import { GradientFooterBackground } from '../radiant/gradient'
  
  export default function MinimalFooter() {
    return (
      <footer className="relative bg-white border-t border-deepBlue/20">
        <GradientFooterBackground />
        <div className="relative mx-auto max-w-7xl px-6 pt-4 pb-8 lg:px-0">
          <div className="pt-4 md:flex md:items-center md:justify-between">
            <div className="flex flex-col items-center">
              <img
                alt="Company name"
                src={OptmaticLogo.src}
                className="h-9"
              />
            </div>
            <p className="mt-8 text-sm/6 text-deepBlue md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} Optmatic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  