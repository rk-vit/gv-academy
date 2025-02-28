import "../styles/VisionMission.css"

const VisionMission = () => {
  return (
    <section id="vision-&-mission" className="vision-mission">
      <div className="container">
        <div className="section-title">
          <h2>Vision & Mission</h2>
          <div className="divider"></div>
          <p>Our guiding principles that shape our educational approach and institutional values</p>
        </div>

        <div className="cards">
          {/* Vision Card */}
          <div className="card">
            <div className="card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>
              To be a premier educational institution that creates enlightened individuals who excel in their chosen
              fields while upholding the highest ethical standards and cultural values.
            </p>
            <ul className="card-list">
              <li>
                <span className="check-icon"></span>
                Global recognition for educational excellence
              </li>
              <li>
                <span className="check-icon"></span>
                Nurturing future leaders with strong values
              </li>
              <li>
                <span className="check-icon"></span>
                Bridging traditional wisdom with modern innovation
              </li>
            </ul>
          </div>

          {/* Mission Card */}
          <div className="card">
            <div className="card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>
              To provide comprehensive education that balances academic rigor with character development, preparing
              students to be responsible global citizens who contribute positively to society.
            </p>
            <ul className="card-list">
              <li>
                <span className="check-icon"></span>
                Delivering quality education accessible to all
              </li>
              <li>
                <span className="check-icon"></span>
                Fostering critical thinking and problem-solving
              </li>
              <li>
                <span className="check-icon"></span>
                Cultivating respect for diversity and inclusion
              </li>
            </ul>
          </div>

          {/* Values Card */}
          <div className="card">
            <div className="card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="18" x2="8" y2="22"></line>
                <line x1="16" y1="18" x2="16" y2="22"></line>
                <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                <path d="M12 10a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2a2 2 0 0 0-2-2Z"></path>
              </svg>
            </div>
            <h3>Our Values</h3>
            <p>
              We are guided by a set of core values that inform our approach to education and shape our institutional
              culture and practices.
            </p>
            <ul className="card-list">
              <li>
                <span className="check-icon"></span>
                Excellence in all endeavors
              </li>
              <li>
                <span className="check-icon"></span>
                Integrity and ethical conduct
              </li>
              <li>
                <span className="check-icon"></span>
                Respect for tradition while embracing innovation
              </li>
              <li>
                <span className="check-icon"></span>
                Compassion and service to society
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission

