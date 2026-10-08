import { education } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import '../styles/education.css'

export default function Education() {
  return (
    <section id="education" className="edu section paper" aria-labelledby="education-title">
      <div className="wrap">
        <SectionHeading title={education.heading} id="education-title" />

        <ol className="edu__timeline">
          {education.items.map((item, i) => (
            <Reveal as="li" key={item.degree} className={`edu__item ${item.current ? 'edu__item--current' : ''}`} delay={i * 90}>
              <p className="edu__period">
                {item.period}
                {item.current && <span className="visually-hidden"> (current)</span>}
              </p>
              <div className="edu__main">
                <h3 className="edu__degree">{item.degree}</h3>
                <p className="edu__school">{item.school}</p>
                <p className="edu__place">{item.location}</p>
              </div>
              {item.score && (
                <p className="edu__score">
                  <strong>{item.score}</strong>
                  <span>{item.scoreLabel}</span>
                </p>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
