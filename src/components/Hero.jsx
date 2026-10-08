import { hero, personalInfo } from '../data/portfolioData'
import { DownloadIcon, Sparkle } from './Icons'
import '../styles/hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero on-deep" aria-label="Introduction">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__inner wrap">
        <h1 className="hero__name" aria-label={personalInfo.name}>
          <span className="hero__line" aria-hidden="true">
            <span>{personalInfo.firstName}</span>
          </span>
          <span className="hero__line" aria-hidden="true">
            <span>{personalInfo.lastName}</span>
          </span>
          <Sparkle className="hero__sparkle" />
        </h1>

        <div className="hero__body">
          <p className="hero__role">
            {personalInfo.title}
            <span>{personalInfo.role}</span>
          </p>
          <div className="hero__pitch">
            <p className="hero__intro">{hero.intro}</p>
            <div className="hero__actions">
              <a className="btn btn--light" href="#projects">View Projects</a>
              <a className="btn btn--ghost" href="#contact">Contact Me</a>
              {personalInfo.cvPath && (
                <a className="btn btn--ghost" href={personalInfo.cvPath} download>
                  <DownloadIcon /> Download CV
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {hero.facts.length > 0 && (
        <div className="hero__bottom wrap">
          <dl className="hero__facts">
            {hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </section>
  )
}
