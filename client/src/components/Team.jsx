import "../styles/Team.css"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Supriya Ravishankar",
    role: "Founder & Director",
    bio: "With over 10+ years of experience in education, Dr. Supriya combines traditional knowledge with modern teaching methodologies.",
    image: "/founder.jpg",
    social: {
      email: "supriyaravi2007@gmail.com",
    },
  },
  {
    id: 2,
    name: "Niranjana",
    role: "Maths Tutor",
    bio: "A dedicated Mathematics educator focused on making core concepts intuitive and engaging. She strengthens problem-solving ability, analytical thinking, and academic confidence across all student levels.",
    image: "/niranjana.jpg",
    social: {
      email: "",
    },
  },
  {
    id: 3,
    name: "R. Christy",
    role: "Social & English Tutor",
    bio: "Holding an M.A. in English from Women's Christian College and a B.Ed, Christy brings over a decade of rich teaching experience across Kidzee and Bosco, specializing in interactive language mastery and social sciences.",
    image: "/placeholder.svg",
    social: {
      email: "",
    },
  },
  {
    id: 4,
    name: "S. Gandhimathi",
    role: "Tamil Tutor",
    bio: "With a B.A. in Tamil and a D.F.A. in Painting, Gandhimathi brings more than 13 years of distinguished teaching experience, including 11 years at Bosco Academy, fostering Tamil literature appreciation, grammar, and cultural depth.",
    image: "/placeholder.svg",
    social: {
      email: "",
    },
  },
]

const Team = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section id="team" className="team" aria-labelledby="team-title">
      <div className="container">
        <div className="section-title">
          <h2 id="team-title">Our Board and Tutors</h2>
          <div className="divider"></div>
          <p>Meet the visionary leaders and experts on our board who guide us towards excellence and innovation.</p>
        </div>

        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <div className="member-image-container">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name}, GurukulaVriksham Academy tutor`}
                  width="400"
                  height="500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="member-social">
                  <div className="social-icons">
                    {member.social?.email ? (
                      <a href={`mailto:${member.social.email}`} className="social-icon" aria-label={`Email ${member.name}`}>
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
                    ) : (
                      <a
                        href="#contact"
                        className="social-icon"
                        aria-label={`Contact about ${member.name}`}
                        onClick={() => scrollToSection("contact")}
                      >
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
                    )}
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
            href="#contact"
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
