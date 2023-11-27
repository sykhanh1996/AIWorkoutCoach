import { useState } from 'react'

const useTheme = () => {
  const isDark = document.documentElement.classList.contains('dark')
  const [theme, setTheme] = useState(isDark ? 'dark' : 'light')

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    if (nextTheme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
    setTheme(nextTheme)
  }

  return { currentTheme: theme, toggleTheme }
}

export default useTheme
