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
    const [customMessage, setCustomMessage] = useState('');
    const previewRef = useRef(null);

    // Handle template selection
    const handleTemplateSelect = (template, e) => {
        if (e) e.stopPropagation();

        setSelectedTemplate(template);
        setCustomMessage(template?.defaultMessage || '');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedTemplate(null);
        setCustomMessage('');
    };

    const getShareText = () => {
        const baseTitle = `${selectedFunction?.emoji || '🎊'} Happy ${selectedFunction?.name || 'Celebration'}! ${selectedFunction?.emoji || '🎊'}`;
        const edited = (customMessage || '').trim();
        const greeting = name ? `Dear ${name}, ` : '';
        const body = edited ? edited : `May this ${selectedFunction?.name?.toLowerCase() || 'occasion'} bring you joy and success!`;
        return `${baseTitle}\n\n${greeting}${body}`;
    };

    // Generate canvas from template
    const generateCanvas = async () => {
        if (!previewRef.current) return null;
        try {
            // Get the actual template element inside preview-content
            const templateElement = previewRef.current.querySelector('.template-inner') || previewRef.current;

            const canvas = await html2canvas(templateElement, {
                scale: 3,
                useCORS: true,
                allowTaint: true,
                backgroundColor: null,
                logging: false,
                width: templateElement.offsetWidth,
                height: templateElement.offsetHeight
            });
            return canvas;
        } catch (error) {
            console.error('Error generating canvas:', error);
            return null;
        }
    };

    // Download image
    const handleDownload = async () => {
        const canvas = await generateCanvas();
        if (!canvas) return;

        const fileName = `${selectedFunction?.name || 'wish'}-${name || 'friend'}.png`;
        const link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setToastMessage('Image downloaded successfully!');
        setShowToast(true);
    };

    // Share on WhatsApp with image
    const handleWhatsAppShare = async () => {
        const canvas = await generateCanvas();
        if (!canvas) return;

        const fileName = `${selectedFunction?.name || 'wish'}-${name || 'friend'}.png`;

        canvas.toBlob(async (blob) => {
            if (!blob) {
                setToastMessage('Error creating image. Please try again.');
                setShowToast(true);
                return;
            }

            const file = new File([blob], fileName, { type: 'image/png' });

            // Try Web Share API with files (works on mobile)
            if (navigator.share) {
                try {
                    // Check if we can share files
                    if (navigator.canShare && navigator.canShare({ files: [file] })) {
                        await navigator.share({
                            files: [file]
                        });
                        setToastMessage('Select WhatsApp to share!');
                        setShowToast(true);
                        return;
                    }
                } catch (err) {
                    if (err.name === 'AbortError') return;
                }
            }

            // Fallback: download + open WhatsApp
            fallbackWhatsAppShare(canvas);
        }, 'image/png');
    };

    const fallbackWhatsAppShare = (canvas) => {
        // Download the image first
        const fileName = `${selectedFunction?.name || 'wish'}-${name || 'friend'}.png`;
        const link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Open WhatsApp with text
        const message = `${getShareText()}\n\n✨ I've created a special wish for you! Check the downloaded image. ✨`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        setToastMessage('Image downloaded! Attach it in WhatsApp.');
        setShowToast(true);
    };

    // Share on Instagram
    const handleInstagramShare = async () => {
        const canvas = await generateCanvas();
        if (!canvas) return;

        const fileName = `${selectedFunction?.name || 'wish'}-${name || 'friend'}.png`;

        canvas.toBlob(async (blob) => {
            if (!blob) {
                setToastMessage('Error creating image. Please try again.');
                setShowToast(true);
                return;
            }

            const file = new File([blob], fileName, { type: 'image/png' });

            // Try Web Share API with files
            if (navigator.share) {
                try {
                    if (navigator.canShare && navigator.canShare({ files: [file] })) {
                        await navigator.share({
                            files: [file]
                        });
                        setToastMessage('Select Instagram to share!');
                        setShowToast(true);
                        return;
                    }
                } catch (err) {
                    if (err.name === 'AbortError') return;
                }
            }

            // Fallback
            fallbackInstagramShare(canvas);
        }, 'image/png');
    };

    const fallbackInstagramShare = (canvas) => {
        // Download the image
        const fileName = `${selectedFunction?.name || 'wish'}-${name || 'friend'}.png`;
        const link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setToastMessage('Image downloaded! Open Instagram and share from gallery.');
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
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={handleCloseModal} aria-label="Close">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <h2>{selectedTemplate.name}</h2>
                        <div className="message-editor">
                            <div className="message-label">Edit message</div>
                            <textarea
                                className="message-textarea"
                                value={customMessage}
                                onChange={(e) => setCustomMessage(e.target.value)}
                                maxLength={220}
                                placeholder="Write your wish message..."
                                rows={3}
                            />
                            <div className="message-hint">{customMessage.length}/220</div>
                        </div>
                        <div className="preview-content" ref={previewRef}>
                            {React.createElement(selectedTemplate.component, { name, function: selectedFunction, message: customMessage })}
                        </div>
                        <div className="preview-actions">
                            <button onClick={handleDownload} className="action-btn download-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download
                            </button>
                            <button onClick={handleWhatsAppShare} className="action-btn whatsapp-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp
                            </button>
                            <button onClick={handleInstagramShare} className="action-btn instagram-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                                Instagram
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