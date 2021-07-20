import React from 'react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ThemeChangerProps {
  className: string
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({ className }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const toggleMode = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light')

  if (!mounted) return null

  return (
    <button className={className} onClick={toggleMode}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}

export default ThemeChanger
