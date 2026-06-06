import React, { useState } from 'react'

function NavBar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(v => !v)
  const close = () => setOpen(false)
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
        <div className="px-6 sm:px-10 py-6 flex items-center justify-between tracking-tight leading-snug">
            <h1 className="text-white font-medium text-lg tracking-tight leading-snug">
            Vigneshwaran Muralidharan
            </h1>

            {/* Desktop links */}
            <div className="hidden sm:flex flex-wrap gap-x-6 gap-y-2 text-white text-[0.95rem] font-medium tracking-tight leading-snug">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>

            {/* Hamburger for mobile */}
            <div className="sm:hidden flex items-center">
              <button onClick={toggle} aria-expanded={open} aria-label="Toggle menu" className="text-white p-2 rounded-md hover:bg-white/10">
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="sm:hidden px-6 pb-4 bg-black/40 backdrop-blur-md">
            <div className="flex flex-col gap-3 text-white font-medium text-lg">
              <a href="#home" onClick={close}>Home</a>
              <a href="#about" onClick={close}>About</a>
              <a href="#projects" onClick={close}>Projects</a>
              <a href="#experience" onClick={close}>Experience</a>
              <a href="#contact" onClick={close}>Contact</a>
            </div>
          </div>
        )}
    </nav>
    </div>
  )
}

export default NavBar
