import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

// Image variable for easy swapping
const mainPhoto = profileImg;

/**
 * About Component - Editorial, asymmetric white & black magazine/slide layout.
 * Fixed to exact screen height (100vh) without scrolling.
 */
const About = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const fadeInPhoto = {
        hidden: { opacity: 0, scale: 0.96 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section 
            id="about" 
            className="relative w-full h-screen max-h-screen bg-white text-black px-6 sm:px-12 md:px-16 lg:px-24 py-10 md:py-14 lg:py-16 overflow-hidden flex flex-col justify-between select-none"
            style={{ backgroundColor: '#ffffff' }}
        >
            {/* TOP HEADER & MAIN PHOTO ROW */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
                {/* 1. HEADING (Top Left - Light sans-serif, 2 lines) */}
                <motion.div 
                    className="flex-1 max-w-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <h2 
                        className="text-[clamp(2.5rem,4.8vw,4.8rem)] font-light text-black uppercase leading-[0.92] tracking-tight text-left m-0 p-0"
                        style={{ fontFamily: 'Inter, Poppins, sans-serif', fontWeight: 300 }}
                    >
                        About<br />Me
                    </h2>
                </motion.div>

                {/* 3. MAIN PHOTO (Top Centre-Right - 4:3 Landscape, B&W, sharp corners, no tilt) */}
                <motion.div 
                    className="w-full md:w-[30%] lg:w-[34%] max-w-[380px] lg:max-w-[420px] aspect-[4/3] bg-zinc-100 overflow-hidden rounded-none border-0 shadow-none"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInPhoto}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                >
                    <img 
                        src={mainPhoto} 
                        alt="Akansha" 
                        className="w-full h-full object-cover grayscale contrast-105 rounded-none pointer-events-none block" 
                    />
                </motion.div>

                {/* 2. SECTION NUMBER (Top Right) */}
                <motion.div 
                    className="hidden md:block text-black font-light text-base md:text-lg tracking-widest pt-2"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    02
                </motion.div>
            </div>

            {/* MIDDLE TEXT CONTAINER */}
            <div className="w-full flex flex-col md:flex-row justify-between items-end my-auto gap-8">
                {/* 4. TEXT PARAGRAPHS & SKILL TAGS (Middle-Left, Indented column ~380-420px wide) */}
                <motion.div 
                    className="w-full md:ml-[12%] lg:ml-[15%] max-w-[440px] flex flex-col gap-4 md:gap-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <p className="text-black text-sm sm:text-base md:text-[16px] font-normal leading-relaxed text-left m-0">
                        Hi, I'm Akansha, a developer who loves designing websites and digital products. I turn complex information into simple, beautiful, and intuitive interfaces, and I build what I design.
                    </p>

                    <p className="text-black text-sm sm:text-base md:text-[16px] font-normal leading-relaxed text-left m-0">
                        When I'm not designing or coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
                    </p>

                    {/* SKILL TAGS (Thin 1px black outline, sharp corners, hover inversion) */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {[
                            'UI/UX Design',
                            'React',
                            'JavaScript',
                            'HTML5',
                            'CSS3',
                            'Node.js',
                        ].map((tag) => (
                            <span 
                                key={tag}
                                className="px-2.5 py-1 border border-black bg-transparent text-black text-[11px] sm:text-xs uppercase tracking-wider font-medium rounded-none hover:bg-black hover:text-white transition-colors duration-200 cursor-default"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
