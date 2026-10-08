import { certifications } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { ExternalIcon } from './Icons'
import '../styles/certifications.css'

function Row({ cert }) {
  const content = (
    <>
      <span className="cert__date">{cert.date}</span>
      <span className="cert__title">{cert.title}</span>
      <span className="cert__issuer">{cert.issuer}</span>
      <span className="cert__link">
        {cert.url && (
          <>
            <span>View certificate</span>
            <ExternalIcon />
            <span className="visually-hidden"> (opens in a new tab)</span>
          </>
        )}
      </span>
    </>
  )

  // With a link the whole row is clickable; without one it is plain text.
  return cert.url ? (
    <a className="cert cert--linked" href={cert.url} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <div className="cert">{content}</div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="certs section" aria-labelledby="certifications-title">
      <div className="wrap">
        <SectionHeading title={certifications.heading} intro={certifications.intro} id="certifications-title" />

        <ul className="certs__list">
          {certifications.items.map((cert, i) => (
            <Reveal as="li" key={cert.title} delay={i * 40}>
              <Row cert={cert} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
