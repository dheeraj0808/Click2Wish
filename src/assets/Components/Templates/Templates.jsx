import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { templates } from './TemplatesList';
import Toast from '../Toast/Toast';
import './Templates.css';

const Templates = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name, function: selectedFunction } = location.state || {};

    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const previewRef = useRef(null);

    // Handle template selection
    const handleTemplateSelect = (template, e) => {
        if (e) e.stopPropagation();

        setSelectedTemplate(template);
        setShowModal(true);
    };

    const handleShare = async () => {
        if (!previewRef.current) return;

        try {
            const canvas = await html2canvas(previewRef.current, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff'
            });

            const image = canvas.toDataURL('image/png');
            const fileName = `new-year-wish-${name || 'friend'}.png`;

            // Download the image
            const link = document.createElement('a');
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Convert to blob for sharing
            canvas.toBlob(async (blob) => {
                if (navigator.share && navigator.canShare && blob) {
                    const file = new File([blob], fileName, { type: 'image/png' });
                    try {
                        await navigator.share({
                            title: `Happy ${selectedFunction?.name || 'Celebration'}!`,
                            text: `${selectedFunction?.emoji || '🎊'} Happy ${selectedFunction?.name || 'Celebration'}! ${selectedFunction?.emoji || '🎊'}\n\n${name ? `Dear ${name}, ` : ''}May this ${selectedFunction?.name?.toLowerCase() || 'occasion'} bring you joy and success!`,
                            files: [file]
                        });
                        setToastMessage('Shared successfully!');
                        setShowToast(true);
                    } catch (shareError) {
                        // Fallback to WhatsApp with instructions
                        openWhatsAppWithInstructions();
                    }
                } else {
                    // Fallback for browsers that don't support Web Share API
                    openWhatsAppWithInstructions();
                }
            });

        } catch (error) {
            console.error('Error sharing:', error);
            openWhatsAppWithInstructions();
        }
    };

    const openWhatsAppWithInstructions = () => {
        const message = `${selectedFunction?.emoji || '🎊'} Happy ${selectedFunction?.name || 'Celebration'}! ${selectedFunction?.emoji || '🎊'}\n\n${name ? `Dear ${name}, ` : ''}May this ${selectedFunction?.name?.toLowerCase() || 'occasion'} bring you joy and success!\n\nI've created a special ${selectedFunction?.name?.toLowerCase() || 'celebration'} wish for you! Please check your downloads folder for the image and attach it here. ✨`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        setToastMessage('Image downloaded! Please attach it manually in WhatsApp.');
        setShowToast(true);
    };

    // Redirect to home if no name or function is provided
    React.useEffect(() => {
        if (!name || !selectedFunction) {
            console.log('No name or function found, redirecting to function selection');
            navigate('/function-selection', { state: { name } });
        }
    }, [name, selectedFunction, navigate]);

    if (!name || !selectedFunction) {
        console.log('Rendering null because no name or function');
        return null;
    }

    const handleBack = () => {
        navigate('/function-selection', { state: { name } });
    };

    return (
        <div className="templates-container">
            <button className="back-btn" onClick={handleBack}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
            </button>
            <div className="templates-header">
                <h1>Choose Your Template</h1>
                <p>Hello, {name}! Select a beautiful template for your {selectedFunction?.name || 'celebration'} wish {selectedFunction?.emoji}</p>
            </div>

            <div className="templates-grid">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className="template-card"
                        onClick={(e) => handleTemplateSelect(template, e)}
                    >
                        <div className="template-preview">
                            {React.createElement(template.component, { name, function: selectedFunction })}
                            <div className="preview-overlay">
                                <span className="preview-text">Click to Preview</span>
                            </div>
                        </div>
                        <div className="template-footer">
                            <span className="template-name">{template.name}</span>
                            <button
                                className="select-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleTemplateSelect(template, e);
                                }}
                            >
                                <span className="button-text">Select & Share</span>
                                <span className="button-icon">🎉</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && selectedTemplate && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Preview: {selectedTemplate.name}</h2>
                        <div className="preview-content" ref={previewRef}>
                            {React.createElement(selectedTemplate.component, { name, function: selectedFunction })}
                        </div>
                        <div className="preview-actions">
                            <button onClick={() => setShowModal(false)} className="back-button">
                                Close
                            </button>
                            <button onClick={handleShare} className="share-button">
                                Share on WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Toast
                message={toastMessage}
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />
        </div>
    );
};

export default Templates;