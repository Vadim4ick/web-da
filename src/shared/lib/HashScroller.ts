'use client'
import { useEffect } from 'react'
import { scroller } from 'react-scroll'

export function HashScroller() {
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)

      // Небольшая задержка, чтобы дождаться рендера блоков
      setTimeout(() => {
        scroller.scrollTo(id, {
          smooth: true,
          duration: 0,
          offset: -100,
        })
      }, 0)
    }
  }, [])

  return null
}
