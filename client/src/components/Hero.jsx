"use client"

import { useEffect, useRef } from "react"
import "../styles/Hero.css"

const Hero = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const cta = ctaRef.current

    if (title) {
      title.style.opacity = "0"
      title.style.transform = "translateY(20px)"
      setTimeout(() => {
        title.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        title.style.opacity = "1"
        title.style.transform = "translateY(0)"
      }, 300)
    }

    if (subtitle) {
      subtitle.style.opacity = "0"
      subtitle.style.transform = "translateY(20px)"
      setTimeout(() => {
        subtitle.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        subtitle.style.opacity = "1"
        subtitle.style.transform = "translateY(0)"
      }, 600)
    }

    if (cta) {
      cta.style.opacity = "0"
      cta.style.transform = "translateY(20px)"
      setTimeout(() => {
        cta.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        cta.style.opacity = "1"
        cta.style.transform = "translateY(0)"
      }, 900)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="hero">
      {/* Background with overlay */}
      <div className="hero-background">
        <div className="overlay"></div>
        <div className="background-image"></div>

        {/* Animated particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container hero-content">
        <h1 ref={titleRef}>Nurturing Knowledge, Cultivating Character</h1>
        <p ref={subtitleRef}>
          At GurukulaViriksham Academy, we blend traditional wisdom with modern education to shape the leaders of
          tomorrow
        </p>
        <div ref={ctaRef} className="cta-buttons">
          <button className="primary-btn" onClick={() => scrollToSection("courses")}>
            Explore Courses
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="chevron-icon"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <button className="secondary-btn" onClick={() => scrollToSection("about")}>
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

