// import { SquaresPlusIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export const mainMenuItems = [
 
  {
    name: 'Web Development',
    href: '/web-development',
    hasDropdown: false,
  },
  {
    name: 'E-commerce',
    href: '/e-commerce',
    hasDropdown: false
  }, {
    name: 'More',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'Web App Development',
        description: 'Custom web applications tailored to your needs',
        href: '/web-app-development',
      },
      {
        name: 'Site Management',
        description: 'Comprehensive website maintenance and updates',
        href: '/website-management',
      },
      {
        name: 'WordPress Solutions',
        description: 'Expert WordPress development and customisation',
        href: '/wordpress-solutions',
      }, 
      {
        name: 'Key Information',
        description: 'Key information about our services',
        href: '/more-info',
      }

    ]
  },
]

