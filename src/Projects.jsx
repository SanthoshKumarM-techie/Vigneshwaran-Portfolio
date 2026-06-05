import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import OHC from './assets/OHC.png';
import Matrimony from './assets/Matrimony.png';
import CECT from './assets/CECT.png';
import Moodle from './assets/Moodle.png';
import PlacementPortal from './assets/PlacementPortal.png';

const projects = [
  {
    id: 1,
    title: 'JSW OHC',
    subtitle: 'Industrial health management with multi-role access',
    stack: ['React', 'Django', 'MySQL'],
    description:
      'JSW Occupational Health Center (OHC) Project is a comprehensive digital health management system designed for industrial employees. It streamlines the medical recordkeeping process by allowing seamless access and updates by multiple roles—nurse, doctor, admin, and pharmacist.',
    img: OHC,
    demo: 'https://jswohc.netlify.app/',
    repo: 'https://github.com/VIGNESHWARAN-USER/Occupational-Health-Center',
    tags: ['Healthcare', 'Enterprise', 'Role-Based'],
  },
  {
    id: 2,
    title: 'Matrimony Site',
    subtitle: 'Community matrimony portal with verified profiles',
    stack: ['React', 'Node.js', 'MongoDB'],
    description: "Matrimonial Portal for Chennai Siddha Vidya Nilayam Trust is a custom-built web application designed to support matrimonial alliances within the trust’s community. The platform allows users to register and search for suitable matches among approved members.",
    img: Matrimony,
    demo: 'https://chennaisiddhaviddhai.com/',
    repo: 'https://github.com/VIGNESHWARAN-USER/Matrimony-v2.0',
    tags: ['Matchmaking', 'Verified Profiles', 'Trust'],
  },
  {
    id: 3,
    title: 'CECT Portal',
    subtitle: 'Academic credit transfer and validation workflow',
    stack: ['React', 'Springboot', 'MongoDB'],
    description: 'Credit Equivalence and Credit Transfer (CECT) Portal is a multi-login web application developed for intra-college use to manage credit transfers for students taking external courses like NPTEL. It supports different user roles with specific access.',
    img: CECT,
    demo: 'https://cect.netlify.app/',
    repo: 'https://github.com/VIGNESHWARAN-USER/CECT-Springboot',
    tags: ['Academic', 'Role-Based', 'College'],
  },
  {
    id: 4,
    title: 'Moodle',
    subtitle: 'Learning management system with faculty engagement',
    stack: ['React', 'Springboot', 'MongoDB'],
    description: 'Learning Management Portal is a multi-login web application inspired by the Moodle classroom system, developed with additional features tailored to client-specific requirements. Features include insight analytics into student engagement.',
    img: Moodle,
    demo: '#demo',
    repo: 'https://github.com/VIGNESHWARAN-USER/Moodle-Springboot',
    tags: ['Education', 'Multi-Login', 'Engagement'],
  },
  {
    id: 5,
    title: 'Placement Portal',
    subtitle: 'Campus recruitment management and analytics',
    stack: ['React', 'Node.js', 'MongoDB'],
    description: 'Placement Portal is a multi-login web application designed for managing campus recruitment activities efficiently. Includes performance analytics—both individual and group-wise—to provide insights into recruitment outcomes.',
    img: PlacementPortal,
    demo: '#demo',
    repo: 'https://github.com/VIGNESHWARAN-USER/Placement-Portal',
    tags: ['Placements', 'Recruitment', 'Analytics'],
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-zinc-950 px-6 sm:px-10 py-24 min-h-screen text-white tracking-tight flex flex-col items-center overflow-x-hidden">
      <div
        className="w-full max-w-5xl flex flex-col items-center mb-16 text-center"
      >
        <h2
          className="text-3xl font-medium tracking-tight leading-tight text-zinc-100 mb-4"
        >
          Projects
        </h2>
        <p
          className="text-zinc-400 text-base sm:text-lg max-w-xl font-normal tracking-tight leading-tight"
        >
          A curated display of digital platforms combining intricate role-based logic with performant web design.
        </p>
      </div>

      <div 
        className="w-full max-w-5xl space-y-12"
      >
        {projects.map((p) => (
          <div
            key={p.id}
            className="group relative w-full grid grid-cols-1 md:grid-cols-12 bg-zinc-900/20 border border-zinc-900/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-800/80 hover:bg-zinc-900/40"
          >
            {/* Image Section */}
            <div className="md:col-span-5 w-full flex items-center justify-center p-6 bg-zinc-950/40 border-b md:border-b-0 md:border-r border-zinc-900/80 overflow-hidden">
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900 relative border border-zinc-800/30">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out brightness-[0.8] group-hover:brightness-100 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between relative">
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-[10px] font-medium tracking-tight leading-tight text-zinc-500 uppercase bg-zinc-900/80 px-2.5 py-1 rounded-md border border-zinc-800/50">
                    {p.tags[0]}
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {p.stack.map((t) => (
                      <span key={t} className="text-xs text-zinc-400 font-normal tracking-tight leading-tight">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight leading-tight text-zinc-100 mb-2 transition-transform duration-300 group-hover:translate-x-1">
                  {p.title}
                </h3>
                <p className="text-sm text-zinc-400 font-normal tracking-tight leading-tight mb-4">
                  {p.description}
                </p>
                <p className="text-xs font-normal tracking-tight leading-tight text-zinc-500 italic border-l-2 border-zinc-800 pl-3 py-0.5">
                  {p.subtitle}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-6 mt-8 pt-4 border-t border-zinc-900/80">
                <a 
                  href={p.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium tracking-tight leading-tight text-zinc-200 hover:text-white transition-colors group/link"
                > 
                  <span>EXPLORE PLATFORM</span> 
                  <FiExternalLink className="text-zinc-500 group-hover/link:text-white transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 duration-200" />
                </a>
                <a 
                  href={p.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-200 text-xs font-normal tracking-tight leading-tight transition-colors"
                >
                  <SiGithub className="text-sm" />
                  <span>Repository</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
