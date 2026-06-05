import React from 'react'

function NavBar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
        <div className="px-10 py-6 flex justify-between items-center tracking-tight leading-tight">
            <h1 className="text-white font-medium text-lg tracking-tight leading-tight">
            Vigneshwaran Muralidharan
            </h1>

            <div className="flex gap-8 text-white text-sm font-medium tracking-tight leading-tight">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default NavBar
