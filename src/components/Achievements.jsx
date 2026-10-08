import { achievements } from '../data/portfolioData'
import Reveal from './Reveal'
import { ExternalIcon, Sparkle } from './Icons'
import '../styles/achievements.css'

export default function Achievements() {
  return (
    <section id="achievements" className="achieve section on-wash" aria-labelledby="achievements-title">
      <Sparkle className="achieve__sparkle" />
      <div className="wrap">
        <Reveal>
          <h2 className="achieve__heading" id="achievements-title">{achievements.heading}</h2>
        </Reveal>

        <ul className="achieve__list">
          {achievements.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="achieve__item" delay={i * 120}>
              <p className="achieve__value">{item.value}</p>
              <h3 className="achieve__title">{item.title}</h3>
              <p className="achieve__text">{item.description}</p>
              <p className="achieve__date">{item.date}</p>
              {item.url && (
                <a className="achieve__link" href={item.url} target="_blank" rel="noopener noreferrer">
                  View profile <ExternalIcon />
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
