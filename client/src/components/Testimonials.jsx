import "../styles/Testimonials.css"

const testimonials = [
  {
    src: "/videos/gv-academy-story.mp4",
    number: "01",
    title: "A place that feels like home",
    description: "See the GurukulaViriksham experience through our original academy footage.",
  },
  {
    src: "/videos/gv-academy-learning.mp4",
    number: "02",
    title: "Learning with purpose",
    description: "A closer look at the energy, care, and curiosity behind every lesson.",
  },
  {
    src: "/videos/gv-academy-community.mp4",
    number: "03",
    title: "Growing together",
    description: "Real moments from the community that makes our academy special.",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-heading">
          <div className="section-title">
            <p className="testimonials-overline">From our community</p>
            <h2>See learning come alive</h2>
            <div className="divider" />
            <p>Watch the original moments that capture the spirit of GurukulaViriksham Academy.</p>
          </div>
          <span className="testimonials-mark" aria-hidden="true">✳</span>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.src}>
              <div className="testimonial-video-wrap">
                <video
                  className="testimonial-video"
                  src={testimonial.src}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${testimonial.title} video testimonial`}
                />
                <span className="testimonial-number">{testimonial.number}</span>
                <span className="testimonial-original">Original video</span>
              </div>
              <div className="testimonial-copy">
                <h3>{testimonial.title}</h3>
                <p>{testimonial.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
