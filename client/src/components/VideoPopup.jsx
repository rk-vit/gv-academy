import { useEffect, useRef, useState } from "react"
import "../styles/VideoPopup.css"

const welcomeCut = "/videos/gv-academy-welcome-cut.mp4"

const chapters = [
  { label: "Visible improvement", start: 0, end: 9 },
  { label: "Growing with confidence", start: 9, end: 21 },
  { label: "Progress worth celebrating", start: 21, end: 30 },
]

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeChapter, setActiveChapter] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    const openTimer = window.setTimeout(() => setIsOpen(true), 700)
    return () => window.clearTimeout(openTimer)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const closePopup = () => {
    videoRef.current?.pause()
    setIsOpen(false)
  }

  const handleVideoReady = () => {
    if (!videoRef.current) return
    videoRef.current.muted = isMuted
    videoRef.current.play().catch(() => {})
  }

  const handleVideoProgress = () => {
    if (!videoRef.current) return
    const chapter = chapters.findIndex(({ start, end }) => videoRef.current.currentTime >= start && videoRef.current.currentTime < end)
    if (chapter !== -1 && chapter !== activeChapter) {
      setActiveChapter(chapter)
    }
  }

  const toggleMute = () => {
    setIsMuted((muted) => {
      const nextMuted = !muted
      if (videoRef.current) videoRef.current.muted = nextMuted
      return nextMuted
    })
  }

  const exploreCourses = () => {
    closePopup()
    window.setTimeout(() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" }), 150)
  }

  if (!isOpen) return null

  const chapter = chapters[activeChapter]

  return (
    <div className="video-popup-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) closePopup()
    }}>
      <div className="video-popup" role="dialog" aria-modal="true" aria-labelledby="welcome-popup-title">
        <button className="video-popup-close" onClick={closePopup} aria-label="Close welcome video">
          <span aria-hidden="true">×</span>
        </button>

        <div className="video-popup-media">
          <video
            ref={videoRef}
            className="video-popup-player"
            src={welcomeCut}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onLoadedMetadata={handleVideoReady}
            onTimeUpdate={handleVideoProgress}
            aria-label="GurukulaViriksham Academy welcome video"
          />
          <div className="video-popup-tint" />
          <div className="video-popup-grain" />
          <div className="video-popup-media-topline">
            <span className="media-kicker">GV ACADEMY</span>
            <span className="media-status"><i /> Welcome cut</span>
          </div>
          <div className="video-popup-media-caption">
            <span>{chapter.label}</span>
            <span>0{activeChapter + 1} / 03</span>
          </div>
          <div className="video-popup-progress" aria-hidden="true">
            {chapters.map((item, index) => <span key={item.label} className={index <= activeChapter ? "active" : ""} />)}
          </div>
        </div>

        <div className="video-popup-copy">
          <div className="video-popup-brand">
            <img src="/logo_new_test.png" alt="" />
            <span>GurukulaViriksham Academy</span>
          </div>
          <p className="video-popup-eyebrow">A new way to learn, a stronger way to grow</p>
          <h2 id="welcome-popup-title">Come grow with us.</h2>
          <p className="video-popup-description">
            Step inside an academy where timeless values meet thoughtful, future-ready learning.
          </p>
          <div className="video-popup-actions">
            <button className="video-popup-cta" onClick={exploreCourses}>Explore learning <span aria-hidden="true">↗</span></button>
            <button className="video-popup-sound" onClick={toggleMute} aria-label={isMuted ? "Turn sound on" : "Mute welcome video"}>
              <span aria-hidden="true">{isMuted ? "⌁" : "◖"}</span>
              {isMuted ? "Sound off" : "Sound on"}
            </button>
          </div>
          <button className="video-popup-dismiss" onClick={closePopup}>Continue to website <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </div>
  )
}

export default VideoPopup
