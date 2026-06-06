import React from 'react'

function Contact() {
  return (
    <div id="contact" className="bg-zinc-950 px-6 sm:px-10 lg:px-30 pb-15 pt-25 text-white tracking-tight">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:h-150 lg:w-1/2">
          <h1 className="text-3xl sm:text-[2rem] font-medium tracking-tight leading-snug mb-5">Let's Get In Touch!</h1>
          <p className="text-base sm:text-lg text-zinc-400 tracking-tight leading-relaxed max-w-md">Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible!</p>
        </div>
        <div className="w-full max-w-lg mx-auto backdrop-blur-md bg-zinc-900/40 border border-zinc-800/80 p-8 shadow-xl">
  {/* Optional Form Header for a more professional look */}


  <form onSubmit={(e) => e.preventDefault()}>
    <div className="mb-5">
      <label className="block text-[0.95rem] font-medium tracking-tight leading-snug text-zinc-400 mb-2" htmlFor="name">
        Name
      </label>
      <input 
        className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 text-white placeholder:text-zinc-600 border border-zinc-800 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition duration-200 text-[0.95rem] tracking-tight leading-normal" 
        id="name" 
        type="text"
        placeholder="Your name" 
      />
    </div>

    <div className="mb-5">
      <label className="block text-[0.95rem] font-medium tracking-tight leading-snug text-zinc-400 mb-2" htmlFor="email">
        Email
      </label>
      <input 
        className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 text-white placeholder:text-zinc-600 border border-zinc-800 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition duration-200 text-[0.95rem] tracking-tight leading-normal" 
        id="email" 
        type="email"
        placeholder="you@example.com" 
      />
    </div>

    <div className="mb-6">
      <label className="block text-[0.95rem] font-medium tracking-tight leading-snug text-zinc-400 mb-2" htmlFor="message">
        Message
      </label>
      <textarea 
        className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 text-white placeholder:text-zinc-600 border border-zinc-800 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition duration-200 text-[0.95rem] tracking-tight leading-normal resize-none" 
        id="message" 
        placeholder="Your message..." 
        rows={4} 
      />
    </div>

    <button 
      className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-medium tracking-tight leading-snug py-3 px-4 rounded-lg transition dynamic-hover shadow-sm text-[0.95rem]" 
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
