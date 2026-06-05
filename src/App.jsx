import React from 'react'
import Hero from './Hero'
import NavBar from './NavBar'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import NextSection from './Contact'

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <NextSection/>
    </div>
  )
}

export default App
