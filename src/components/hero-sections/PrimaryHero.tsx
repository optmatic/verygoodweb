import { Container } from "@/components/radiant/container";
import { Gradient } from "@/components/radiant/gradient";
import { Link } from "@/components/radiant/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Button } from "@/components/radiant/button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";


export default function PrimaryHero() {
  return (
<div className="relative -mt-24 -z-10">
<Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
<Container className="relative">
  <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
    <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
      Close every deal.
    </h1>
    <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
      Radiant helps you sell more by revealing sensitive information about
      your customers.
    </p>
    <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
      <Button href="#">Get started</Button>
      <Button variant="secondary" href="/pricing">
        See pricing
      </Button>
    </div>
  </div>
</Container>
    </div>
  );
}
