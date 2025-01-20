"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import "../../app/css/rotations.css"

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
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="w-full py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Past Projects</h2>
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`flex gap-4 animate-scroll ${isPaused ? 'pause-animation' : ''}`}>
            {/* Double the projects array to create seamless loop */}
            {[...projects, ...projects].map((project, index) => (
              <div 
                key={`${project.id}-${index}`}
                className="flex-none w-[300px]"
              >
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

