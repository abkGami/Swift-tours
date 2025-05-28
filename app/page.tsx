"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import OverviewSection from "@/components/overview-section"
import Footer from "@/components/footer"

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create a timeline for page load animations
    const tl = gsap.timeline()

    // Animate page load
    tl.from(".page-loader", {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    }).to(".page-loader", {
      opacity: 0,
      duration: 0.5,
      display: "none",
    })

    // Advanced section animations
    const sections = gsap.utils.toArray(".section")

    sections.forEach((section: any, index) => {
      const elements = section.querySelectorAll(".animate-element")

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotation: 5,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      {/* Page Loader */}
      <div className="page-loader fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-700 z-50 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl font-semibold">Loading your adventure...</p>
        </div>
      </div>

      <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50 overflow-hidden">
        <Navigation />
        <Hero />
        <OverviewSection />
        <Footer />
      </div>
    </>
  )
}
