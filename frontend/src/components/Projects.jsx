import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "AayuLink",
            category: "HealthTech • AI",
            year: "2025",
            description: "Digital medical identity system with real-time pathogen tracing. Integrated Google Gemini AI for diagnostic summarization, reducing interpretation time by 85%.",
            techStack: ["ReactJS", "MongoDB", "Cloudinary", "Gemini API"],
            imageColor: "radial-gradient(circle at center, #2E7D32 0%, #050505 70%)",
            link: "https://sih-2025-aayulink.vercel.app/",
            github: "#"
        },
        {
            title: "Project Two",
            category: "Data Visualization",
            year: "2024",
            description: "An innovative solution for real-time data visualization using D3.js and Socket.io. Handles massive data streams with sub-second latency updates.",
            techStack: ["React", "D3.js", "Node.js", "Socket.io"],
            imageColor: "radial-gradient(circle at center, #444 0%, #050505 70%)",
            link: "#",
            github: "#"
        },
        {
            title: "Project Three",
            category: "E-Commerce",
            year: "2023",
            description: "High-traffic e-commerce platform focused on conversion optimization. Implements advanced caching and predictive loading for seamless UX.",
            techStack: ["Next.js", "Stripe", "Redis", "Supabase"],
            imageColor: "radial-gradient(circle at center, #222 0%, #050505 70%)",
            link: "#",
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
                    <div key={index} className="featured-project">
                        <div className="project-visual">
                            <div className="visual-inner" style={{ background: project.imageColor }}>
                                {/* Placeholder for actual image - using text/logo for now if needed, or just the gradient */}
                                <h3 style={{ fontSize: '3rem', opacity: 0.1 }}>{project.title}</h3>
                            </div>
                        </div>

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
                ))}
            </div>
        </section>
    );
};

export default Projects;
