import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="bg-glow"></div>
            <div className="hero-content">
                <h1>Building Digital <span className="highlight">Experiences</span>.</h1>
                <p>I'm a passionate developer creating modern, responsive, and user-friendly web applications.</p>
                <a href="#projects" className="cta-button">View My Work</a>
            </div>
        </section>
    );
};

export default Hero;
