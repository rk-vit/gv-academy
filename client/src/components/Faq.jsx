import "../styles/Faq.css"

const questions = [
  {
    question: "Which classes does GurukulaVriksham Academy support?",
    answer:
      "The academy lists tuition pathways for Classes I–V, Classes VI–X and Classes XI–XII, covering the full school journey from primary to senior secondary.",
  },
  {
    question: "Which school boards are covered?",
    answer:
      "Families can enquire about CBSE, ICSE and Matriculation tuition pathways. Share the student’s class and subjects so the team can explain the most relevant option.",
  },
  {
    question: "Does the academy offer support beyond academic subjects?",
    answer:
      "Yes. Life Skills Training is available as a 12-month programme focused on interpersonal skills, decision-making abilities and emotional intelligence.",
  },
  {
    question: "Where is the tuition centre located?",
    answer:
      "GurukulaVriksham Academy is at 157, Munnuswamy Complex, Madhavaram, Thabaalpetti, Chennai – 600060. The office is open Monday to Saturday from 5:00 PM to 9:00 PM.",
  },
]

const Faq = () => (
  <section id="faq" className="faq" aria-labelledby="faq-title">
    <div className="container">
      <div className="section-title">
        <h2 id="faq-title">Frequently Asked Questions</h2>
        <div className="divider"></div>
        <p>Quick answers about classes, curriculum pathways and visiting our Madhavaram tuition centre.</p>
      </div>

      <div className="faq-list">
        {questions.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default Faq
