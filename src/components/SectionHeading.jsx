import Reveal from './Reveal'

export default function SectionHeading({ title, intro, light = false, id }) {
  return (
    <Reveal className={`heading ${light ? 'heading--light' : ''}`}>
      <h2 className="heading__title" id={id}>{title}</h2>
      {intro && <p className="heading__intro">{intro}</p>}
    </Reveal>
  )
}
