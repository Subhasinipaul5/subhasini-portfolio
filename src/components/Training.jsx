import { training } from '../data/portfolioData'
import ActionLink from './ActionLink'
import Reveal from './Reveal'
import { ExternalIcon } from './Icons'
import '../styles/training.css'

export default function Training() {
  return (
    <section id="training" className="training section" aria-labelledby="training-title">
      <div className="wrap">
        <div className="training__head">
          <Reveal>
            <h2 className="training__label" id="training-title">{training.heading}</h2>
            <p className="training__title">{training.title}</p>
          </Reveal>
          <Reveal className="training__about" delay={100}>
            <p className="training__org">
              <strong>{training.organization}</strong>
              <span>{training.period}</span>
            </p>
            <p className="training__summary">{training.summary}</p>
            {training.certificateUrl && (
              <ActionLink url={training.certificateUrl} label="View certificate" icon={<ExternalIcon />} variant="dark" />
            )}
          </Reveal>
        </div>

        {/* the design process, step by step */}
        <ol className="training__steps">
          {training.stages.map((stage, i) => (
            <Reveal as="li" key={stage.title} className="training__step" delay={i * 90}>
              <span className="training__node" aria-hidden="true">{i + 1}</span>
              <h3>{stage.title}</h3>
              <ul>
                {stage.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
