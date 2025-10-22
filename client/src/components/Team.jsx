import "../styles/Team.css"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Supriya Ravishankar",
    role: "Founder & Director",
    bio: "With over 10+ years of experience in education, Dr. Supriya combines traditional knowledge with modern teaching methodologies.",
    image: "/founder.jpg?height=500&width=400",
    social: {
      email: "#supriyaravi2007@gmail.com",
    },
  },
  {
    id: 2,
    name: "R Selvi",
    role: "Physics & Chemistry tutor",
    bio: "Bio goes here",
    image: "/placeholder.svg?height=500&width=400",
    social: {
      email: "#rk@gmail.com",
    },
  },
  {
    id: 3,
    name: "Mala Ajoy Kumar",
    role: "Maths & Physcis tutor",
    bio: "Bio goes here",
    image: "/placeholder.svg?height=500&width=400",
    social: {
      email: "#rk@gmail.com",
    },
  },
  {
    id: 4,
    name: "S. Bhuvana",
    role: "Maths & Physcis tutor",
    bio: "Bio goes here",
    image: "/bhuvana.jpg?height=500&width=400",
    social: {
      email: "#rk@gmail.com",
    },
  }
]

const Team = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title">
          <h2>Our Board</h2>
          <div className="divider"></div>
          <p>Meet the visionary leaders and experts on our board who guide us towards excellence and innovation.</p>
        </div>

        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <div className="member-image-container">
                <img src={member.image || "/placeholder.svg"} alt={member.name} />
                <div className="member-social">
                  <div className="social-icons">
                    {/*<a href={member.social.linkedin} className="social-icon">
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
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="social-icon">
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
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a> */}
                    <a href={`mailto:${member.social.email}`} className="social-icon">
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
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
          
        <div className="view-all">
          <a
            href="#Contact"
            className="view-all-link"
            onClick={() => scrollToSection("contact")}
          >
            Join our Team
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
          </a>
          
        </div>
  
      </div>
    </section>
  )
}

export default Team

