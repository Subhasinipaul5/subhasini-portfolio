import { useCallback, useEffect, useRef, useState } from 'react'
import { projects, socialLinks } from '../data/portfolioData'
import useReducedMotion from '../hooks/useReducedMotion'
import useScrollProgress from '../hooks/useScrollProgress'
import ActionLink from './ActionLink'
import SectionHeading from './SectionHeading'
import { ExternalIcon, GithubIcon } from './Icons'
import '../styles/projects.css'

// One project "tag". Everything it shows comes from one object in
// the projects list in portfolioData.js.
function ProjectCard({ project, active, cardRef }) {
  const ongoing = project.status.toLowerCase() === 'ongoing'
  const technologies = project.technologies || []
  return (
    <li ref={cardRef} className={`project ${active ? 'project--active' : ''}`}>
      <article className="project__tag">
        <span className="project__hole" aria-hidden="true" />
        <div className="project__inner">
          <p className="project__meta">
            <span className={`project__status ${ongoing ? 'project__status--ongoing' : ''}`}>
              {project.status}
            </span>
            {project.period && <span className="project__period">{project.period}</span>}
          </p>

          <h3 className="project__title">{project.title}</h3>
          {project.summary && <p className="project__summary">{project.summary}</p>}

          <ul className="project__points">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          {technologies.length > 0 && (
            <ul className="project__tech" aria-label="Tech stack">
              {technologies.map((tech) => (
                <li key={tech} className="pill">{tech}</li>
              ))}
            </ul>
          )}

          <div className="project__actions">
            <ActionLink url={project.liveUrl} label={project.liveLabel || 'Live demo'} icon={<ExternalIcon />} variant="dark" />
            <ActionLink url={project.githubUrl} label="GitHub" icon={<GithubIcon />} variant="outline" />
          </div>
        </div>
      </article>
    </li>
  )
}

export default function Projects() {
  const reduced = useReducedMotion()
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const maskRef = useRef(null)
  const geometry = useRef({ length: 0, tops: [], progress: 0 })
  const [path, setPath] = useState({ d: '', width: 0, height: 0 })
  const [activeCount, setActiveCount] = useState(0)

  // Draw the dashed line up to "progress" (0 to 1) and light up the
  // cards the line has reached.
  const applyProgress = useCallback((progress) => {
    const g = geometry.current
    g.progress = progress
    const mask = maskRef.current
    if (!mask || !g.length) return
    mask.style.strokeDasharray = `${g.length}`
    mask.style.strokeDashoffset = `${g.length * (1 - progress)}`
    const tipY = mask.getPointAtLength(g.length * progress).y
    const count = g.tops.filter((top) => tipY >= top).length
    setActiveCount((prev) => (prev === count ? prev : count))
  }, [])

  // Build the line so that it passes through the middle of every card.
  // It is rebuilt whenever the layout changes size.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const build = () => {
      const cards = cardRefs.current.filter(Boolean)
      if (!cards.length) return
      const width = track.offsetWidth
      const height = track.offsetHeight
      const points = [
        { x: width / 2, y: 0 },
        ...cards.map((c) => ({ x: c.offsetLeft + c.offsetWidth / 2, y: c.offsetTop + c.offsetHeight / 2 })),
        { x: width / 2, y: height },
      ]
      let d = `M ${points[0].x} ${points[0].y}`
      for (let i = 1; i < points.length; i += 1) {
        const a = points[i - 1]
        const b = points[i]
        const midY = (a.y + b.y) / 2
        d += ` C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`
      }
      geometry.current.tops = cards.map((c) => c.offsetTop + 56)
      setPath((prev) => (prev.d === d ? prev : { d, width, height }))
    }
    // The observer runs build once straight away, then on every resize.
    const observer = new ResizeObserver(build)
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  // After the line is (re)built, measure it and redraw.
  useEffect(() => {
    if (!maskRef.current || !path.d) return
    geometry.current.length = maskRef.current.getTotalLength()
    applyProgress(reduced ? 1 : geometry.current.progress)
  }, [path.d, reduced, applyProgress])

  useScrollProgress(trackRef, (p) => applyProgress(reduced ? 1 : p))

  return (
    <section id="projects" className="projects section paper" aria-labelledby="projects-title">
      <div className="wrap">
        <SectionHeading title={projects.heading} intro={projects.intro} id="projects-title" />

        <div ref={trackRef} className="projects__track">
          {path.d && (
            <svg
              className="projects__path"
              width={path.width}
              height={path.height}
              viewBox={`0 0 ${path.width} ${path.height}`}
              aria-hidden="true"
            >
              <defs>
                <mask id="projects-path-mask" maskUnits="userSpaceOnUse" x="0" y="0" width={path.width} height={path.height}>
                  <path ref={maskRef} d={path.d} fill="none" stroke="#fff" strokeWidth="24" />
                </mask>
              </defs>
              <path d={path.d} fill="none" stroke="#b9cfce" strokeWidth="2" strokeDasharray="8 10" />
              <path d={path.d} fill="none" stroke="#004245" strokeWidth="2" strokeDasharray="8 10" mask="url(#projects-path-mask)" />
            </svg>
          )}

          <ul className="projects__list">
            {projects.items.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                active={i < activeCount}
                cardRef={(el) => { cardRefs.current[i] = el }}
              />
            ))}
          </ul>
        </div>

        {projects.endNote && socialLinks.github && (
          <p className="projects__note">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              {projects.endNote}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
