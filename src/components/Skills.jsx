import { skills } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import '../styles/skills.css'

export default function Skills() {
  return (
    <section id="skills" className="skills section paper" aria-labelledby="skills-title">
      <div className="skills__inner wrap">
        <div className="skills__head">
          <SectionHeading title={skills.heading} intro={skills.intro} id="skills-title" />
        </div>

        <div className="skills__table">
          {skills.groups.map((group, i) => (
            <Reveal key={group.category} className="skills__row" delay={i * 50}>
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__items">
                {group.items.map((item) => (
                  <li key={item} className="skills__item">{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
