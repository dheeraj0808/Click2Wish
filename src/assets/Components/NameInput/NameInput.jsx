import React, { useState, useEffect } from 'react';
import './NameInput.css';

const NameInput = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && !isSubmitting) {
      setIsSubmitting(true);
      // Add a small delay for the animation
      setTimeout(() => {
        onSubmit(name.trim());
      }, 500);
    }
  };

  return (
    <div className={`name-input-overlay ${isVisible ? 'visible' : ''}`}>
      <div className="name-input-container">
        <div className="fireworks">
          <div className="firework"></div>
          <div className="firework"></div>
          <div className="firework"></div>
        </div>

        <h2 className="welcome-text">Shhh… a 2026 surprise awaits</h2>
        <p className="subtitle">Enter your name to continue</p>

        <form onSubmit={handleSubmit} className="name-input-form">
          <div className="input-wrapper">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type your name here..."
              className="name-input"
              required
              autoFocus
              maxLength={30}
            />
            <div className="input-underline"></div>
          </div>

          <button
            type="submit"
            className={`submit-button ${name.trim() ? 'active' : ''} ${isSubmitting ? 'submitting' : ''}`}
            disabled={!name.trim() || isSubmitting}
          >
            {isSubmitting ? (
              <span className="button-loader"></span>
            ) : (
              <>
                <span className="button-text">Start Celebration</span>
                <span className="button-icon">🎉</span>
              </>
            )}
          </button>
        </form>

        <div className="hint">Press Enter to submit</div>
      </div>
    </div>
  );
};

export default NameInput;