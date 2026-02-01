import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "AayuLink",
            description: "Your comprehensive health ecosystem platform. A solution for integrated healthcare services.",
            bgColor: "#2E7D32", // Green for health
            link: "https://sih-2025-aayulink.vercel.app/"
        },
        {
            title: "Project Two",
            description: "An innovative solution for real-time data visualization using D3.js and Socket.io.",
            bgColor: "#444",
            link: "#"
        },
        {
            title: "Project Three",
            description: "Maintained a high-traffic e-commerce platform with a focus on conversion optimization.",
            bgColor: "#222",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="projects">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div style={{ height: '150px', background: project.bgColor }}></div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project →</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
