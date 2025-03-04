"use client";

import type React from "react";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CtaSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  }

  return (
    <section className="bg-lightBeige  border-t border-deepGreen/20">
      <div className="container max-w-7xl mx-auto py-24">
        <div className="px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-deepGreen">
                  Let's Build Something <br />
                  That Actually Works.
                </h2>
                <p className="text-dark md:text-lg max-w-[600px] font-geist-sans">
                  No endless meetings. No scope creep. Just a straightforward
                  process to get your business a website that works.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="intro-grid-item">
                    <div className="text-3xl font-bold text-deepGreen">
                      48hrs
                    </div>
                    <div className="text-sm text-dark">
                      Average Response Time
                    </div>
                  </div>
                  <div className="intro-grid-item">
                    <div className="text-3xl font-bold text-deepGreen">
                      2-4wks
                    </div>
                    <div className="text-sm text-dark">
                      Typical Project Timeline
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="intro-panel">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-deepGreen" />
                        <h3 className="font-semibold text-deepGreen">
                          One-Time Build
                        </h3>
                      </div>
                      <ul className="space-y-2 text-sm text-dark">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-deepGreen" />
                          Custom design & development
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-deepGreen" />
                          30-day support included
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-deepGreen" />
                          Source code ownership
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="intro-panel relative">
                    <div className="absolute -top-3 -right-3">
                      <span className="inline-flex items-center rounded-full bg-lightGreen px-2.5 py-0.5 text-xs font-medium text-deepGreen">
                        Optional Add-on
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Server className="h-5 w-5 text-deepGreen" />
                        <h3 className="font-semibold text-deepGreen">
                          Managed Hosting
                        </h3>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-deepGreen">
                          $5
                        </span>
                        <span className="text-sm text-dark">/month</span>
                      </div>
                      <ul className="space-y-2 text-sm text-dark">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-deepGreen" />
                          Global CDN distribution
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-deepGreen" />
                          SSL certificate included
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-deepGreen" />
                          99.99% uptime guarantee
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-deepGreen" />
                          DDoS protection
                        </li>
                      </ul>
                      <p className="text-xs text-dark">
                        Or host it yourself - you own the code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="intro-panel p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            placeholder="John Swanson"
                            required
                            className="bg-white border-deepGreen/20 text-dark"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            placeholder="john@example.com"
                            type="email"
                            required
                            className="bg-white border-deepGreen/20 text-dark"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">
                          Current Website (if any)
                        </Label>
                        <Input
                          id="website"
                          placeholder="https://"
                          type="url"
                          className="bg-white border-deepGreen/20 text-dark"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project..."
                          required
                          className="bg-white border-deepGreen/20 text-dark min-h-[120px]"
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-lightGreen text-deepGreen hover:bg-lightGreen/90"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-center text-dark font-geist-sans">
                      We'll get back to you within 48 hours.
                    </p>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <div className="rounded-full bg-lightGreen/10 p-3">
                      <CheckCircle2 className="h-6 w-6 text-deepGreen" />
                    </div>
                    <h3 className="text-xl font-semibold text-deepGreen">
                      Message Sent
                    </h3>
                    <p className="text-center text-sm text-dark max-w-[300px] font-geist-sans">
                      Thanks for reaching out. We'll be in touch within 48 hours
                      with a response.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="mt-4 border-deepGreen/20 bg-white text-deepGreen hover:bg-lightGreen/10"
                    >
                      Send another message
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
