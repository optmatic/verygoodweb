"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    image: "/placeholder.svg?height=200&width=300",
    caption: "A fully responsive online store with integrated payment systems.",
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "/placeholder.svg?height=200&width=300",
    caption: "A sleek, modern portfolio for a digital artist showcasing their work.",
    link: "#",
  },
  {
    id: 3,
    title: "Booking System",
    image: "/placeholder.svg?height=200&width=300",
    caption: "An efficient booking system for a local spa with real-time availability.",
    link: "#",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    image: "/placeholder.svg?height=200&width=300",
    caption: "A comprehensive dashboard for managing multiple social media accounts.",
    link: "#",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    image: "/placeholder.svg?height=200&width=300",
    caption: "A mobile app for tracking workouts and nutrition with personalized plans.",
    link: "#",
  },
  {
    id: 6,
    title: "Educational Platform",
    image: "/placeholder.svg?height=200&width=300",
    caption: "An interactive learning platform with courses, quizzes, and progress tracking.",
    link: "#",
  },
]

export default function RotatingProjects() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Past Projects</h2>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3">
                <Card>
                  <CardContent className="p-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="rounded-lg mb-4 w-full h-auto"
                    />
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.caption}</p>
                    <Button asChild size="sm" className="w-full">
                      <a href={project.link}>Read More</a>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

