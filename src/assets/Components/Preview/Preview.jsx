// src/assets/Components/Preview/Preview.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import Toast from '../Toast/Toast';
import './Preview.css';

const Preview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const previewRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const { name, Template, templateName, function: selectedFunction } = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleShare = async () => {
    if (!previewRef.current) return;

    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        logging: false,
        useCORS: true
      });

      canvas.toBlob(async (blob) => {
        if (!blob) return;

        const fileName = `${selectedFunction?.name?.toLowerCase().replace(/\s+/g, '-') || 'celebration'}-wish.png`;

        // Download the image first
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);

        // Then try to share via WhatsApp
        const message = `${selectedFunction?.emoji || '🎊'} Happy ${selectedFunction?.name || 'Celebration'}! ${selectedFunction?.emoji || '🎊'}\n\n${name ? `Dear ${name}, ` : ''}May this ${selectedFunction?.name?.toLowerCase() || 'occasion'} bring you joy and success!\n\nI've created a special ${selectedFunction?.name?.toLowerCase() || 'celebration'} wish for you! Please check your downloads folder for the image and attach it here. ✨`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        setToastMessage('Image downloaded! Opening WhatsApp...');
        setShowToast(true);
      });
    } catch (error) {
      console.error('Error sharing:', error);
      setToastMessage('Error sharing image. Please try again.');
      setShowToast(true);
    }
  };

  const handleInstagramShare = async () => {
    if (!previewRef.current) return;

    try {
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        useCORS: true
      });

      canvas.toBlob(async (blob) => {
        if (!blob) return;

        const fileName = `${selectedFunction?.name?.toLowerCase().replace(/\s+/g, '-') || 'celebration'}-wish.png`;

        // Download the image first
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);

        setToastMessage('Image downloaded! Now you can share it on Instagram Stories or Posts.');
        setShowToast(true);
      });
    } catch (error) {
      console.error('Error sharing to Instagram:', error);
      setToastMessage('Error preparing image for Instagram. Please try again.');
      setShowToast(true);
    }
  };

  const handleSaveToGallery = async () => {
    if (!previewRef.current) return;

    try {
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        useCORS: true
      });

      canvas.toBlob(async (blob) => {
        if (!blob) return;

        const fileName = `${selectedFunction?.name?.toLowerCase().replace(/\s+/g, '-') || 'celebration'}-wish.png`;

        // Download the image
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);

        setToastMessage('Image saved to gallery/downloads!');
        setShowToast(true);
      });
    } catch (error) {
      console.error('Error saving image:', error);
      setToastMessage('Error saving image. Please try again.');
      setShowToast(true);
    }
  };

  if (!name || !Template) {
    navigate('/templates', { state: { name } });
    return null;
  }

  return (
    <div className={`preview-overlay ${isVisible ? 'visible' : ''}`}>
      <div className="preview-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="preview-header">
          <h2 className="preview-title">Your Festival Wish!</h2>
          <p className="preview-subtitle">Share your beautiful creation</p>
        </div>

        <div className="preview-content">
          <div className="template-preview" ref={previewRef}>
            <Template name={name} function={selectedFunction} />
          </div>

          <div className="share-section">
            <button onClick={handleShare} className="share-button whatsapp-button">
              📱 Share on WhatsApp
            </button>
            <button onClick={handleInstagramShare} className="share-button instagram-button">
              📷 Share on Instagram
            </button>
            <button onClick={handleSaveToGallery} className="share-button save-button">
              💾 Save to Gallery
            </button>
          </div>
        </div>
      </div>
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default Preview;