import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Placeholder from "@/media/placeholder.svg";

const locations = {
  Queensland: [
    {
      name: "Sunshine Coast",
      href: "/web-design-sunshine-coast",
      description:
        "Professional web design services for Sunshine Coast businesses.",
      suburbs: ["Maroochydore", "Noosa", "Caloundra", "Mooloolaba"],
      image: Placeholder,
    },
    {
      name: "Gold Coast",
      href: "/web-design-gold-coast",
      description: "Fast, effective websites for Gold Coast companies.",
      suburbs: ["Surfers Paradise", "Broadbeach", "Robina", "Burleigh Heads"],
      image: Placeholder,
    },
    {
      name: "Brisbane",
      href: "/web-design-brisbane",
      description: "Premium web design solutions in Brisbane.",
      suburbs: ["CBD", "New Farm", "Paddington", "West End"],
      image: Placeholder,
    },
  ],
  "New South Wales": [
    {
      name: "Sydney",
      href: "/web-design-sydney",
      description: "Expert web design services across Sydney.",
      suburbs: ["CBD", "North Shore", "Eastern Suburbs", "Inner West"],
      image: Placeholder,
    },
    {
      name: "Newcastle",
      href: "/web-design-newcastle",
      description: "Modern web design for Newcastle businesses.",
      suburbs: ["Newcastle", "Lake Macquarie", "Maitland", "Port Stephens"],
      image: Placeholder,
    },
    {
      name: "Central Coast",
      href: "/web-design-central-coast",
      description: "Professional websites for Central Coast companies.",
      suburbs: ["Gosford", "Terrigal", "The Entrance", "Wyong"],
      image: Placeholder,
    },
  ],
  Victoria: [
    {
      name: "Melbourne",
      href: "/web-design-melbourne",
      description: "Premium web design services in Melbourne.",
      suburbs: ["CBD", "South Yarra", "Richmond", "St Kilda"],
      image: Placeholder,
    },
    {
      name: "Geelong",
      href: "/web-design-geelong",
      description: "Expert web design for Geelong businesses.",
      suburbs: ["Geelong", "Ocean Grove", "Torquay", "Lara"],
      image: Placeholder,
    },
  ],
};

export default function LocationPagesSection() {
  return (
    <section className="container max-w-7xl mx-auto py-24 border-t border-white/20">
      <div className="px-4 md:px-6 space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Local Web Design Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px]">
            We build lightning-fast static websites for businesses across
            Australia. Find your local web design services:
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(locations).map(([region, cities]) => (
            <div key={region} className="space-y-8">
              <h3 className="text-xl font-semibold text-gray-900">{region}</h3>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cities.map((location) => (
                  <Link
                    key={location.name}
                    href={location.href}
                    className="group relative overflow-hidden rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <Image
                        src={location.image || "/placeholder.svg"}
                        alt={`Web design services in ${location.name}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="space-y-4 p-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-900" />
                          <h4 className="font-semibold text-gray-900">
                            {location.name}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {location.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground font-medium">
                          Serving:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {location.suburbs.map((suburb) => (
                            <span
                              key={suburb}
                              className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-gray-900"
                            >
                              {suburb}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>

                    <div className="absolute inset-0 pointer-events-none border border-white/0 group-hover:border-white/20 transition-colors rounded-lg" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
