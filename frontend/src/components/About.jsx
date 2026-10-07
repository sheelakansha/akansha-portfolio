import React from 'react';
import profileImg from '../assets/profile.jpg';

const About = () => {
    return (
        <section id="about" className="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-grid">
                <div className="about-text">
                    <p>Hi, I'm Akansha, a developer who loves designing websites and digital products. I turn complex information into simple, beautiful, and intuitive interfaces, and I build what I design.</p>
                    <p>When I'm not designing or coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.</p>
                    <div className="skills-tags">
                        <span className="skill-tag">UI/UX Design</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">HTML5</span>
                        <span className="skill-tag">CSS3</span>
                        <span className="skill-tag">Node.js</span>
                    </div>
                </div>
                <div className="about-image" style={{ background: 'transparent', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={profileImg} alt="Akansha" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '20px', objectFit: 'cover' }} />
                </div>
            </div>
        </section>
    );
};

export default About;
