"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import "../../app/css/rotations.css"
import carcadia from "@/images/projects/carcadia.webp"
import tprUI from "@/images/projects/tpr-ui.png"
import rydeScreen from "@/images/projects/ryde-screen.webp"
import rheumScreen from "@/images/projects/rheum-screen.webp"
// import greenHorizons from "@/images/projects/green-horizons.png"
import castflow from "@/images/projects/castflow-full.png"

type projectType = {
  id: number
  title?: string
  alt?: string
  tags?: string[]
  image?: string
  preview?: string
  caption?: string
  link?: string
  scrollable?: boolean
  objectFit?: 'cover' | 'contain'
}

// Project data
const projects: projectType[] = [
  {
    id: 1,
    title: "Carcadia",
    image: carcadia.src,
    // preview: "https://carcadia.com.au",
    caption: "A fully responsive online store with integrated payment systems.",
    tags: ["e-commerce", "shopify"],
    scrollable: true,
    objectFit: 'cover',
    // link: "#",
  },
  {
    id: 2,
    title: "RYDE Realty",
    image: rydeScreen.src,
    // preview: "https://ryde.com.au",
    caption: "A sleek, modern portfolio for a digital artist showcasing their work.",
    tags: ["real estate", "react", "tailwind"],
    scrollable: true,
    objectFit: 'cover',
    
    // link: "#",
  },
  {
    id: 3,
    title: "River City Rheumatology",
    image: rheumScreen.src,
    caption: "An efficient booking system for a local spa with real-time availability.",
    tags: ["web development", "react", "tailwind"],
    scrollable: true,
    objectFit: 'contain',
    // link: "#",
  },
  {
    id: 4,
    title: "TutorPro Resources",
    image: tprUI.src,
    caption: "A comprehensive dashboard for managing multiple social media accounts.",
    tags: ["landing page", "react", "tailwind"],
    // link: "#",
    scrollable: false,
    objectFit: 'cover',
  },
  // {
  //   id: 5,
  //   title: "Green Horizons",
  //   image: greenHorizons.src,
  //   caption: "A mobile app for tracking workouts and nutrition with personalized plans.",
  //   // link: "#",
  //   scrollable: false,
  // },
  {
    id: 5,
    title: "Castflow.io",
    image: castflow.src,
    caption: "An interactive learning platform with courses, quizzes, and progress tracking.",
    // link: "#",
    tags: ["landing page", "astro", "tailwind"],
    scrollable: true,
    objectFit: 'cover',
  },
]

export default function RotatingProjects() {
  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-start mb-8 underline underline-offset-4 decoration-optBlue decoration-4">Recent work</h2>
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-scroll hover:[animation-play-state:paused] w-fit">
            {[...projects, ...projects].map((project, index) => (
              <div 
                key={`${project.id}-${index}`}
                className="flex-none w-[300px]"
              >
                <Card>
                  <CardContent className="p-4">
                    <div className={`relative w-full h-[200px] mb-4 rounded-lg overflow-hidden ${
                      project.scrollable ? 'hover:overflow-y-auto' : 'overflow-hidden'
                    }`}>
                      <div className={`relative w-full hover:cursor-ns-resize border border-deepBlue rounded-lg ${
                        project.scrollable ? 'aspect-[1/3]' : 'h-[200px]'
                      }`}>
                        <Image
                          src={project.image || ''}
                          alt={project.title || ''}
                          fill
                          className={`rounded-lg ${project.scrollable ? 'object-top' : 'object-center'} ${
                            project.objectFit ? `object-${project.objectFit}` : 'object-contain'
                          }`}
                          sizes="300px"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 underline underline-offset-2 decoration-optBlue decoration-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.caption}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag, index) => (
                        <span key={`${tag}-${index}`} className="capitalize text-xs bg-optBlue/10 border border-deepBlue/20 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* <Button asChild size="sm" className="w-full">
                      <a href={project.link}>Read More</a>
                    </Button> */}
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

