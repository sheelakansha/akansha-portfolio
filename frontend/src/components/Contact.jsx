import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="section-title">Get In Touch</h2>
            <p>Currently open for freelance projects and new opportunities.</p>
            <div className="contact-details" style={{ marginBottom: '2rem', color: '#ccc' }}>
                <p>Email: <a href="mailto:akanshasheel@gmail.com" style={{ color: 'var(--accent-color)' }}>akanshasheel@gmail.com</a></p>
                <p>Phone: <span style={{ color: 'var(--accent-color)' }}>+91 9582006390</span></p>
            </div>
            <a href="mailto:akanshasheel@gmail.com" className="cta-button">Lets connect!</a>


        </section>
    );
};

export default Contact;
