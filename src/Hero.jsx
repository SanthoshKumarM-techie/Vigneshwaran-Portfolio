import React from 'react'
import DotField from '@/components/DotField';
import LiquidEther from '@/components/LiquidEther';

// Importing the brand logos from React Icons sets
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiDjango, 
  SiSpringboot, 
  SiTailwindcss, 
  SiStreamlit, 
  SiC, 
  SiPython 
} from 'react-icons/si';
import { FaJava } from "react-icons/fa"; // Updated Java Icon

function Hero() {
  // Array containing only the icon components scaled appropriately
  const techIcons = [
    <SiReact className="text-3xl" />,
    <SiNodedotjs className="text-3xl" />,
    <SiExpress className="text-3xl" />,
    <SiDjango className="text-3xl" />,
    <SiSpringboot className="text-3xl" />,
    <SiTailwindcss className="text-3xl" />,
    <SiStreamlit className="text-3xl" />,
    <SiC className="text-3xl" />,
    <FaJava className="text-3xl" />, // Placed FaJava here
    <SiPython className="text-3xl" />
  ];

  // Double the array to ensure perfect continuous infinite scrolling
  const doubleIcons = [...techIcons, ...techIcons];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black px-6 py-10 text-white sm:px-10 flex flex-col items-start justify-center ">
      
      {/* Injecting Tailwind Custom Infinite Keyframe Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 z-0">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B497CF' ]}
          mouseForce={8}
          cursorSize={80}
          isViscous
          viscous={16}
          iterationsViscous={12}
          iterationsPoisson={14}
          resolution={0.32}
          pixelRatio={1.15}
          isBounce={false}
          autoDemo
          autoSpeed={0.35}
          autoIntensity={1.5}
          takeoverDuration={0.25}
          autoResumeDelay={4000}
          autoRampDuration={0.8}
        />
      </div>

      <div className="absolute inset-0 z-10">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#A855F7"
          gradientTo="#B497CF"
          glowColor="#120F17"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 bg-black/25" />

      <div className="relative z-40">
        <div className="mb-5">
          <p className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] mb-8 max-w-7xl">
            Hey There, I am <br />
            Vigneshwaran Muralidharan
          </p>

          <p className="text-3xl text-white font-medium tracking-tight leading-snug">
            Full Stack Developer
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-base">
          <a
            href="/Vigneshwaran-Muralidharan-Resume.pdf"
            download
            className="bg-white text-black font-bold py-3 px-6 hover:bg-gray-200 transition-colors duration-300"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="bg-white text-black font-bold py-3 px-6 hover:bg-gray-200 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Bottom Bar: Layout architecture strictly preserved */}
      <div className="absolute bottom-0 left-0 w-full z-40 bg-white p-5 text-black flex flex-col md:flex-row md:items-center justify-between overflow-hidden">
        <p className="text-xl whitespace-nowrap z-50 bg-white pr-14 mb-4 md:mb-0">
          I am Specialized in
        </p>
        
        {/* Infinite Scroller Track Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-30 animate-scroll w-max items-center text-black">
            {doubleIcons.map((IconComponent, index) => (
              <div key={index} className="shrink-0 transition-opacity duration-300 hover:opacity-100 opacity-80">
                {IconComponent}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
