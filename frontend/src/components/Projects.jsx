import React from 'react';
import o2SentinelImg from '../assets/o2-sentinel.png';
import aayulinkImg from '../assets/aayulink.png';

const Projects = () => {
    const projects = [
        {
            title: "O2 Sentinel",
            category: "Real-Time Oxygen Monitoring & Forecasting Dashboard",
            year: "2026",
            description: "A full-stack system that tracks oxygen levels from live sensors and predicts them 5 and 10 minutes ahead. I designed and built the dashboard with a tactical HUD look, so critical readings and status signals are clear at a glance.",
            techStack: ["React", "TypeScript", "Recharts", "Node.js", "Python"],
            image: o2SentinelImg,
            imageColor: "#000000",
            link: "https://o2-monitoring.vercel.app/",
            github: "#"
        },
        {
            title: "AayuLink",
            category: "HealthTech • AI",
            year: "2025",
            description: "Digital medical identity system with real-time pathogen tracing. Integrated Google Gemini AI for diagnostic summarization, reducing interpretation time by 85%.",
            techStack: ["ReactJS", "MongoDB", "Cloudinary", "Gemini API"],
            image: aayulinkImg,
            imageColor: "#ffffff",
            link: "https://sih-2025-aayulink.vercel.app/",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="section-header">
                <h2 className="section-title-large">
                    Latest <span className="hollow-text">Projects</span>
                </h2>
            </div>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <React.Fragment key={index}>
                        <div className="featured-project">
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-visual" 
                                aria-label={`View ${project.title}`}
                                style={{ display: 'block', cursor: 'pointer' }}
                            >
                                <div className="visual-inner" style={{ background: project.imageColor }}>
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000000' }} />
                                    ) : (
                                        <h3 style={{ fontSize: '3rem', opacity: 0.15, fontWeight: 800, letterSpacing: '2px' }}>{project.title}</h3>
                                    )}
                                </div>
                            </a>

                            <div className="project-content">
                                <div className="project-category">{project.category}</div>
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-year">{project.year}</span>
                                </div>

                                <p className="project-description">{project.description}</p>

                                <div className="tech-stack">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="tech-pill">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="cta-button" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                                        View Project
                                    </a>
                                    <a href={project.github} className="btn-icon" aria-label="GitHub Repo">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {index === 0 && <div className="projects-horizontal-divider"></div>}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;

