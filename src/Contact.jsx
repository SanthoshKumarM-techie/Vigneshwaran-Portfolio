import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      "fbdaf21b-af91-4178-9863-1b5bac982f04"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      event.target.reset();
    } else {
      console.log(data);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="bg-zinc-950 px-6 sm:px-10 lg:px-30 pb-15 pt-25 text-white tracking-tight"
    >
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:h-150 lg:w-1/2">
          <h1 className="text-3xl sm:text-[2rem] font-medium tracking-tight leading-snug mb-5">
            Let's Get In Touch!
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 tracking-tight leading-relaxed max-w-md">
            Have a question or want to work together? Fill out the form
            below and I'll get back to you as soon as possible!
          </p>
        </div>

        <div className="w-full max-w-lg mx-auto backdrop-blur-md bg-zinc-900/40 border border-zinc-800/80 p-8 shadow-xl rounded-xl">
          <form onSubmit={onSubmit}>
            <div className="mb-5">
              <label
                className="block text-[0.95rem] font-medium text-zinc-400 mb-2"
                htmlFor="name"
              >
                Name
              </label>

              <input
                className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 text-white placeholder:text-zinc-600 border border-zinc-800 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition duration-200"
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-5">
              <label
                className="block text-[0.95rem] font-medium text-zinc-400 mb-2"
                htmlFor="email"
              >
                Email
              </label>

              <input
                className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 text-white placeholder:text-zinc-600 border border-zinc-800 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition duration-200"
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-[0.95rem] font-medium text-zinc-400 mb-2"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 text-white placeholder:text-zinc-600 border border-zinc-800 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition duration-200 resize-none"
                id="message"
                name="message"
                placeholder="Your message..."
                rows={4}
                required
              />
            </div>

            <button
              className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-medium py-3 px-4 rounded-lg transition shadow-sm"
              type="submit"
            >
              Send Message
            </button>

            {result && (
              <p className="mt-4 text-center text-zinc-400">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;