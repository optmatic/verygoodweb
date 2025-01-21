"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import "@/app/css/faq.css"
export interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs?: FAQItem[]
  darkMode?: boolean
}

export default function FAQAccordion({ faqs = [], darkMode = false }: FAQAccordionProps) {
  return (
    <div className={`w-full rounded-lg border border-deepBlue/30 shadow-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-7xl mx-auto p-6">
        <h2 className={`text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Frequently Asked Questions
        </h2>
        {faqs.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger
                  className={`text-left hover:no-underline ${darkMode ? "text-white hover:text-gray-300" : "text-gray-900 hover:text-gray-700"}`}
                >
                  <span className="faq-question">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                <span className="faq-answer">  {faq.answer}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>No FAQs available at the moment.</p>
        )}
      </div>
    </div>
  )
}

