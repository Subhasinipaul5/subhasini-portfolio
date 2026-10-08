// A button-style link that understands the three link states used in
// portfolioData.js:
//   "https://..." -> normal working button (opens in a new tab)
//   ""            -> greyed-out button that says the link is coming soon
//   null          -> nothing is shown
export default function ActionLink({ url, label, icon, variant = 'dark', newTab = true }) {
  if (url === null || url === undefined) return null

  if (url === '') {
    return (
      <span className="btn btn--pending" aria-disabled="true">
        {icon}
        {label} <small>(link coming soon)</small>
      </span>
    )
  }

  return (
    <a
      className={`btn btn--${variant}`}
      href={url}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon}
      {label}
      {newTab && <span className="visually-hidden"> (opens in a new tab)</span>}
    </a>
  )
}
