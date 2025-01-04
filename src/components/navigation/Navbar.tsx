// 'use client'

// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from '@headlessui/react'
// // import { Container } from '@/components/radiant/container'
// import { Bars2Icon } from '@heroicons/react/24/solid'
// import { motion } from 'framer-motion'
// import { Link } from '@/components/radiant/link'
// import Logo from '@/images/optmatic-logo.svg'
// // import { PlusGrid, PlusGridRow } from '@/components/radiant/plus-grid'

// const links = [
//   { href: '/pricing', label: 'Pricing' },
//   { href: '/company', label: 'Company' },
//   { href: '/blog', label: 'Blog' },
//   { href: '/login', label: 'Login' },
// ]

// function DesktopNav() {
//   return (
//     <nav className="relative hidden lg:flex z-100">
    
//       {links.map(({ href, label }) => (
       
//           <Link
//             key={href}
//             href={href}
//             className="flex items-center px-4 py-2 text-base font-medium text-white  hover:bg-white/5"
//           >
//             {label}
//           </Link>

//       ))}
//     </nav>
 
//   )
// }

// function MobileNavButton() {
//   return (
//     <DisclosureButton
//       className="flex size-12 items-center justify-center self-center data-[hover]:bg-white/10 lg:hidden"
//       aria-label="Open main menu"
//     >
//       <Bars2Icon className="size-6 text-white" />
//     </DisclosureButton>
//   )
// }

// function MobileNav() {
//   return (
//     <DisclosurePanel className="lg:hidden">
//       <div className="flex flex-col gap-6 py-4">
//         {links.map(({ href, label }, linkIndex) => (
//           <motion.div
//             initial={{ opacity: 0, rotateX: -90 }}
//             animate={{ opacity: 1, rotateX: 0 }}
//             transition={{
//               duration: 0.15,
//               ease: 'easeInOut',
//               rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
//             }}
//             key={href}
//           >
//             <Link href={href} className="text-base font-medium text-white hover:text-white/80">
//               {label}
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//       <div className="absolute left-1/2 w-screen -translate-x-1/2">
//         <div className="absolute inset-x-0 top-0 border-t border-white/10" />
//         <div className="absolute inset-x-0 top-2 border-t border-white/10" />
//       </div>
//     </DisclosurePanel>
//   )
// }

// export function Navbar({ banner }: { banner?: React.ReactNode }) {
//   return (
//     <Disclosure as="header" className="absolute top-0 left-0 right-0 w-full z-50">
//       <PlusGrid className="relative max-w-7xl mx-auto bg-deepBlue/50 shadow-xl shadow-deepBlue/70">
//         <PlusGridRow className="relative flex justify-between my-4 px-4">
//           <div className="relative flex gap-6">
//               <Link href="/" title="Home">
//                <img src={Logo.src} alt="Optmatic Logo" className="w-[200px] transition-transform duration-300 hover:scale-105" />
//               </Link>
      
//             {banner && (
//               <div className="relative hidden items-center py-3 lg:flex">
//                 {banner}
//               </div>
//             )}
//           </div>
//           <DesktopNav />
//           <MobileNavButton />
//         </PlusGridRow>
//       </PlusGrid>
//       <MobileNav />
//     </Disclosure>
//   )
// }
