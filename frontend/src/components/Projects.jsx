import React from 'react';
import { motion } from 'framer-motion';
import o2SentinelImg from '../assets/o2-sentinel.png';
import aayulinkImg from '../assets/aayulink.png';

/**
 * Projects Component
 * Full-screen section (100vh) displaying two distinct horizontal project boxes side-by-side:
 *  - Left Box: O2 Sentinel
 *  - Right Box: AayuLink
 *  - Image on top, Description & details below
 */
const Projects = () => {
    const o2Sentinel = {
        title: "O2 Sentinel",
        category: "Real-Time Oxygen Monitoring & Forecasting Dashboard",
        year: "2026",
        description: "A full-stack system that tracks oxygen levels from live sensors and predicts them 5 and 10 minutes ahead with a tactical HUD interface.",
        techStack: ["React", "TypeScript", "Recharts", "Node.js", "Python"],
        image: o2SentinelImg,
        link: "https://o2-monitoring.vercel.app/",
        github: "https://github.com/sheelakansha"
    };

    const aayuLink = {
        title: "AayuLink",
        category: "HealthTech • AI Diagnostic Identity",
        year: "2025",
        description: "Digital medical identity system with real-time pathogen tracing. Integrated Google Gemini AI for diagnostic summarization, reducing interpretation time by 85%.",
        techStack: ["ReactJS", "MongoDB", "Cloudinary", "Gemini API"],
        image: aayulinkImg,
        link: "https://sih-2025-aayulink.vercel.app/",
        github: "https://github.com/sheelakansha"
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
            style={{ backgroundColor: '#000000', color: '#ffffff' }}
        >
            <div className="w-full max-w-6xl mx-auto flex flex-col items-start justify-center my-auto">
                {/* SECTION HEADER: LATEST PROJECTS (Left-aligned, 60px bold uppercase) */}
                <motion.div 
                    className="w-full mb-4 md:mb-6 text-left"
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 
                        className="text-[38px] sm:text-[48px] md:text-[60px] font-bold uppercase tracking-tight text-white text-left m-0 p-0"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: '60px', fontWeight: 700, textTransform: 'uppercase', color: '#ffffff' }}
                    >
                        LATEST PROJECTS
                    </h2>
                </motion.div>

                {/* TWO HORIZONTAL PROJECT BOXES (Side by Side Grid) */}
                <div 
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
                    style={{ display: 'grid', gap: '24px' }}
                >
                    {/* LEFT BOX: O2 SENTINEL */}
                    <motion.div 
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 220, damping: 20 }}
                        className="bg-zinc-900/90 border border-white/20 rounded-2xl p-5 md:p-6 backdrop-blur-md flex flex-col justify-between hover:border-white/50 transition-colors duration-300 shadow-2xl overflow-hidden"
                        style={{ background: 'rgba(24, 24, 27, 0.9)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '16px' }}
                    >
                        {/* Image at Top */}
                        <a 
                            href={o2Sentinel.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full h-[150px] sm:h-[170px] rounded-xl overflow-hidden bg-black mb-4 block group cursor-pointer border border-white/10 flex items-center justify-center"
                            aria-label={`Open ${o2Sentinel.title}`}
                        >
                            <img 
                                src={o2Sentinel.image} 
                                alt={o2Sentinel.title} 
                                className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                        </a>

                        {/* Description Below Image */}
                        <div className="flex flex-col flex-1 justify-between text-left">
                            <div>
                                <span className="text-[11px] font-bold text-violet-400 uppercase tracking-widest block mb-1">
                                    {o2Sentinel.category}
                                </span>
                                
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                                        {o2Sentinel.title}
                                    </h3>
                                    <span className="text-xs font-semibold text-zinc-400">
                                        {o2Sentinel.year}
                                    </span>
                                </div>

                                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                                    {o2Sentinel.description}
                                </p>
                            </div>

                            <div>
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {o2Sentinel.techStack.map((tech, i) => (
                                        <span 
                                            key={i} 
                                            className="px-2.5 py-0.5 bg-white/10 border border-white/15 rounded-full text-[11px] text-zinc-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3">
                                    <a 
                                        href={o2Sentinel.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="px-4 py-1.5 bg-white text-black font-semibold rounded-full text-xs hover:bg-zinc-200 transition-colors duration-200"
                                    >
                                        View Project
                                    </a>
                                    <a 
                                        href={o2Sentinel.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-200" 
                                        aria-label="GitHub Repo"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT BOX: AAYULINK */}
                    <motion.div 
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 220, damping: 20 }}
                        className="bg-zinc-900/90 border border-white/20 rounded-2xl p-5 md:p-6 backdrop-blur-md flex flex-col justify-between hover:border-white/50 transition-colors duration-300 shadow-2xl overflow-hidden"
                        style={{ background: 'rgba(24, 24, 27, 0.9)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '16px' }}
                    >
                        {/* Image at Top */}
                        <a 
                            href={aayuLink.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full h-[150px] sm:h-[170px] rounded-xl overflow-hidden bg-black mb-4 block group cursor-pointer border border-white/10 flex items-center justify-center"
                            aria-label={`Open ${aayuLink.title}`}
                        >
                            <img 
                                src={aayuLink.image} 
                                alt={aayuLink.title} 
                                className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                        </a>

                        {/* Description Below Image */}
                        <div className="flex flex-col flex-1 justify-between text-left">
                            <div>
                                <span className="text-[11px] font-bold text-violet-400 uppercase tracking-widest block mb-1">
                                    {aayuLink.category}
                                </span>
                                
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                                        {aayuLink.title}
                                    </h3>
                                    <span className="text-xs font-semibold text-zinc-400">
                                        {aayuLink.year}
                                    </span>
                                </div>

                                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                                    {aayuLink.description}
                                </p>
                            </div>

                            <div>
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {aayuLink.techStack.map((tech, i) => (
                                        <span 
                                            key={i} 
                                            className="px-2.5 py-0.5 bg-white/10 border border-white/15 rounded-full text-[11px] text-zinc-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3">
                                    <a 
                                        href={aayuLink.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="px-4 py-1.5 bg-white text-black font-semibold rounded-full text-xs hover:bg-zinc-200 transition-colors duration-200"
                                    >
                                        View Project
                                    </a>
                                    <a 
                                        href={aayuLink.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-200" 
                                        aria-label="GitHub Repo"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
