import girl from '../pictures/girl.png';

const About = () => {
    return ( 
        <div className="about-page-unique-root">
            <div className="about-container">
                <div className="hero-section">
                    <div className="hero-image-wrapper">
                        <img src={girl} alt="Siddhi Parekh" className="hero-image" />
                        <div className="hero-glow"></div>
                    </div>
                    
                    <div className="hero-content">
                        <h4 className="hero-subtitle">The Visionary Behind InvestSavvy</h4>
                        <h1 className="hero-name">Siddhi Parekh</h1>
                        <div className="hero-divider"></div>
                        
                        <p className="hero-bio">
                            A driven innovator currently shaping the future of financial technology 
                            at <strong>VJTI, Mumbai</strong>. Combining technical prowess with 
                            elegant design to empower investors worldwide.
                        </p>

                        <div className="hero-details">
                            <div className="detail-item">
                                <span className="detail-label">Location</span>
                                <span className="detail-value">Mumbai, India</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Specialization</span>
                                <span className="detail-value">Full Stack Development</span>
                            </div>
                        </div>

                        <div className="hero-actions">
                            <a href="https://github.com/siddhip2004" target="_blank" rel="noreferrer" className="github-btn">
                                View GitHub Profile
                            </a>
                            <a href="mailto:shparekh25@gmail.com" className="email-link">
                                shparekh25@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;