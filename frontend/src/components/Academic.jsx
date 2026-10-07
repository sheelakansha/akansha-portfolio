import React from 'react';

const Academic = () => {
    const experiences = [
        {
            role: "SUMMER INTERN",
            institution: "DRDO CFEES",
            period: "June 2026 – July 2026",
            description: [
                "Built O2 Sentinel, a real-time oxygen monitoring and forecasting dashboard."
            ]
        },
        {
            role: "Volunteer / Intern (Certificate)",
            institution: "NANHI KASHTIYAN (NGO)",
            location: "New Delhi (onsite)",
            period: "May 2024 – June 2024",
            description: [
                "Spearheaded educational and healthcare initiatives like the Smart Girl Program impacting 11,000+ participants, and deployed digital tracking systems that facilitated 123 student placements."
            ]
        }
    ];

    const drdo = experiences[0];
    const nanhi = experiences[1];

    return (
        <section id="experience" className="academic">
            <h2 className="section-title">Experience</h2>
            <div className="experience-container">
                {/* Left Side - DRDO CFEES */}
                <div className="experience-card left">
                    <div className="experience-header">
                        <h3>{drdo.role}</h3>
                        <span className="experience-period">{drdo.period}</span>
                    </div>
                    <h4 className="experience-institution">
                        {drdo.institution} {drdo.location && <span className="experience-location">| {drdo.location}</span>}
                    </h4>
                    <div className="experience-description">
                        <ul>
                            {drdo.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="experience-divider"></div>

                {/* Right Side - NANHI KASHTIYAN */}
                <div className="experience-card right">
                    <div className="experience-header">
                        <h3>{nanhi.role}</h3>
                        <span className="experience-period">{nanhi.period}</span>
                    </div>
                    <h4 className="experience-institution">
                        {nanhi.institution} {nanhi.location && <span className="experience-location">| {nanhi.location}</span>}
                    </h4>
                    <div className="experience-description">
                        <ul>
                            {nanhi.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Academic;

