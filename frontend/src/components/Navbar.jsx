import React, { useState } from 'react';

/**
 * Navbar Component - Subtle, transparent top bar.
 * Non-intrusive 70% opacity white text with 100% white hover effects.
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent border-none px-6 py-5 md:px-12">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo - Small, clean, regular weight */}
                <a 
                    href="#home" 
                    className="text-xs sm:text-sm font-normal tracking-[0.2em] text-white/80 uppercase hover:text-white transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    AKANSHA
                </a>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMenu}
                    className="md:hidden text-white/70 hover:text-white text-xl focus:outline-none z-50"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Navigation Links */}
                <nav className={`
                    fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:static md:bg-transparent md:flex-row md:gap-8 md:translate-x-0
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
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
