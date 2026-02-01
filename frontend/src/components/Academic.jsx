import React from 'react';

const Academic = () => {
    const education = [
        {
            institution: "SHEFI",
            location: "Virtual",
            degree: "Season 14 Cohort Member",
            year: "June 2025 – September 2025",
            description: [
                "Selected as a SheFi Scholar for Season 14, a program empowers women in DeFi, Web3, and finance.",
                "Participating in weekly sessions on blockchain, digital finance, and leadership."
            ]
        },
        {
            institution: "NANHI KASHTIYAN (NGO)",
            location: "New Delhi (onsite)",
            degree: "Volunteer / Intern (Certificate)",
            year: "May 2024 – June 2024",
            description: [
                "Spearheaded educational and healthcare awareness initiatives, including organ donation, impacting 1,000+ participants.",
                "Directed the Smart Girl Program, empowering 10,000+ adolescent girls with essential life skills.",
                "Architected and deployed digital tracking systems & data analytics to measure program impact resulting in 123 students securing jobs or higher education placements."
            ]
        }
    ];

    return (
        <section id="academic" className="academic">
            <h2 className="section-title">Academic & Experience</h2>
            <div className="academic-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                {education.map((edu, index) => (
                    <div key={index} className="project-card" style={{ height: 'auto', minHeight: 'auto', width: '100%' }}>
                        <div className="project-info" style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
                                <h3 style={{ margin: 0 }}>{edu.degree}</h3>
                                <span style={{ fontStyle: 'italic', color: 'var(--accent-color)' }}>{edu.year}</span>
                            </div>

                            <h4 style={{ color: '#ccc', marginBottom: '0.5rem' }}>
                                {edu.institution} <span style={{ opacity: 0.7, fontSize: '0.9em', fontWeight: 'normal' }}>| {edu.location}</span>
                            </h4>

                            <div style={{ marginTop: '1rem', color: '#aaaaaa' }}>
                                {Array.isArray(edu.description) ? (
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {edu.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{edu.description}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Academic;
