"use client"

import { useState } from "react"
import "../styles/Header.css"

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
      <div className="container">
        <div className="header-content">
          <div className="logo">
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
              className="logo-icon"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span className="logo-text">GurukulaVriksham</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              {["Home", "About", "Vision & Mission", "Courses", "Team", "Contact"].map((item) => (
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
            <button className="enroll-btn" onClick={() => alert("Enrollment process initiated!")}>
              Enroll Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
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
            <nav>
              <ul>
                {["Home", "About", "Vision & Mission", "Courses", "Team", "Contact"].map((item) => (
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
              <button className="enroll-btn mobile" onClick={() => alert("Enrollment process initiated!")}>
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

