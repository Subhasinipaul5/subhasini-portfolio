import { useEffect, useState } from 'react'
import { personalInfo } from '../data/portfolioData'
import { markIntroSeen } from '../hooks/introSeen'
import '../styles/preloader.css'

// The intro screen with the name filling up, as in the original design.

export default function Preloader({ onDone }) {
  const [phase, setPhase] = useState('filling') // filling -> lifting -> gone

  useEffect(() => {
    const lift = setTimeout(() => {
      setPhase('lifting')
      onDone()
      markIntroSeen()
    }, 1300)
    const remove = setTimeout(() => setPhase('gone'), 2200)
    return () => {
      clearTimeout(lift)
      clearTimeout(remove)
    }
  }, [onDone])

  if (phase === 'gone') return null

  return (
    <div className={`preloader preloader--${phase}`} aria-hidden="true">
      <div className="preloader__word">
        <span className="preloader__ghost">{personalInfo.firstName}</span>
        <span className="preloader__fill">{personalInfo.firstName}</span>
      </div>
    </div>
  )
}
