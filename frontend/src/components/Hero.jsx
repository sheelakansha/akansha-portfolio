import React from 'react';
import { motion } from 'framer-motion';

// Import existing profile photo from assets directory
import profilePhoto from '../assets/profile.jpg';

/**
 * Hero Component - Bold, minimal, editorial design portfolio hero.
 * Pure black background (#000000), strictly greyscale, zero gradients/accent colors.
 * Fits within 100vh at 1920x1080 without scrolling.
 * 
 * Layer Hierarchy:
 *  - Z-20: Delicate calligraphic display serif name "Akansha" (#FFFFFF)
 *  - Z-10: Clockwise tilted B&W photo (~4:3 landscape, 28-32% screen width, sharp corners)
 *  - Z-0:  Solid white uppercase "PORTFOLIO" (Inter, 400 weight, ~60-65% screen width)
 */
const Hero = () => {
    // Parent container variant for smooth staggered loading sequence
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.16,
                delayChildren: 0.08,
            },
        },
    };

    // Fade & subtle rise animation for text items
    const textVariants = {
        hidden: { opacity: 0, y: 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    // Entry animation for clockwise-tilted photo (3.5 degrees clockwise)
    const photoVariants = {
        hidden: { opacity: 0, scale: 0.94, rotate: 3.5, y: 16 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 3.5,
            y: 0,
            transition: {
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <section 
            id="home" 
            className="relative w-full h-screen max-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6 pt-16 pb-8 select-none"
        >
            <motion.div
                className="relative flex flex-col items-center justify-center w-full max-w-6xl mx-auto my-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* 1. NAME "Akansha" (Top layer z-20, solid white, elegant display serif) */}
                <motion.h1
                    variants={textVariants}
                    className="relative z-20 text-[clamp(3.5rem,7.8vw,8.5rem)] font-normal text-white leading-[0.88] text-center select-none tracking-tight"
                    style={{ fontFamily: '"Bodoni Moda", "Cormorant Garamond", serif', fontWeight: 400 }}
                >
                    Akansha
                </motion.h1>

                {/* 2. B&W PHOTO (Middle layer z-10, ~28-32% width, 3-5 deg clockwise tilt, sharp corners) */}
                <motion.div
                    variants={photoVariants}
                    whileHover={{ scale: 1.03, rotate: 1.5 }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    className="relative z-10 -mt-7 sm:-mt-10 md:-mt-12 lg:-mt-[52px] -mb-9 sm:-mb-13 md:-mb-16 lg:-mb-[64px] cursor-pointer flex justify-center"
                >
                    <div className="w-[280px] sm:w-[380px] md:w-[460px] lg:w-[540px] xl:w-[560px] aspect-[4/3] overflow-hidden bg-black rounded-none border-0 shadow-none">
                        <img
                            src={profilePhoto}
                            alt="Akansha"
                            className="w-full h-full object-cover grayscale contrast-[1.08] rounded-none pointer-events-none block"
                        />
                    </div>
                </motion.div>

                {/* 3. THE WORD "PORTFOLIO" (Bottom layer z-0, solid white Inter 400, ~60-65% screen width) */}
                <motion.div
                    variants={textVariants}
                    className="relative z-0 w-full text-center"
                >
                    <h2 
                        className="text-[clamp(3rem,10.2vw,10.8rem)] font-normal text-white uppercase tracking-[0.03em] leading-[0.88] text-center select-none"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                        PORTFOLIO
                    </h2>
                </motion.div>

                {/* 4. SUBTITLE (Pure white Inter regular, tight gap below PORTFOLIO) */}
                <motion.p
                    variants={textVariants}
                    className="mt-6 sm:mt-7 text-sm sm:text-base md:text-[17px] font-normal text-white tracking-wide text-center"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    Product Designer &amp; Developer
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Hero;
