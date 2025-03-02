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
    <footer className="border-t border-white/20 bg-black">
      <div className="container max-w-7xl mx-auto py-16">
        <div className="px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Very Good Web Design
                </h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  We build static websites that load fast, work well, and don't
                  break. No unnecessary features. No bloated frameworks. Just
                  clean, efficient code.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-gray-900" />
                  <a
                    href="mailto:hello@verygoodwebdesign.com"
                    className="hover:text-gray-900"
                  >
                    hello@verygoodwebdesign.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-gray-900" />
                  <a href="tel:1300123456" className="hover:text-gray-900">
                    1300 123 456
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-white/20">
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground">
                  <Link href="/privacy" className="hover:text-gray-900">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-gray-900">
                    Terms of Service
                  </Link>
                  <span>© {new Date().getFullYear()} Very Good Web Design</span>
                </div>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-gray-900">
                  Services
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1 hover:text-gray-900"
                      >
                        {service.name}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                  ))}
                  <li className="pt-3 border-t border-white/20">
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-900">
                        Managed Hosting
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-gray-900">
                          $5
                        </span>
                        <span className="text-xs text-muted-foreground">
                          /month
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-gray-900">Company</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {company.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 hover:text-gray-900"
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
                  <MapPin className="h-4 w-4 text-gray-900" />
                  <h4 className="text-sm font-semibold text-gray-900">
                    Locations
                  </h4>
                </div>
                <div className="space-y-6 text-sm text-muted-foreground">
                  {Object.entries(locations).map(([region, cities]) => (
                    <div key={region} className="space-y-3">
                      <div className="text-[13px] font-medium text-gray-900">
                        {region}
                      </div>
                      <ul className="space-y-3">
                        {cities.map((city) => (
                          <li key={city.href}>
                            <Link
                              href={city.href}
                              className="inline-flex items-center gap-1 hover:text-gray-900"
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
