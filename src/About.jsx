import React from 'react'
import CodeImage from './assets/Dark theme image.jpg'; // Ensure this path is correct based on your project structure

function About() {
  return (
    <div id="about" className="bg-zinc-950 px-10 pb-15 pt-30 text-white tracking-tight">
      <div className="flex gap-30 mb-8 items-stretch">
        <p className="text-3xl font-medium tracking-tight leading-tight self-end">About Me</p>
        <p className="text-base sm:text-lg text-zinc-400 leading-tight tracking-tight max-w-5xl">
          I'm Vigneshwaran M, a final year B.E. Computer Science and Engineering student. I enjoy building web applications, solving problems, and exploring new technologies. I work with tools like React, Node.js, Python, Java, and MySQL, and I have developed projects ranging from health systems to matchmaking platforms. Right now, I'm focused on improving my DSA skills and preparing for product-based company interviews.
        </p>
      </div>
       <div className="bg-white h-100 flex items-stretch" style={{ backgroundImage: `url(${CodeImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '400px' }}>
        <p className="text-6xl sm:text-7xl font-semibold tracking-tight leading-tight self-end p-4 mix-blend-difference">Passionate about <br/>Learning & Developing</p>
       </div>
      
    </div>
  ) 
}

export default About
