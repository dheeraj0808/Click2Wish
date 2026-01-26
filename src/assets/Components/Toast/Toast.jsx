import React, { useState, useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="toast-overlay">
            <div className="toast-container">
                <div className="toast-icon">✅</div>
                <div className="toast-message">
                    <h4>Success!</h4>
                    <p>{message}</p>
                </div>
                <button className="toast-close" onClick={onClose}>
                    ×
                </button>
            </div>
        </div>
    );
};

export default Toast;
