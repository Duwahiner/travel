import { useState, useEffect } from 'react'

export const useScreen = () => {
  const [width, setWidth] = useState(1200)

  // Observa los cambios de redimensión de pantalla
  useEffect(() => {
    const updateWidth = () => {
      const innerWidth = window.innerWidth
      setWidth(innerWidth)
    }

    updateWidth()

    window.addEventListener('resize', updateWidth, false)

    return () => window.removeEventListener('resize', updateWidth)
  }, [width, setWidth])

  return {width, setWidth}
}
