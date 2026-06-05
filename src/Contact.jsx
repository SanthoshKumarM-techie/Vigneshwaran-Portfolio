import React from 'react'

function Contact() {
  return (
    <div id="contact" className="bg-zinc-950 px-30 pb-15 pt-25 text-white tracking-tight">
      <div className="flex">
        <div className="h-150 w-1/2">
          <h1 className="text-3xl font-medium tracking-tight leading-tight mb-5">Let's Get In Touch!</h1>
          <p className="text-base sm:text-lg text-zinc-400 tracking-tight leading-tight max-w-md">Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible!</p>
        </div>
        <div className="w-full max-w-lg mx-auto backdrop-blur-md bg-zinc-900/40 border border-zinc-800/80 p-8 shadow-xl">
  {/* Optional Form Header for a more professional look */}


  <form onSubmit={(e) => e.preventDefault()}>
    <div className="mb-5">
      <label className="block text-sm font-medium tracking-tight leading-tight text-zinc-400 mb-2" htmlFor="name">
        Name
      </label>
      <input 
        className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 text-white placeholder:text-zinc-600 border border-zinc-800 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition duration-200 text-sm tracking-tight leading-tight" 
        id="name" 
        type="text"
        placeholder="Your name" 
      />
    </div>

    <div className="mb-5">
      <label className="block text-sm font-medium tracking-tight leading-tight text-zinc-400 mb-2" htmlFor="email">
        Email
      </label>
      <input 
        className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 text-white placeholder:text-zinc-600 border border-zinc-800 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition duration-200 text-sm tracking-tight leading-tight" 
        id="email" 
        type="email"
        placeholder="you@example.com" 
      />
    </div>

    <div className="mb-6">
      <label className="block text-sm font-medium tracking-tight leading-tight text-zinc-400 mb-2" htmlFor="message">
        Message
      </label>
      <textarea 
        className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 text-white placeholder:text-zinc-600 border border-zinc-800 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition duration-200 text-sm tracking-tight leading-tight resize-none" 
        id="message" 
        placeholder="Your message..." 
        rows={4} 
      />
    </div>

    <button 
      className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-medium tracking-tight leading-tight py-3 px-4 rounded-lg transition dynamic-hover shadow-sm text-sm" 
      type="submit"
    >
      Send Message
    </button>
  </form>
</div>
      </div>
    </div>
  )
}

export default Contact
