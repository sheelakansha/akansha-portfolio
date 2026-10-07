import React from 'react';
import { motion } from 'framer-motion';

/**
 * Experience Component (Academic.jsx)
 * Full-screen section (100vh) displaying professional experience cards.
 * Background: #FFFFFF (White) | Text: #000000 (Black)
 */
const Academic = () => {
    const experiences = [
        {
            role: "SUMMER INTERN",
            institution: "DRDO CFEES",
            period: "June 2026 – July 2026",
            location: "",
            description: [
                "Built O2 Sentinel, a real-time oxygen monitoring and forecasting dashboard."
            ]
        },
        {
            role: "Volunteer / Intern (Certificate)",
            institution: "NANHI KASHTIYAN (NGO)",
            location: "New Delhi (onsite)",
            period: "May 2024 – June 2024",
            description: [
                "Spearheaded educational and healthcare initiatives like the Smart Girl Program impacting 11,000+ participants, and deployed digital tracking systems that facilitated 123 student placements."
            ]
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
            id="experience" 
            className="relative w-full h-screen max-h-screen bg-white text-black flex flex-col justify-center items-center overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24 py-10 md:py-16"
            style={{ backgroundColor: '#ffffff', color: '#000000' }}
        >
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center my-auto">
                {/* SECTION TITLE */}
                <motion.div 
                    className="mb-8 md:mb-12 text-center"
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black m-0"
                        style={{ color: '#000000' }}
                    >
                        Experience
                    </h2>
                </motion.div>

                {/* EXPERIENCE CONTAINER */}
                <motion.div 
                    className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-stretch"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* DRDO Card */}
                    <motion.div 
                        variants={cardVariants}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 240, damping: 20 }}
                        className="bg-zinc-50/80 border border-black/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-black/30 transition-colors duration-300 shadow-md"
                    >
                        <div>
                            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                <h3 
                                    className="text-lg sm:text-xl font-bold text-black tracking-wide"
                                    style={{ color: '#000000' }}
                                >
                                    {experiences[0].role}
                                </h3>
                                <span className="text-xs sm:text-sm italic font-medium text-zinc-600">
                                    {experiences[0].period}
                                </span>
                            </div>
                            <h4 className="text-sm sm:text-base font-semibold text-zinc-800 mb-4">
                                {experiences[0].institution}
                            </h4>
                            <ul className="list-disc list-inside text-xs sm:text-sm text-zinc-700 leading-relaxed space-y-2">
                                {experiences[0].description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Divider Line */}
                    <div className="hidden md:block w-[2px] bg-black/15 rounded-full self-stretch" />

                    {/* NANHI KASHTIYAN Card */}
                    <motion.div 
                        variants={cardVariants}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 240, damping: 20 }}
                        className="bg-zinc-50/80 border border-black/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-black/30 transition-colors duration-300 shadow-md"
                    >
                        <div>
                            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                <h3 
                                    className="text-lg sm:text-xl font-bold text-black tracking-wide"
                                    style={{ color: '#000000' }}
                                >
                                    {experiences[1].role}
                                </h3>
                                <span className="text-xs sm:text-sm italic font-medium text-zinc-600">
                                    {experiences[1].period}
                                </span>
                            </div>
                            <h4 className="text-sm sm:text-base font-semibold text-zinc-800 mb-4">
                                {experiences[1].institution} <span className="text-xs text-zinc-600 font-normal">| {experiences[1].location}</span>
                            </h4>
                            <ul className="list-disc list-inside text-xs sm:text-sm text-zinc-700 leading-relaxed space-y-2">
                                {experiences[1].description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Academic;
