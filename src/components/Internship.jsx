import { useEffect, useState } from 'react'
import { internship } from '../data/portfolioData'
import useInView from '../hooks/useInView'
import useReducedMotion from '../hooks/useReducedMotion'
import ActionLink from './ActionLink'
import Reveal from './Reveal'
import { ExternalIcon } from './Icons'
import '../styles/internship.css'

// Counts up to the number inside a value such as "15+" or "25%".
function CountUp({ value, start }) {
  const reduced = useReducedMotion()
  const match = String(value).match(/^(\D*)(\d+)(.*)$/)
  const target = match ? Number(match[2]) : 0
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!match || !start || reduced) return
    let frame
    const duration = 1100
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration)
      setCurrent(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, reduced, target])

  if (!match) return value
  const shown = reduced || !start ? (reduced ? target : 0) : current
  return (
    <>
      <span aria-hidden="true">{match[1]}{shown}{match[3]}</span>
      <span className="visually-hidden">{value}</span>
    </>
  )
}

export default function Internship() {
  const [statsRef, statsInView] = useInView({ threshold: 0.35 })

  return (
    <section id="internship" className="intern section on-deep" aria-labelledby="internship-title">
      <div className="wrap">
        <Reveal className="intern__head">
          <h2 className="intern__label" id="internship-title">{internship.heading}</h2>
          <p className="intern__role">{internship.role}</p>
          <p className="intern__company">
            <strong>{internship.company}</strong>
            <span>{internship.period}</span>
          </p>
        </Reveal>

        <ul ref={statsRef} className="intern__stats">
          {internship.highlights.map((item) => (
            <li key={item.label}>
              <strong><CountUp value={item.value} start={statsInView} /></strong>
              <span className="intern__stat-label">{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="intern__body">
          <Reveal as="ul" className="intern__points">
            {internship.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </Reveal>

          <Reveal className="intern__side" delay={100}>
            <h3>Worked with</h3>
            <ul className="intern__tech">
              {internship.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {internship.certificateUrl && (
              <ActionLink url={internship.certificateUrl} label="View certificate" icon={<ExternalIcon />} variant="light" />
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
