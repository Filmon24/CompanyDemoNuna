// src/hooks/useDarkMode.js
import { useEffect } from 'react'

export const useDarkMode = () => {
  useEffect(() => {
    // Check for saved user preference or use dark mode as default
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const currentTheme = localStorage.getItem('theme') || (userPrefersDark ? 'dark' : 'light')
    const html = document.querySelector('html')
    
    if (currentTheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [])
}