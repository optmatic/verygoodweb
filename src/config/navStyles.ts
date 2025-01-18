export const styles = {
    header: 'relative bg-slightBlue sticky top-0 z-50 shadow-md shadow-optBlue/5 w-full',
    container: 'mx-auto max-w-7xl',
    nav: 'flex items-center justify-between py-6 md:justify-start md:space-x-10',
    mobileMenuButton: 'relative inline-flex items-center justify-center rounded-md bg-deepBlue p-2 text-white hover:bg-deepBlue/80 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkerPrimary',
    desktopMenu: 'hidden md:flex md:flex-1 md:items-center md:justify-between',
    menuItem: 'text-md font-semibold text-white hover:underline underline-offset-4 decoration-lightAccent decoration-2 py-2 px-3',
    moreButton: 'group inline-flex items-center rounded-md text-md font-semibold text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-darkerPrimary focus:ring-offset-2 data-[open]:text-white py-2 px-3',
    dropdownContainer: 'absolute z-10 mt-0 pt-2 left-1/2 w-screen max-w-xs -translate-x-1/2 transform px-2 transition',
    dropdownItem: '-m-3 block px-4 py-2 hover:text-white/80 hover:bg-slightBlue hover:border-optBlue/5 hover:border border border-deepBlue',
  }