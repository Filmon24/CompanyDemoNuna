// src/hooks/useScrollAnimation.js
import { useEffect } from 'react'

export const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-scale-in')
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        
        if (elementPosition < windowHeight - 100) {
          element.style.opacity = '1'
        }
      })
    }
    
    // Run once on page load
    animateOnScroll()
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll)
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        
        const targetId = this.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          })
        }
      })
    })
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll)
    }
  }, [])
}