import React, { useEffect, useRef, useState } from 'react';
// Assuming your other assets are located here, import them or replace with your image paths
import OHC from './assets/OHC.png';
import Matrimony from './assets/Matrimony.png';
import DisciplineStar from './assets/DisciplineStar.jpg';
import MeritScholar from './assets/MeritScholar.jpg';
import Achiever1 from './assets/Achiever1.png';
import Achiever2 from './assets/Achiever2.png';

const experiences = [
  {
    id: 1,
    title: 'Industrial Project',
    image: OHC, 
    description:
      'JSW Occupational Health Center (OHC) is a digital health management system that enables nurses, doctors, admins, and pharmacists to securely manage employee medical records and healthcare workflows. It streamlines health monitoring, reduces paperwork, and improves operational efficiency.',
  },
  {
    id: 2,
    title: 'Consultancy Project',
    image: Matrimony, 
    description:
      'A custom matrimonial platform for Chennai Siddha Vidya Nilayam Trust, enabling verified members to register, search for matches, and connect securely within the community. The system includes profile approval, donation management, and trust information pages.',
  },
  {
    id: 3,
    title: 'NPTEL Discipline Star',
    image: DisciplineStar, 
    description:
      'Awarded the NPTEL Discipline Star Certificate for successfully completing five courses in programming, data science, analytics, and emerging technologies. This recognition reflects consistent academic excellence and a strong commitment to continuous learning and skill development.',
  },
  {
    id: 4,
    title: 'Merit Scholar',
    image: MeritScholar, 
    description:
      'Awarded the KIOT Merit Scholarship for achieving a TNEA 2022 cut-off score of 190 and demonstrating strong academic performance. The scholarship, worth ₹63,750 per year, supported my B.E. Computer Science and Engineering studies throughout the degree.',
  },
  {
    id: 5,
    title: 'Achiever Award 2024',
    image: Achiever1, 
    description:
      'Received the KIOT Achievers Award for earning prestigious NPTEL certifications, including Elite + Gold in The Joy of Computing Using Python and Elite + Silver in Problem Solving Through Programming in C. This recognition highlights strong programming fundamentals and a commitment to continuous learning.',
  },
  {
    id: 6, 
    title: 'Achiever Award 2025',
    image: Achiever2, 
    description:
      'Received the KIOT Achievers Award for contributing to a real-time consultancy project by designing and developing the Chennai Siddha Vidhai Trust website with an integrated matrimony module. The project showcased my ability to deliver secure, user-focused web solutions in a collaborative environment.',
  },
];

function Experience() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [sectionHeight, setSectionHeight] = useState('100vh');

  useEffect(() => {
    const updateDimensions = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const cardCount = experiences.length;
      const firstCard = track.children[0];
      if (!firstCard) return;
      
      const cardWidth = firstCard.offsetWidth;
      const totalTranslation = cardWidth * (cardCount - 1);
      
      setMaxScroll(totalTranslation);
      
      // Match the container's height precisely to the window frame plus translation requirements.
      // This establishes a 1:1 ratio between vertical page scrolling and horizontal track movement.
      setSectionHeight(`${window.innerHeight + totalTranslation}px`);
    };

    const timer = setTimeout(updateDimensions, 100);
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    let frameId = null;

    const handleScroll = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) {
          frameId = null;
          return;
        }

        const sectionTop = section.offsetTop;
        const scrollY = window.scrollY;
        
        // Calculate the raw distance scrolled inside this specific component track
        const scrolledInsideSection = scrollY - sectionTop;
        
        // Directly map the vertical scroll progress to our maximum translation limit.
        // This ensures the 6th card sits perfectly centered exactly when you hit the end of the element container.
        const currentTranslation = Math.min(Math.max(scrolledInsideSection, 0), maxScroll);
        
        track.style.transform = `translateX(-${currentTranslation}px)`;
        frameId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [maxScroll]);

  return (
    <section 
      id="experience" 
      ref={sectionRef} 
      className="relative bg-zinc-950 text-white tracking-tight w-full" 
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12">
        
        <h1 className="text-3xl font-medium tracking-tight leading-tight self-center mb-6 px-6 pt-10 sm:px-10">
          Experiences and Achievements
        </h1>
        <p className="text-zinc-400 text-center text-base sm:text-lg tracking-tight leading-tight px-6 sm:px-10">
          Here's a glimpse of my professional journey and accomplishments.
        </p>

        {/* Full-width interactive workspace */}
        <div className="relative w-full overflow-visible my-auto">
          <div
            ref={trackRef}
            className="flex w-max px-[50vw] transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: `translateX(0px)` }}
          >
            {experiences.map((item) => (
              <article 
                key={item.id} 
                className="w-screen max-w-[90vw] md:max-w-2xl lg:max-w-3xl shrink-0 flex items-center justify-center px-4"
                style={{ transform: 'translateX(-50%)' }}
              >
                {/* Finalized Card Presentation Layer aligned to dynamic loop */}
                <div 
                  className="relative overflow-hidden border border-zinc-900 backdrop-blur-xl hover:border-zinc-800/80 transition-all duration-300 group" 
                  style={{ 
                    backgroundImage: `url(${item.image})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    width: '100%', 
                    height: '400px' 
                  }}
                >
                  {/* Color/Saturate Overlay Mask */}
                  <div className="absolute inset-0 bg-zinc-950/40 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Smooth Gradient Fill to Keep Text Readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  
                  {/* Dynamic Content Placed Over Images */}
                  <div className="absolute bottom-0 left-0 z-10 p-6 md:p-8 text-white max-w-2xl">
                    <h3 className="text-2xl font-medium tracking-tight leading-tight mb-2 text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-tight text-zinc-400 tracking-tight">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Pure Aesthetic Scroll Indicator Bottom Space */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 shrink-0 text-left">
          <span className="text-[11px] font-medium text-zinc-600 tracking-tight leading-tight uppercase animate-pulse">
            ↓ Scroll to navigate
          </span>
        </div>

      </div>
    </section>
  );
}

export default Experience;
