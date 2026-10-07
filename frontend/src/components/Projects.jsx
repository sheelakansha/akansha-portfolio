import React from 'react';
import { motion } from 'framer-motion';
import o2SentinelImg from '../assets/o2-sentinel.png';
import aayulinkImg from '../assets/aayulink.png';

/**
 * Projects Component
 * Full-screen section (100vh) displaying both projects side-by-side horizontally.
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
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section 
            id="projects" 
            className="relative w-full h-screen max-h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-12 select-none"
        >
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center my-auto">
                {/* SECTION HEADER */}
                <motion.div 
                    className="mb-6 md:mb-8 text-center"
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white m-0">
                        Latest <span className="hollow-text text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}>Projects</span>
                    </h2>
                </motion.div>

                {/* HORIZONTAL PROJECTS GRID (Side by Side) */}
                <motion.div 
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch"
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
                            className="bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-6 backdrop-blur-md flex flex-col justify-between hover:border-white/30 transition-colors duration-300 shadow-xl overflow-hidden"
                        >
                            {/* Project Visual Image (Clickable Link) */}
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-black mb-4 block group cursor-pointer border border-white/5"
                                aria-label={`Open ${project.title}`}
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                            </a>

                            {/* Project Meta & Details */}
                            <div className="flex flex-col flex-1 justify-between">
                                <div>
                                    <span className="text-[11px] sm:text-xs font-bold text-violet-400 uppercase tracking-widest block mb-1">
                                        {project.category}
                                    </span>
                                    
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs sm:text-sm font-semibold text-zinc-500">
                                            {project.year}
                                        </span>
                                    </div>

                                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.techStack.map((tech, i) => (
                                            <span 
                                                key={i} 
                                                className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-zinc-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Action Links */}
                                    <div className="flex items-center gap-3">
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="px-4 py-2 bg-white text-black font-semibold rounded-full text-xs sm:text-sm hover:bg-zinc-200 transition-colors duration-200"
                                        >
                                            View Project
                                        </a>
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-colors duration-200" 
                                            aria-label="GitHub Repo"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
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
