"use client"

import { useState } from "react"
import "../styles/Header.css"
import logo from "../../public/logo_new_test.png"
const Header = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo" aria-label="GurukulaVriksham Academy home">
            <img
              src={logo}
              alt="GurukulaVriksham Academy logo"
              className="logo-image"
              width="42"
              height="46"
            />
            <span className="logo-text">GurukulaVriksham</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            <ul>
              {["Home", "About", "Vision & Mission", "Courses", "Team", "FAQ", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.toLowerCase().replace(/\s+/g, "-"))
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button type="button" className="enroll-btn" onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("contact")
                      }}>
              Enroll Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button type="button" className="mobile-menu-btn" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <nav aria-label="Mobile navigation">
              <ul>
                {["Home", "About", "Vision & Mission", "Courses", "Team", "FAQ", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.toLowerCase().replace(/\s+/g, "-"))
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <button type="button" className="enroll-btn mobile"
              onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("contact")
                      }}>
                Enroll Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
