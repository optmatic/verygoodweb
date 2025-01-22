import OptmaticLogoDark from '@/images/optmatic-logo-dark.svg'
import OptmaticLogoLight from '@/images/optmatic-logo.svg'
import { GradientFooterBackground } from '../radiant/gradient'

interface MinimalFooterProps {
  isDark?: boolean;
}

export default function MinimalFooter({ isDark = false }: MinimalFooterProps) {
  return (
    <footer className={`relative ${isDark ? 'bg-deepBlue border-white/20' : 'bg-white border-deepBlue/20'} border-t`}>
      <GradientFooterBackground />
      <div className="relative mx-auto max-w-7xl px-6 pt-4 pb-8 lg:px-0">
        <div className="pt-4 md:flex md:items-center md:justify-between">
          <div className="flex flex-col items-center">
            <img
              alt="Company name"
              src={isDark ? OptmaticLogoLight.src : OptmaticLogoDark.src}
              className="h-9"
            />
          </div>
          <p className={`mt-8 text-sm/6 ${isDark ? 'text-white' : 'text-deepBlue'} md:order-1 md:mt-0`}>
            &copy; {new Date().getFullYear()} Optmatic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
  