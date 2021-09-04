import { useEffect } from 'react'

export function useIsInViewport(elementId, animationClass = 'animate__zoomIn') {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const element = document.querySelector(elementId, animationClass)
      const position = element.getBoundingClientRect()
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        if (element.getAttribute('data-ajAnimation') == null) {
          element.style.opacity = 1
          element.classList.add('animate__animated', animationClass)
          element.setAttribute('data-ajAnimation', true)
        }
      } else {
        if (element.getAttribute('data-ajAnimation') == null) {
          element.style.opacity = 0
          element.classList.remove('animate__animated', animationClass)
        }
      }
    })
  }, [])
}
