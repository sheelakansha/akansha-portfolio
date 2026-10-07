import React, { useState } from 'react';

/**
 * Navbar Component
 *  - Top-Left Corner: AKANSHA Logo
 *  - Top-Right Corner: Section Navigation Links (Home, About, Projects, Experience, Contact)
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent border-none px-6 py-6 md:px-12 pointer-events-auto">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                {/* TOP LEFT CORNER: AKANSHA LOGO */}
                <a 
                    href="#home" 
                    className="text-sm sm:text-base font-medium tracking-[0.2em] text-white uppercase hover:text-white/80 transition-colors duration-300 z-50"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    AKANSHA
                </a>

                {/* MOBILE HAMBURGER BUTTON */}
                <button 
                    onClick={toggleMenu}
                    className="md:hidden text-white/80 hover:text-white text-2xl focus:outline-none z-50"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* TOP RIGHT CORNER: NAVIGATION LINKS (Desktop: Flex Row on Right) */}
                <div className={`
                    fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:static md:bg-transparent md:flex md:flex-row md:items-center md:gap-8 md:translate-x-0 md:h-auto md:w-auto
                    ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
                `}>
                    {[
                        { name: 'Home', href: '#home' },
                        { name: 'About', href: '#about' },
                        { name: 'Projects', href: '#projects' },
                        { name: 'Experience', href: '#experience' },
                        { name: 'Contact', href: '#contact' },
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                            className="text-sm font-normal text-white/70 hover:text-white transition-colors duration-300 tracking-wide"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
