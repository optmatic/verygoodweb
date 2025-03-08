import Link from "next/link";
import { ArrowRight, Code, Hammer } from "lucide-react";
import Button3d from "../ui/button";

export default function HeroSection() {
  return (
    <section className="hero-section w-full py-12 md:py-24 lg:py-32 border-b">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left md:flex-1">
            <div className="bg-lightGreen text-deepGreen inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium">
              <Hammer className="h-4 w-4" />
              <span>Handcrafted Static Sites</span>
            </div>
            <h1 className="tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Very Good Web Design
            </h1>
            <p className="max-w-[700px] text-dark">
              We build websites. They work well. No unnecessary features.
            </p>
            <div className="mt-4 flex flex-col gap-2 min-[400px]:flex-row">
              <Button3d text="Hire Us" href="/contact" />
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-16 md:mt-0 flex items-center justify-center md:flex-1">
            <div className="border-deepGreen relative h-[300px] w-full max-w-md overflow-hidden rounded-lg border bg-background p-2">
              <div className="absolute left-2 top-2 flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <div className="h-2 w-2 rounded-full bg-green-500" />
              </div>
              <div className="mt-5 grid grid-cols-12 gap-2 px-4">
                <div className="col-span-4 h-8 rounded bg-muted" />
                <div className="col-span-8 h-8 rounded bg-muted" />
                <div className="col-span-6 h-8 rounded bg-muted" />
                <div className="col-span-6 h-8 rounded bg-muted" />
                <div className="col-span-12 h-40 rounded bg-muted" />
                <div className="col-span-4 h-8 rounded bg-muted" />
                <div className="col-span-4 h-8 rounded bg-muted" />
                <div className="col-span-4 h-8 rounded bg-muted" />
              </div>
              <div className="absolute bottom-2 right-2">
                <Code className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
