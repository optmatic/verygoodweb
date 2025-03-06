import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    name: "Landing Page",
    price: "from $2,499",
    description: "Perfect for product launches and marketing campaigns.",
    features: [
      "Custom design",
      "Single page",
      "Contact form",
      "Analytics integration",
      "Mobile responsive",
      "SEO optimization",
      "5-day delivery",
    ],
  },
  {
    name: "Business Site",
    price: "from $4,999",
    description: "Complete website for established businesses.",
    features: [
      "Custom design",
      "Up to 5 pages",
      "Blog setup",
      "Contact form",
      "Analytics integration",
      "Mobile responsive",
      "SEO optimization",
      "14-day delivery",
    ],
  },
  {
    name: "E-commerce",
    price: "from $7,999",
    description: "Full static e-commerce solution.",
    features: [
      "Custom design",
      "Unlimited products",
      "Shopping cart",
      "Payment integration",
      "Inventory management",
      "Order notifications",
      "Mobile responsive",
      "SEO optimization",
      "21-day delivery",
    ],
  },
];

export default function PricingList() {
  return (
    <section className="container max-w-7xl mx-auto py-24 border-t border-white/20">
      <div className="px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lightGreen to-deepGreen tracking-tighter sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
            One-time payment. No monthly fees. Optional $5/month hosting.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative border border-lightGreen shadow-lg bg-white/5 p-8 hover:bg-white/10 transition-colors"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="text-3xl font-bold text-gray-900">
                  {plan.price}
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gray-900" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full bg-lightGreen hover:bg-lightGreen/80 text-black"
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include source code ownership and 30-day support.
            <br />
            Need a custom solution?{" "}
            <Link href="/contact" className="text-gray-900 hover:underline">
              Contact us
            </Link>{" "}
            for a quote.
          </p>
        </div>
      </div>
    </section>
  );
}
