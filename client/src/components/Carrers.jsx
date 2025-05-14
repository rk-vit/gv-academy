"use client"

import { useState } from "react"
import "../styles/Carrers.css"
import axios from "axios"
const departments = [
  { id: "teaching", name: "Teaching Faculty" },
  { id: "administration", name: "Administration" },
  { id: "research", name: "Research & Development" },
  { id: "it", name: "IT & Technical Support" },
  { id: "counseling", name: "Student Counseling" },
  { id: "other", name: "Other" },
]

const openPositions = [
  {
    id: 1,
    title: "Sanskrit Professor",
    department: "teaching",
    type: "Full-time",
    location: "On-campus",
    description:
      "We are looking for an experienced Sanskrit Professor to join our traditional studies department. The ideal candidate should have deep knowledge of Sanskrit literature and teaching experience.",
  },
  {
    id: 2,
    title: "Mathematics Teacher",
    department: "teaching",
    type: "Full-time",
    location: "On-campus",
    description:
      "Join our team as a Mathematics Teacher specializing in both modern and Vedic mathematics. You'll be responsible for curriculum development and teaching students of various age groups.",
  },
  {
    id: 3,
    title: "Administrative Assistant",
    department: "administration",
    type: "Full-time",
    location: "On-campus",
    description:
      "We're seeking an organized and efficient Administrative Assistant to support our academic operations. The role involves managing schedules, correspondence, and student records.",
  },
  {
    id: 4,
    title: "IT Support Specialist",
    department: "it",
    type: "Full-time",
    location: "On-campus",
    description:
      "Technical support specialist needed to maintain our campus IT infrastructure, assist faculty with technology integration, and provide support for our online learning platforms.",
  },
  {
    id: 5,
    title: "Student Counselor",
    department: "counseling",
    type: "Part-time",
    location: "Hybrid",
    description:
      "Experienced counselor needed to provide guidance and support to students. The role involves academic advising, career counseling, and personal development support.",
  },
]

