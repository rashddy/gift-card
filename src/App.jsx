import { useState, useEffect, useRef } from 'react'
import './App.css'
import PixelSnow from './components/PixelSnow'

// Background music - Put your audio file in the public folder and update the filename here
const BACKGROUND_MUSIC = "/You Make It Right.mp3"

// Configuration - Change these values
const SECRET_CODE = "101325"
const SECRET_MESSAGE = `My BabyMhieemaaaa,

Happy monthsary my love. Today I just want to slow down and speak from my heart because you mean so much to me and this month together reminds me how lucky I am to have you in my life. I know I am not perfect and there are times when I made small mistakes that grew bigger because of my jealousy and my fear of losing you. The hardest part for me to accept is that there were moments when I caused you pain without even realizing it and that truth hurts me deeply. I regret those moments more than I can explain because the last thing I ever want is to be the reason you feel sad or heavy or unloved. I am sorry for the times I did not think enough before reacting and for the times my emotions spoke louder than my care. Please know that none of it came from a lack of love but from loving you so much that I am still learning how to love you the right way. I am learning how to be more patient more understanding and more gentle with your heart because you deserve peace and safety when you are with me. Thank you for staying thank you for trying and thank you for loving me even when I still have so much to work on. I promise that I am choosing you every day and I am choosing to grow not just for myself but for us. I love you deeply in a way that is calm and real and I hope that as we continue this journey you always feel how important you are to me. Happy monthsary my love and I hope we create more memories filled with warmth laughter and healing together.,
Your One & Only 💕`

const RECIPIENT_NAME = "My Love"

function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const createHeart = () => {
      const id = Date.now() + Math.random()
      const heart = {
        id,
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 4,
        size: 12 + Math.random() * 16,
        opacity: 0.3 + Math.random() * 0.4
      }
      setHearts(prev => [...prev, heart])
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== id))
      }, heart.animationDuration * 1000)
    }

    const interval = setInterval(createHeart, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="floating-hearts">
      {hearts.map(heart => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity
          }}
        >
          💕
        </span>
      ))}
    </div>
  )
}

function App() {
  const [code, setCode] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState('')
  const [isShaking, setIsShaking] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef(null)

  // Initialize and auto-play music on first user interaction
  useEffect(() => {
    const audio = new Audio(BACKGROUND_MUSIC)
    audio.loop = true
    audio.volume = 0.3
    audioRef.current = audio

    // Try to auto-play (may be blocked by browser)
    const tryAutoPlay = async () => {
      try {
        await audio.play()
        setIsMusicPlaying(true)
      } catch (e) {
        // Autoplay blocked, will need user interaction
        console.log('Autoplay blocked, waiting for user interaction')
      }
    }
    tryAutoPlay()

    // Play on first user interaction if autoplay was blocked
    const handleFirstInteraction = async () => {
      if (!isMusicPlaying && audioRef.current) {
        try {
          await audioRef.current.play()
          setIsMusicPlaying(true)
        } catch (e) {
          console.log('Could not play audio')
        }
      }
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }

    document.addEventListener('click', handleFirstInteraction)
    document.addEventListener('touchstart', handleFirstInteraction)

    return () => {
      audio.pause()
      audio.src = ''
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause()
        setIsMusicPlaying(false)
      } else {
        audioRef.current.play()
        setIsMusicPlaying(true)
      }
    }
  }

  const encouragingMessages = [
    "Not quite , Some days become memories forever… try that one.💫",
    "Almost there its really important to us ...I know your heart knows the way 🌸",
    "That's not it, but don't give up on love...The key is a day that changed everything for us. 💝",
    "The right code will reveal something special... 🌷",
    "Keep believing... some treasures need patience 🦋"
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (code.trim().toUpperCase() === SECRET_CODE.toUpperCase()) {
      setIsUnlocked(true)
      setError('')
    } else {
      setIsShaking(true)
      setAttempts(prev => prev + 1)
      setError(encouragingMessages[attempts % encouragingMessages.length])
      setTimeout(() => setIsShaking(false), 500)
    }
  }

  const handleCodeChange = (e) => {
    setCode(e.target.value)
    if (error) setError('')
  }

  if (isUnlocked) {
    return (
      <>
        <PixelSnow
          className="snow-background"
          color="#ffffff"
          variant="round"
          flakeSize={0.015}
          minFlakeSize={1.5}
          pixelResolution={280}
          speed={0.6}
          density={0.25}
          brightness={1.5}
          gamma={0.5}
          depthFade={12}
          style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
        />
        <button className="music-toggle" onClick={toggleMusic} aria-label="Toggle music">
          {isMusicPlaying ? '🔊' : '🔇'}
        </button>
        <div className="gift-card unlocked">
          <FloatingHearts />
          <div className="card-content">
          <div className="unlock-animation">
            <span className="big-heart">💝</span>
          </div>
          <h1 className="recipient-name">For {RECIPIENT_NAME}</h1>
          <div className="message-container">
            <div className="ribbon top-ribbon"></div>
            <p className="secret-message">{SECRET_MESSAGE}</p>
            <div className="ribbon bottom-ribbon"></div>
          </div>
          <div className="decorative-footer">
            <span>✨</span>
            <span>💕</span>
            <span>✨</span>
          </div>
        </div>
      </div>
      </>
    )
  }

  return (
    <>
      <PixelSnow
        className="snow-background"
        color="#ffffff"
        variant="round"
        flakeSize={0.015}
        minFlakeSize={1.5}
        pixelResolution={280}
        speed={0.6}
        density={0.25}
        brightness={1.5}
        gamma={0.5}
        depthFade={12}
        style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      />
      <button className="music-toggle" onClick={toggleMusic} aria-label="Toggle music">
        {isMusicPlaying ? '🔊' : '🔇'}
      </button>
      <div className="gift-card locked">
        <FloatingHearts />
      <div className="card-content">
        <div className="gift-icon">
          <span className="gift-emoji">🎁</span>
          <div className="gift-glow"></div>
        </div>
        
        <h1 className="title">A Special Gift Awaits</h1>
        <p className="subtitle">Enter your secret code to unlock something magical...</p>
        <p className="subtitle">The key is a day that changed everything for us.</p>

        
        <form onSubmit={handleSubmit} className="code-form">
          <div className={`input-wrapper ${isShaking ? 'shake' : ''}`}>
            <input
              type="text"
              value={code}
              onChange={handleCodeChange}
              placeholder="Enter gift code..."
              className="code-input"
              autoComplete="off"
              spellCheck="false"
            />
            <span className="input-icon">🔐</span>
          </div>
          
          <button type="submit" className="unlock-btn">
            <span>Unlock My Gift</span>
            <span className="btn-icon">💌</span>
          </button>
        </form>

        {error && (
          <p className="error-message">{error}</p>
        )}

        <p className="hint-text">
          Someone special has a message waiting just for you
        </p>
      </div>
    </div>
    </>
  )
}

export default App
