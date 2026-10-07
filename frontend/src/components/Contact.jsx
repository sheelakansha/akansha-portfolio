import React from 'react';
import { motion } from 'framer-motion';

/**
 * Contact Component - Minimal, editorial left-aligned contact section.
 * Fits within 100vh screen height (h-screen max-h-screen) without scrolling.
 */
const Contact = () => {
    return (
        <section 
            id="contact" 
            className="relative w-full h-screen max-h-screen bg-black text-white px-6 sm:px-12 md:px-16 lg:px-24 py-12 md:py-20 border-t border-white/10 select-none text-left flex flex-col justify-center items-center overflow-hidden"
        >
            <div className="w-full max-w-6xl mx-auto flex flex-col items-start justify-center my-auto">
                {/* HEADING: WORK WITH ME (Uppercase, 60px, left-aligned) */}
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[38px] sm:text-[48px] md:text-[60px] font-normal uppercase tracking-tight text-white text-left mb-6 p-0 border-none bg-transparent shadow-none"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '60px', fontWeight: 400, textTransform: 'uppercase' }}
                >
                    WORK WITH ME
                </motion.h2>

                {/* Sub-text */}
                <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-zinc-400 text-base sm:text-lg text-left max-w-xl mb-8"
                >
                    Currently open for freelance projects and new opportunities.
                </motion.p>

                {/* Contact details */}
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-3 text-left text-base sm:text-lg"
                >
                    <p className="text-zinc-300">
                        Email: <a href="mailto:akanshasheel@gmail.com" className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors">akanshasheel@gmail.com</a>
                    </p>
                    <p className="text-zinc-300">
                        Phone: <span className="text-white">+91 9582006390</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
