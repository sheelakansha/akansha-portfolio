import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-grid">
                <div className="about-text">
                    <p>Hello! I'm Akansha, a 3rd-year student at Netaji Subhas University of Technology (NSUT). I enjoy turning complex problems into simple, beautiful, and intuitive designs.</p>
                    <p>When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.</p>
                    <div className="skills-tags">
                        <span className="skill-tag">HTML5</span>
                        <span class="skill-tag">CSS3</span>
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">React</span>
                        <span class="skill-tag">Node.js</span>
                        <span class="skill-tag">UI/UX Design</span>
                    </div>
                </div>
                <div className="about-image" style={{ background: 'transparent', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/profile.png" alt="Akansha" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '20px', objectFit: 'cover' }} />
                </div>
            </div>
        </section>
    );
};

export default About;
