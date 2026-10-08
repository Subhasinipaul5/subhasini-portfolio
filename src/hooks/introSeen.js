import { prefersReducedMotion } from './useReducedMotion'

const SEEN_KEY = 'portfolio-intro-seen'

// The intro screen plays once per browser tab, and never for
// visitors who asked for reduced motion.
export function shouldShowPreloader() {
  if (typeof window === 'undefined' || prefersReducedMotion()) return false
  try {
    return !window.sessionStorage.getItem(SEEN_KEY)
  } catch {
    return true
  }
}

export function markIntroSeen() {
  try {
    window.sessionStorage.setItem(SEEN_KEY, '1')
  } catch {
    /* private mode: the intro simply plays again next time */
  }
}
