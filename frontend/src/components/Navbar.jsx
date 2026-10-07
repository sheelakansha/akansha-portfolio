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
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent border-none px-12 py-12 md:px-28 md:py-20 lg:px-36 lg:py-24 pointer-events-auto">
            <div className="w-full flex items-center justify-between md:justify-end">
                {/* MOBILE HAMBURGER BUTTON */}
                <button 
                    onClick={toggleMenu}
                    className="md:hidden text-white/80 hover:text-white text-2xl focus:outline-none z-50"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* TOP RIGHT CORNER: NAVIGATION LINKS (Desktop: Equal Spacing on Right) */}
                <nav className={`
                    fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:static md:bg-transparent md:flex md:flex-row md:items-center md:justify-end md:gap-8 lg:gap-10 md:translate-x-0 md:h-auto md:w-auto ml-auto
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
                            className="text-sm font-normal text-white/70 hover:text-white transition-colors duration-300 tracking-wide whitespace-nowrap"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
