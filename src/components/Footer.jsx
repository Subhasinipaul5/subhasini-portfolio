import { footer, personalInfo, socialLinks } from '../data/portfolioData'
import '../styles/footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer on-deep">
      <div className="footer__top wrap">
        <div>
          <p className="footer__name">{personalInfo.name}</p>
          <p>{personalInfo.focus}</p>
        </div>
        <ul className="footer__links">
          {socialLinks.github && (
            <li><a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          )}
          {socialLinks.linkedin && (
            <li><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          )}
          <li><a href={`mailto:${personalInfo.email}`}>Email</a></li>
        </ul>
      </div>

      <p className="footer__big" aria-hidden="true">{footer.bigText}</p>

      <div className="footer__bottom wrap">
        <p>© {year} {personalInfo.name}</p>
        {footer.note && <p>{footer.note}</p>}
        <a href="#home">Back to top</a>
      </div>
    </footer>
  )
}
