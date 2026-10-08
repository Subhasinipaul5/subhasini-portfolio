import { useEffect, useState } from 'react'
import { navLinks, personalInfo } from '../data/portfolioData'
import { DownloadIcon } from './Icons'
import '../styles/navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 40)
  const [activeId, setActiveId] = useState('')

  // Solid bar after the visitor scrolls a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link of the section that is on screen.
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    const hero = document.getElementById('home')
    const heroIo = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActiveId(''),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    if (hero) heroIo.observe(hero)
    return () => {
      io.disconnect()
      heroIo.disconnect()
    }
  }, [])

  // Phone menu: lock page scroll, close with Escape or when the screen gets wide.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const wide = window.matchMedia('(min-width: 1100px)')
    const onWide = () => wide.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    wide.addEventListener('change', onWide)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
      wide.removeEventListener('change', onWide)
    }
  }, [open])

  const state = open ? 'nav--open' : scrolled ? 'nav--scrolled' : ''

  return (
    <header className={`nav ${state}`}>
      <nav className="nav__bar wrap" aria-label="Main">
        <a className="nav__logo" href="#home" onClick={() => setOpen(false)}>
          {personalInfo.firstName}
          <span className="visually-hidden"> {personalInfo.lastName}, back to top</span>
        </a>

        <ul className="nav__links">
          {navLinks.filter((l) => !l.mobileOnly).map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav__link ${activeId === link.id ? 'nav__link--active' : ''}`}
                aria-current={activeId === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {personalInfo.cvPath && (
          <a className="nav__cta" href={personalInfo.cvPath} download>
            <DownloadIcon /> Download CV
          </a>
        )}

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="nav__toggle-lines" aria-hidden="true"><i /><i /></span>
        </button>
      </nav>

      <div id="mobile-menu" className="nav__menu" hidden={!open}>
        <ul className="nav__menu-list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                aria-current={activeId === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {personalInfo.cvPath && (
          <a className="btn btn--light nav__menu-cta" href={personalInfo.cvPath} download onClick={() => setOpen(false)}>
            <DownloadIcon /> Download CV
          </a>
        )}
      </div>
    </header>
  )
}
