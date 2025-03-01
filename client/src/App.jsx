import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import VisionMission from "./components/VisionMission"
import Team from "./components/Team"
import Courses from "./components/Courses"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./styles/App.css"

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app">
      <Header scrolled={scrolled} />
      <main>
        
        {/* 
          <Hero />
         <About />
        <VisionMission />
        <Courses />
        <Team />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App