const Careers = () => {
  const [activeTab, setActiveTab] = useState("openings")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    experience: "",
    education: "",
    message: "",
    resume: null,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, files } = e.target

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.department) newErrors.department = "Please select a department"
    if (!formData.experience.trim()) newErrors.experience = "Experience details are required"
    if (!formData.education.trim()) newErrors.education = "Education details are required"

    return newErrors
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }
    try {
        const response = await axios.post("https://gv-academy-yfjm.vercel.app/carrersSubmitt", formData)

        if (response.status === 200) {
            setSubmitted(true)
            // Reset form after submission
            setFormData({
              name: "",
              email: "",
              phone: "",
              department: "",
              position: "",
              experience: "",
              education: "",
              message: "",
              resume: null,
            })
        }
      } catch (error) {
        console.log("Error has occcured:-",error);
     } 
    // Form submission logic would go here
    //console.log("Career form submitted:", formData)

    // Show success message
    
  }

  const applyForPosition = (position) => {
    setActiveTab("apply")
    setFormData((prev) => ({
      ...prev,
      position: position.title,
      department: position.department,
    }))

    // Scroll to application form
    setTimeout(() => {
      document.getElementById("application-form").scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <section id="careers" className="careers">
      <div className="container">
        <div className="section-title">
          <h2>Careers</h2>
          <div className="divider"></div>
          <p>Join our team and be part of our mission to blend traditional wisdom with modern education</p>
        </div>

        <div className="careers-tabs">
          <button
            className={`tab-btn ${activeTab === "openings" ? "active" : ""}`}
            onClick={() => setActiveTab("openings")}
          >
            Current Openings
          </button>
          <button
            className={`tab-btn ${activeTab === "why-join" ? "active" : ""}`}
            onClick={() => setActiveTab("why-join")}
          >
            Why Join Us
          </button>
          <button className={`tab-btn ${activeTab === "apply" ? "active" : ""}`} onClick={() => setActiveTab("apply")}>
            Apply Now
          </button>
        </div>

        {activeTab === "openings" && (
          <div className="tab-content">
            <div className="openings-list">
              {openPositions.map((position) => (
                <div key={position.id} className="position-card">
                  <div className="position-header">
                    <h3>{position.title}</h3>
                    <div className="position-tags">
                      <span className="department-tag">
                        {departments.find((d) => d.id === position.department)?.name}
                      </span>
                      <span className="type-tag">{position.type}</span>
                      <span className="location-tag">{position.location}</span>
                    </div>
                  </div>
                  <p className="position-description">{position.description}</p>
                  <button className="apply-btn" onClick={() => applyForPosition(position)}>
                    Apply for this Position
                  </button>
                </div>
              ))}
            </div>

            <div className="no-positions">
              <p>Don't see a position that matches your skills?</p>
              <button
                className="general-apply-btn"
                onClick={() => {
                  setActiveTab("apply")
                  setFormData((prev) => ({
                    ...prev,
                    position: "General Application",
                  }))
                }}
              >
                Submit a General Application
              </button>
            </div>
          </div>
        )}

        {activeTab === "why-join" && (
          <div className="tab-content">
            <div className="why-join-content">
              <div className="why-join-image">
                <img src="/placeholder.svg?height=600&width=800" alt="Team at GurukulaViriksham" />
              </div>

              <div className="benefits-section">
                <h3>Why Work With Us</h3>
                <p>
                  At GurukulaViriksham Academy, we believe that our team members are our greatest asset. We foster a
                  collaborative environment where traditional wisdom meets modern innovation, creating a unique
                  workplace culture that values both heritage and progress.
                </p>

                <div className="benefits-grid">
                  <div className="benefit-item">
                    <div className="benefit-icon">
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div className="benefit-text">
                      <h4>Meaningful Work</h4>
                      <p>Make a real difference in students' lives by shaping the next generation of leaders</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                      </svg>
                    </div>
                    <div className="benefit-text">
                      <h4>Positive Culture</h4>
                      <p>Enjoy a supportive environment that values work-life balance and personal growth</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">
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
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        <line x1="6" y1="1" x2="6" y2="4"></line>
                        <line x1="10" y1="1" x2="10" y2="4"></line>
                        <line x1="14" y1="1" x2="14" y2="4"></line>
                      </svg>
                    </div>
                    <div className="benefit-text">
                      <h4>Continuous Learning</h4>
                      <p>Access professional development opportunities and grow your skills</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">
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
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </div>
                    <div className="benefit-text">
                      <h4>Competitive Benefits</h4>
                      <p>Enjoy comprehensive health coverage, retirement plans, and paid time off</p>
                    </div>
                  </div>
                </div>

                <div className="testimonial">
                  <blockquote>
                    "Working at GurukulaViriksham has been the most rewarding experience of my career. The blend of
                    traditional values with modern teaching methods creates a unique environment where both teachers and
                    students thrive."
                  </blockquote>
                  <cite>— Dr. Anita Sharma, Faculty Member since 2015</cite>
                </div>

                <button className="join-team-btn" onClick={() => setActiveTab("apply")}>
                  Join Our Team
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "apply" && (
          <div className="tab-content" id="application-form">
            <div className="application-intro">
              <h3>Apply to Join Our Team</h3>
              <p>
                Thank you for your interest in working with GurukulaViriksham Academy. Please fill out the form below,
                and our HR team will review your application. We look forward to potentially welcoming you to our
                community.
              </p>
            </div>

            {submitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3>Application Submitted Successfully!</h3>
                <p>
                  Thank you for your interest in joining GurukulaViriksham Academy. Our HR team will review your
                  application and contact you if your qualifications match our requirements.
                </p>
                <button
                  className="new-application-btn"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      department: "",
                      position: "",
                      experience: "",
                      education: "",
                      message: "",
                      resume: null,
                    })
                  }}
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form className="application-form" onSubmit={handleSubmit}>
                <div className="form-section">
                  <h4>Personal Information</h4>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "error" : ""}
                      />
                      {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "error" : ""}
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "error" : ""}
                      />
                      {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h4>Position Information</h4>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="department">Department of Interest *</label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className={errors.department ? "error" : ""}
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept.id} value={dept.id}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                      {errors.department && <span className="error-message">{errors.department}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="position">Position (if applying for a specific role)</label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h4>Qualifications</h4>

                  <div className="form-group">
                    <label htmlFor="experience">Work Experience *</label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows="3"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Please provide details of your relevant work experience"
                      className={errors.experience ? "error" : ""}
                    ></textarea>
                    {errors.experience && <span className="error-message">{errors.experience}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="education">Education *</label>
                    <textarea
                      id="education"
                      name="education"
                      rows="3"
                      value={formData.education}
                      onChange={handleChange}
                      placeholder="Please provide details of your educational background"
                      className={errors.education ? "error" : ""}
                    ></textarea>
                    {errors.education && <span className="error-message">{errors.education}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us why you're interested in joining GurukulaViriksham Academy and any additional information you'd like to share"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume">Upload Resume/CV (PDF, DOC, DOCX)</label>
                    <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-application-btn">
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Careers
