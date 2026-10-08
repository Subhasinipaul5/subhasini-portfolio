import { useRef, useState } from 'react'
import { contact, personalInfo, socialLinks } from '../data/portfolioData'
import useReducedMotion from '../hooks/useReducedMotion'
import useScrollProgress from '../hooks/useScrollProgress'
import Reveal from './Reveal'
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, SendIcon } from './Icons'
import '../styles/contact.css'

const EMPTY = { name: '', email: '', message: '', 'bot-field': '' }

const isLocal = () => ['localhost', '127.0.0.1', ''].includes(window.location.hostname)

export default function Contact() {
  const reduced = useReducedMotion()
  const sectionRef = useRef(null)
  const bigTextRef = useRef(null)
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | local

  // Slow parallax on the huge background word.
  useScrollProgress(
    sectionRef,
    (p) => {
      if (bigTextRef.current) {
        bigTextRef.current.style.transform = reduced ? 'none' : `translateY(${(p - 0.5) * 30}%)`
      }
    },
    'pass',
  )

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status !== 'idle' && status !== 'sending') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    // Option 2: open the visitor's own email app.
    if (contact.formMode === 'mailto') {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`)
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
      return
    }

    // Option 1: Netlify Forms. It only exists on the deployed site.
    if (isLocal()) {
      setStatus('local')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': contact.formName, ...form }).toString(),
      })
      if (!response.ok) throw new Error(`Form request failed: ${response.status}`)
      setStatus('sent')
      setForm(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  const links = [
    { label: 'Email', text: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: <MailIcon /> },
    personalInfo.phone && {
      label: 'Phone',
      text: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`,
      icon: <PhoneIcon />,
    },
    socialLinks.linkedin && {
      label: 'LinkedIn',
      text: socialLinks.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
      href: socialLinks.linkedin,
      icon: <LinkedinIcon />,
      external: true,
    },
    socialLinks.github && {
      label: 'GitHub',
      text: socialLinks.github.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
      href: socialLinks.github,
      icon: <GithubIcon />,
      external: true,
    },
  ].filter(Boolean)

  return (
    <section ref={sectionRef} id="contact" className="contact on-deep" aria-labelledby="contact-title">
      <div className="contact__bigtext" aria-hidden="true">
        <span ref={bigTextRef}>Contact</span>
      </div>

      <div className="contact__inner">
        <Reveal className="contact__info">
          <h2 className="contact__title" id="contact-title">{contact.heading}</h2>
          <p className="contact__intro">{contact.intro}</p>
          <ul className="contact__links">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  {link.icon}
                  <span>
                    <small>{link.label}</small>
                    {link.text}
                  </span>
                  {link.external && <span className="visually-hidden"> (opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="contact__panel on-wash" delay={100}>
          <form
            name={contact.formName}
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="contact__form"
          >
            <input type="hidden" name="form-name" value={contact.formName} />
            {/* hidden trap for spam bots: real visitors never fill this */}
            <p className="contact__trap" aria-hidden="true">
              <label>
                Leave this empty
                <input name="bot-field" tabIndex={-1} autoComplete="off" value={form['bot-field']} onChange={handleChange} />
              </label>
            </p>

            <div className="contact__fields">
              <div className="contact__field">
                <label htmlFor="contact-name">Your name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required value={form.name} onChange={handleChange} />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email">Your email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={handleChange} />
              </div>
              <div className="contact__field contact__field--wide">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows={4} required value={form.message} onChange={handleChange} />
              </div>
            </div>

            <div className="contact__submit">
              <button type="submit" className="btn btn--dark" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
                <SendIcon />
              </button>

              <p className="contact__status" role="status" aria-live="polite">
                {status === 'sent' && 'Message sent. Thank you, I will reply soon.'}
                {status === 'error' && (
                  <>
                    The message could not be sent. Please email me at{' '}
                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
                  </>
                )}
                {status === 'local' && (
                  <>
                    The form sends messages on the live Netlify site, not on this local preview. Email works
                    everywhere: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
                  </>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
