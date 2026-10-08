import { about, personalInfo } from '../data/portfolioData'
import useInView from '../hooks/useInView'
import Reveal from './Reveal'
import { Sparkle } from './Icons'
import '../styles/about.css'

export default function About() {
  const [badgeRef, badgeInView] = useInView({ threshold: 0.3 })

  // These facts are built from PERSONAL INFORMATION in portfolioData.js.
  const facts = [
    { label: 'University', value: personalInfo.university },
    { label: 'Degree', value: 'B.Tech Computer Science and Engineering, 3rd year' },
    { label: 'CGPA', value: personalInfo.cgpa },
    { label: 'Focus', value: personalInfo.focus },
  ].filter((f) => f.value)

  return (
    <section id="about" className="about section on-wash" aria-labelledby="about-title">
      <Sparkle className="about__sparkle about__sparkle--a" />
      <Sparkle className="about__sparkle about__sparkle--b" />

      <div className="about__inner wrap">
        {/* ID badge on a lanyard */}
        <div ref={badgeRef} className={`badge ${badgeInView ? 'badge--in' : ''}`}>
          <span className="badge__strap" aria-hidden="true" />
          <span className="badge__clip" aria-hidden="true" />
          <div className="badge__card">
            <span className="badge__slot" aria-hidden="true" />
            <div className="badge__photo">
              {personalInfo.photo ? (
                <img src={personalInfo.photo} alt={`Portrait of ${personalInfo.name}`} loading="lazy" />
              ) : (
                <span aria-hidden="true">{personalInfo.initials}</span>
              )}
            </div>
            <p className="badge__name">{personalInfo.name}</p>
            <p className="badge__meta">{personalInfo.title}<br />{personalInfo.university}</p>
          </div>
        </div>

        <div className="about__text">
          <Reveal>
            <h2 className="about__title" id="about-title">{about.heading}</h2>
            {about.paragraphs.map((text, i) => (
              <p key={i} className={i === 0 ? 'about__lead' : 'about__para'}>{text}</p>
            ))}
          </Reveal>

          <Reveal as="dl" className="about__facts" delay={120}>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* torn paper edge into the next (white) section */}
      <svg className="about__tear" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>
    </section>
  )
}
