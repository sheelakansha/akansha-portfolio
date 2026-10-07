import React from 'react';
import { motion } from 'framer-motion';
import o2SentinelImg from '../assets/o2-sentinel.png';
import aayulinkImg from '../assets/aayulink.png';

/**
 * Projects Component
 * Full-screen section (100vh) with horizontal 2-column layout:
 * Left side: O2 Sentinel | Right side: AayuLink
 * Compact image sizing with descriptions below.
 */
const Projects = () => {
    const projects = [
        {
            title: "O2 Sentinel",
            category: "Real-Time Oxygen Monitoring & Forecasting Dashboard",
            year: "2026",
            description: "A full-stack system that tracks oxygen levels from live sensors and predicts them 5 and 10 minutes ahead with a tactical HUD interface.",
            techStack: ["React", "TypeScript", "Recharts", "Node.js", "Python"],
            image: o2SentinelImg,
            imageColor: "#000000",
            link: "https://o2-monitoring.vercel.app/",
            github: "https://github.com/sheelakansha"
        },
        {
            title: "AayuLink",
            category: "HealthTech • AI Diagnostic Identity",
            year: "2025",
            description: "Digital medical identity system with real-time pathogen tracing. Integrated Google Gemini AI for diagnostic summarization, reducing interpretation time by 85%.",
            techStack: ["ReactJS", "MongoDB", "Cloudinary", "Gemini API"],
            image: aayulinkImg,
            imageColor: "#ffffff",
            link: "https://sih-2025-aayulink.vercel.app/",
            github: "https://github.com/sheelakansha"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.18,
                delayChildren: 0.08,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section 
            id="projects" 
            className="relative w-full h-screen max-h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24 py-6 md:py-10 select-none"
        >
            <div className="w-full max-w-6xl mx-auto flex flex-col items-start justify-center my-auto">
                {/* SECTION HEADER (Left-aligned, 60px size, uppercase) */}
                <motion.div 
                    className="w-full mb-4 md:mb-6 text-left"
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 
                        className="text-[38px] sm:text-[48px] md:text-[60px] font-bold uppercase tracking-tight text-white text-left m-0 p-0"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: '60px', fontWeight: 700, textTransform: 'uppercase' }}
                    >
                        LATEST PROJECTS
                    </h2>
                </motion.div>

                {/* HORIZONTAL PROJECTS GRID (Left: O2 Sentinel | Right: AayuLink) */}
                <motion.div 
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 items-stretch"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 220, damping: 20 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-4 lg:p-5 backdrop-blur-md flex flex-col justify-between hover:border-white/30 transition-colors duration-300 shadow-xl overflow-hidden"
                        >
                            {/* Smaller Compact Image Container (Clickable) */}
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-full h-[140px] sm:h-[160px] lg:h-[175px] rounded-xl overflow-hidden bg-black mb-3 block group cursor-pointer border border-white/5 flex items-center justify-center"
                                aria-label={`Open ${project.title}`}
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                            </a>

                            {/* Details Below Image */}
                            <div className="flex flex-col flex-1 justify-between">
                                <div>
                                    <span className="text-[11px] font-bold text-violet-400 uppercase tracking-widest block mb-1">
                                        {project.category}
                                    </span>
                                    
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg sm:text-xl font-bold text-white">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs font-semibold text-zinc-500">
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* Description below image */}
                                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-3">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.techStack.map((tech, i) => (
                                            <span 
                                                key={i} 
                                                className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-[11px] text-zinc-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Action Links */}
                                    <div className="flex items-center gap-2.5">
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="px-3.5 py-1.5 bg-white text-black font-semibold rounded-full text-xs hover:bg-zinc-200 transition-colors duration-200"
                                        >
                                            View Project
                                        </a>
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-colors duration-200" 
                                            aria-label="GitHub Repo"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
