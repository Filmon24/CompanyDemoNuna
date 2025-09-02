// src/App.jsx
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Team from './components/sections/Team'
import Projects from './components/sections/Projects'
import Products from './components/sections/Products'
import Partners from './components/sections/Partners'
import Contact from './components/sections/Contact'
// import {useDarkMode } from './hooks/useDarkMode'
// import { useScrollAnimation } from './hooks/useScrollAnimation'
import './index.css'

function App() {
  // useDarkMode()
  // useScrollAnimation()
  
    return (
      <div className="App bg-primary text-white transition-colors duration-300">
        <Header />
        <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Projects />
        <Products />
        <Partners />
        <Contact />
        </main>
        <Footer />
      </div>
    )
  }
  
  
  

export default App