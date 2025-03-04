"use client"

import { useState } from "react"
import "../styles/Courses.css"

const courseCategories = [
  { id: "cbse", name: "CBSE" },
  { id: "icse", name: "ICSE" },
  { id: "matric", name: "Matriculation" },
];

const coursesData = [
  {
    id: 1,
    title: "Primary-CBSE",
    description: "Class I-V",
    category: "cbse",
    level: "Monthly Plan Available",
    duration: "12 Months",
    icon: "calculator",
  },
  {
    id: 2,
    title: "Primary-ICSE",
    description: "Class I-V",
    category: "icse",
    level: "Monthly Plan Available",
    duration: "12 Months",
    icon: "book-open",
  },
  {
    id: 3,
    title: "Primary-Matric",
    description: "Class I-V",
    category: "matric",
    level: "Monthly Plan Available",
    duration: "12 Months",
    icon: "calculator",
  },
  {
    id: 4,
    title: "Secondary-CBSE",
    description: "Class VI-X",
    category: "cbse",
    duration: "12 Months",
    level: "Monthly Plan Available",
    icon: "calculator",
  },
  {
    id: 5,
    title: "Secondary-ICSE",
    description: "Class VI-X",
    category: "icse",
    duration: "12 Months",
    level: "Monthly Plan Available",
    icon: "book-open",
  },
  {
    id: 6,
    title: "Secondary-Matric",
    description: "Class VI-X",
    category: "matric",
    duration: "12 Months",
    level: "Monthly Plan Available",
    icon: "book-open",
  },
  {
    id: 7,
    title: "Senior Secondary-CBSE",
    description: "Class XI-XII",
    category: "cbse",
    duration: "12 Months",
    level: "Monthly Plan Available",
    icon: "code",
  },
  {
    id: 8,
    title: "Senior Secondary-ICSE",
    description: "Class XI-XII",
    category: "icse",
    duration: "12 Months",
    level: "Monthly Plan Available",
    icon: "code",
  },
  {
    id: 9,
    title: "Senior Secondary-Matric",
    description: "Class XI-XII",
    category: "matric",
    duration: "12 Months",
    level: "Monthly Plan Available",
    icon: "code",
  },
];


const getIcon = (iconName) => {
  switch (iconName) {
    case "calculator":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2"></rect>
          <line x1="8" y1="6" x2="16" y2="6"></line>
          <line x1="8" y1="10" x2="16" y2="10"></line>
          <line x1="8" y1="14" x2="16" y2="14"></line>
          <line x1="8" y1="18" x2="16" y2="18"></line>
        </svg>
      )
    case "book-open":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    case "code":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    case "globe":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    case "music":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      )
    case "microscope":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 18h8"></path>
          <path d="M3 22h18"></path>
          <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
          <path d="M9 14h2"></path>
          <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
        </svg>
      )
    default:
      return null
  }
}

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("cbse")

  const filteredCourses =
    activeCategory === "all" ? coursesData : coursesData.filter((course) => course.category === activeCategory)

  return (
    <section id="courses" className="courses">
      <div className="container">
        <div className="section-title">
          <h2>Our Courses</h2>
          <div className="divider"></div>
          <p>Explore our diverse range of courses that blend traditional knowledge with modern education</p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {courseCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`category-tab ${activeCategory === category.id ? "active" : ""}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="course-cards">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-icon">{getIcon(course.icon)}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-tags">
                <span className="duration-tag">{course.duration}</span>
                <span className="level-tag">{course.level}</span>
              </div>
              <button className="learn-more-btn" onClick={() => alert(`Learn more about ${course.title}`)}>
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="view-all">
          <button className="view-all-btn" onClick={() => alert("View all courses")}>
            View All Courses
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
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Courses

