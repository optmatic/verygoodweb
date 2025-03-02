"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "They built our site in 2 weeks. It's faster than our competitors and we own the code.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "Coastal Designs",
  },
  {
    quote: "No WordPress. No plugins. No problems. Just a website that works.",
    author: "Michael Chen",
    role: "Founder",
    company: "Digital First",
  },
  {
    quote:
      "The fastest website in our industry. Our bounce rate dropped by 70%.",
    author: "Emma Thompson",
    role: "Marketing Director",
    company: "Swift Solutions",
  },
  {
    quote:
      "They delivered exactly what they promised. No scope creep, no surprises.",
    author: "David Miller",
    role: "Owner",
    company: "Miller & Co",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container max-w-7xl mx-auto py-24 border-t border-white/20">
      <div className="px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Don't Take Our Word For It
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
            See what our clients say about our no-nonsense approach to web
            design.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4 md:px-12">
                <div className="max-w-2xl mx-auto space-y-6">
                  <Quote className="h-12 w-12 text-gray-900" />
                  <p className="text-2xl font-medium text-gray-900">
                    {testimonial.quote}
                  </p>
                  <div className="space-y-1">
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  current === index ? "bg-gray-900" : "bg-white/20"
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90"
          >
            <Link href="/case-studies">
              View Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
