import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handlePersonalizedClick = () => {
        navigate('/name-input');
    };

    const handleGeneralClick = () => {
        navigate('/function-selection');
    };

    return (
        <div className={`landing-overlay ${isVisible ? 'visible' : ''}`}>
            <div className="landing-container">
                <div className="fireworks">
                    <div className="firework"></div>
                    <div className="firework"></div>
                    <div className="firework"></div>
                    <div className="firework"></div>
                    <div className="firework"></div>
                </div>

                <div className="logo-section">
                    <h1 className="logo-text">Click2Wish</h1>
                    <p className="tagline">Create Beautiful Festival Wishes</p>
                </div>

                <div className="choice-section">
                    <h2 className="choice-title">How would you like to create your wish?</h2>

                    <div className="choice-cards">
                        <div
                            className="choice-card personalized"
                            onClick={handlePersonalizedClick}
                        >
                            <div className="card-icon">👤</div>
                            <h3 className="card-title">Personalized</h3>
                            <p className="card-description">
                                Create wishes with your name and personal touch
                            </p>
                            <div className="card-features">
                                <span className="feature">✨ Custom Name</span>
                                <span className="feature">🎨 Personal Messages</span>
                                <span className="feature">📱 Share with Friends</span>
                            </div>
                            <div className="card-arrow">→</div>
                        </div>

                        <div
                            className="choice-card general"
                            onClick={handleGeneralClick}
                        >
                            <div className="card-icon">🎊</div>
                            <h3 className="card-title">General</h3>
                            <p className="card-description">
                                Quick festival wishes for everyone
                            </p>
                            <div className="card-features">
                                <span className="feature">⚡ Quick & Easy</span>
                                <span className="feature">🎉 Universal Messages</span>
                                <span className="feature">📤 Instant Share</span>
                            </div>
                            <div className="card-arrow">→</div>
                        </div>
                    </div>
                </div>

                <div className="footer-info">
                    <p>50+ Indian Festivals & Celebrations</p>
                    <p>Beautiful Templates • Easy Sharing</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
