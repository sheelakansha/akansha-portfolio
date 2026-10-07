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
                {/* 1. NAME "Akansha" (Font: Arsenic, Size: 90.6px) */}
                <motion.h1
                    variants={textVariants}
                    className="relative z-20 font-normal text-white leading-[0.85] text-center select-none tracking-tight"
                    style={{ 
                        fontFamily: '"Arsenic", "Bodoni Moda", "Cormorant Garamond", serif', 
                        fontSize: 'clamp(42px, 6.5vw, 90.6px)',
                        fontWeight: 400 
                    }}
                >
                    Akansha
                </motion.h1>

                {/* 2. B&W PHOTO (Medium size photo below Akansha) */}
                <motion.div
                    variants={photoVariants}
                    whileHover={{ scale: 1.02, rotate: 1.5 }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    className="relative z-10 -mt-5 sm:-mt-7 md:-mt-9 -mb-8 sm:-mb-10 md:-mb-12 cursor-pointer flex justify-center"
                >
                    <div className="w-[260px] sm:w-[340px] md:w-[380px] lg:w-[420px] aspect-[4/3] overflow-hidden bg-black rounded-none border-0 shadow-none">
                        <img
                            src={profilePhoto}
                            alt="Akansha"
                            className="w-full h-full object-cover grayscale contrast-[1.08] rounded-none pointer-events-none block"
                        />
                    </div>
                </motion.div>

                {/* 3. THE WORD "PORTFOLIO" (Font: Poppins, Size: 110px, Bold, Uppercase) */}
                <motion.div
                    variants={textVariants}
                    className="relative z-0 w-full text-center"
                >
                    <h2 
                        className="font-bold text-white uppercase tracking-[0.03em] leading-[0.88] text-center select-none"
                        style={{ 
                            fontFamily: '"Poppins", sans-serif', 
                            fontSize: 'clamp(48px, 8.2vw, 110px)',
                            fontWeight: 700 
                        }}
                    >
                        PORTFOLIO
                    </h2>
                </motion.div>

                {/* 4. SUBTITLE (Font: TT Commons Pro, Size: 18.2px) */}
                <motion.p
                    variants={textVariants}
                    className="mt-5 sm:mt-6 font-normal text-white tracking-wide text-center"
                    style={{ 
                        fontFamily: '"TT Commons Pro", "TT Commons", "Inter", sans-serif',
                        fontSize: 'clamp(14px, 1.4vw, 18.2px)'
                    }}
                >
                    Product Designer &amp; Developer
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Hero;
