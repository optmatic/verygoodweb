import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const locations = {
  Queensland: [
    { name: "Sunshine Coast", href: "/web-design-sunshine-coast" },
    { name: "Gold Coast", href: "/web-design-gold-coast" },
    { name: "Brisbane", href: "/web-design-brisbane" },
  ],
  "New South Wales": [
    { name: "Sydney", href: "/web-design-sydney" },
    { name: "Newcastle", href: "/web-design-newcastle" },
    { name: "Central Coast", href: "/web-design-central-coast" },
  ],
  Victoria: [
    { name: "Melbourne", href: "/web-design-melbourne" },
    { name: "Geelong", href: "/web-design-geelong" },
  ],
};

const services = [
  { name: "Static Websites", href: "/services/static-websites" },
  { name: "Landing Pages", href: "/services/landing-pages" },
  { name: "Business Sites", href: "/services/business-websites" },
  { name: "Portfolio Sites", href: "/services/portfolio-sites" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-deepGreen">
      <div className="container max-w-7xl mx-auto py-16">
        <div className="px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-lightGreen mb-3">
                  Very Good Web Design
                </h3>
                <p className="text-sm text-paleGreen max-w-md">
                  We build static websites that load fast, work well, and don't
                  break. No unnecessary features. No bloated frameworks. Just
                  clean, efficient code.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-paleGreen">
                  <Mail className="h-4 w-4 text-paleGreen" />
                  <a
                    href="mailto:hello@verygoodwebdesign.com"
                    className="hover:text-paleGreen"
                  >
                    hello@verygoodwebdesign.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-paleGreen">
                  <Phone className="h-4 w-4 text-paleGreen" />
                  <a href="tel:1300123456" className="hover:text-paleGreen">
                    1300 123 456
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-lightGreen">
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-paleGreen">
                  <Link href="/privacy" className="hover:text-paleGreen">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-paleGreen">
                    Terms of Service
                  </Link>
                  <span>© {new Date().getFullYear()} Very Good Web Design</span>
                </div>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-lightGreen">
                  Services
                </h4>
                <ul className="space-y-3 text-sm text-paleGreen">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1"
                      >
                        {service.name}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                  ))}
                  <li className="pt-3 border-t border-white/20">
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-lightGreen">
                        Managed Hosting
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-lightGreen">
                          $5
                        </span>
                        <span className="text-xs text-paleGreen">/ month</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-lightGreen">
                  Company
                </h4>
                <ul className="space-y-3 text-sm text-paleGreen">
                  {company.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1"
                      >
                        {item.name}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-lightGreen" />
                  <h4 className="text-sm font-semibold text-lightGreen">
                    Locations
                  </h4>
                </div>
                <div className="space-y-6 text-sm text-paleGreen">
                  {Object.entries(locations).map(([region, cities]) => (
                    <div key={region} className="space-y-3">
                      <div className="text-[13px] font-medium text-lightGreen">
                        {region}
                      </div>
                      <ul className="space-y-3">
                        {cities.map((city) => (
                          <li key={city.href}>
                            <Link
                              href={city.href}
                              className="inline-flex items-center gap-1"
                            >
                              {city.name}
                              <ArrowUpRight className="h-3 w-3" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
