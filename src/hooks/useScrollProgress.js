import { useEffect, useRef } from 'react'

// Calls onChange(progress) while the page scrolls.
// progress goes from 0 to 1 as the element travels through the screen:
//   mode "center": 0 when the element's top reaches the middle of the
//                  screen, 1 when its bottom reaches the middle.
//   mode "pass":   0 when the element enters at the bottom of the screen,
//                  1 when it has left at the top.
export default function useScrollProgress(ref, onChange, mode = 'center') {
  const callback = useRef(onChange)
  useEffect(() => {
    callback.current = onChange
  })

  useEffect(() => {
    let frame = 0
    const measure = () => {
      frame = 0
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      let p
      if (mode === 'pass') p = (vh - rect.top) / (vh + rect.height)
      else p = (vh / 2 - rect.top) / Math.max(rect.height, 1)
      callback.current(Math.min(1, Math.max(0, p)))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ref, mode])
}
