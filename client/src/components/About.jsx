import "../styles/About.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About GurukulaViriksham</h2>
          <div className="divider"></div>
          <p>
            Discover our unique approach to education that combines ancient wisdom with modern teaching methodologies
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-decoration top-left"></div>
            <div className="image-decoration bottom-right"></div>
            <img src="/placeholder.svg?height=600&width=800" alt="Students at GurukulaViriksham" />
          </div>

          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Founded in 2010, GurukulaViriksham Academy was established with a vision to create an educational
              institution that honors the ancient Gurukula system while embracing modern educational practices. Our name
              reflects our philosophy - "Gurukula" representing the traditional teacher-student relationship, and
              "Viriksham" meaning tree, symbolizing growth and knowledge.
            </p>
            <p>
              We believe in holistic development that nurtures not just academic excellence but also character, values,
              and life skills. Our curriculum is designed to prepare students for global challenges while staying rooted
              in cultural values.
            </p>

            <div className="stats">
              <div className="stat-item">
                <div className="stat-icon">
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div>
                  <h4>50+</h4>
                  <p>Courses Offered</p>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h4>2,500+</h4>
                  <p>Students Enrolled</p>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
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
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>98%</h4>
                  <p>Success Rate</p>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
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
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>12+</h4>
                  <p>Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

