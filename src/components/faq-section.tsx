"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is a static website?",
    answer:
      "A static website is pre-built and doesn't rely on databases or server-side processing. This means faster load times, better security, and lower hosting costs. All content is built into the site during development, making it incredibly efficient.",
  },
  {
    question: "Do I need the managed hosting plan?",
    answer:
      "No, hosting is completely optional. You own the code and can host it anywhere. Our $5/month managed hosting includes global CDN, SSL certificate, and DDoS protection, but you're free to use any hosting provider you prefer.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "Most projects are completed within 2-4 weeks. Landing pages can be done in as little as 5 days. We'll provide a specific timeline based on your project requirements during our initial consultation.",
  },
  {
    question: "Can I update the content myself?",
    answer:
      "Yes. We can set up a simple content management system that lets you update text and images without touching code. For larger changes, we offer maintenance packages or can train your team to make updates.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "We include 30 days of support with every project. After that, we can set up a maintenance plan or make one-off changes at our standard rate. Since you own the code, you can also have your team make changes.",
  },
  {
    question: "Do you use WordPress?",
    answer:
      "No. We build custom static sites without WordPress or any CMS. This means faster load times, better security, and no plugin maintenance. If you need a content management system, we'll build a custom solution that's specific to your needs.",
  },
  {
    question: "What about SEO?",
    answer:
      "Static sites are excellent for SEO. They load faster (which Google loves) and we follow all SEO best practices during development. We also provide structured data, semantic HTML, and optimized meta tags.",
  },
  {
    question: "Can I see some examples?",
    answer:
      "Yes! Check out our case studies page for recent projects. We can also provide examples specific to your industry during our consultation.",
  },
];

export default function FaqSection() {
  return (
    <section className="container max-w-7xl mx-auto py-24 border-t border-white/20">
      <div className="px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
            Everything you need to know about our web design process and static
            sites.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-white/20 bg-white/5 px-6"
              >
                <AccordionTrigger className="text-base font-medium text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          Still have questions?{" "}
          <a href="/contact" className="text-gray-900 hover:underline">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
