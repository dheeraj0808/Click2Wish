// src/assets/Components/Templates/TemplatesList.jsx
import React from 'react';

// Template 1 - Fireworks Theme
export const Template1 = ({ name, function: func }) => (
    <div className="template-1">
        <div className="template-content">
            <h1>{func?.emoji || '🎊'} Happy {func?.name || 'Celebration'}! {func?.emoji || '🎊'}</h1>
            <h2>Dear {name || 'Friend'},</h2>
            <p>May this {func?.name?.toLowerCase() || 'occasion'} bring you endless joy, success, and happiness. Wishing you a {func?.name?.toLowerCase() || 'celebration'} filled with love, laughter, and wonderful memories!</p>
            <div className="fireworks">
                <div className="firework"></div>
                <div className="firework"></div>
            </div>
        </div>
    </div>
);

// Template 2 - Winter Wonderland
export const Template2 = ({ name, function: func }) => (
    <div className="template-2">
        <div className="template-content">
            <h1>{func?.emoji || '🎊'} {func?.name || 'Celebration'} Wishes</h1>
            <h2>Hello {name || 'Friend'},</h2>
            <p>May this {func?.name?.toLowerCase() || 'occasion'} fill your heart with warmth and your days with happiness. Happy {func?.name || 'Celebration'}!</p>
            <div className="snowflakes">❄️ ❅ ❆ ❄️</div>
        </div>
    </div>
);

// Template 3 - Golden Celebration
export const Template3 = ({ name, function: func }) => (
    <div className="template-3">
        <div className="template-content">
            <h1>{func?.emoji || '🎊'} Golden {func?.name || 'Celebration'}</h1>
            <h2>Dear {name || 'Friend'},</h2>
            <p>May your {func?.name?.toLowerCase() || 'occasion'} be filled with golden moments, sparkling joy, and shining success. Wishing you a prosperous {func?.name?.toLowerCase() || 'celebration'}!</p>
            <div className="sparkles">✨ ✨ ✨</div>
        </div>
    </div>
);

// Template 4 - Midnight Celebration
export const Template4 = ({ name, function: func }) => (
    <div className="template-4">
        <div className="template-content">
            <h1>{func?.emoji || '🎊'} {func?.name || 'Celebration'} Magic</h1>
            <h2>Hello {name || 'Friend'},</h2>
            <p>May all your dreams take flight this {func?.name?.toLowerCase() || 'occasion'}. Wishing you a magical and memorable {func?.name || 'Celebration'}!</p>
            <div className="clock">🕛</div>
        </div>
    </div>
);

// Template 5 - Confetti Party
export const Template5 = ({ name, function: func }) => (
    <div className="template-5">
        <div className="template-content">
            <h1>{func?.emoji || '🎊'} {func?.name || 'Celebration'} Time!</h1>
            <h2>Hey {name || 'Friend'},</h2>
            <p>Let's celebrate this {func?.name?.toLowerCase() || 'occasion'}! May your {func?.name?.toLowerCase() || 'celebration'} be as colorful and joyful as confetti in the sky!</p>
            <div className="confetti">🎊 🎉 🎊</div>
        </div>
    </div>
);

// Template 6 - Starry Night
export const Template6 = ({ name, function: func }) => (
    <div className="template-6">
        <div className="template-content">
            <h1>{func?.emoji || '🎊'} Starry {func?.name || 'Celebration'}</h1>
            <h2>Dear {name || 'Friend'},</h2>
            <p>May your {func?.name?.toLowerCase() || 'occasion'} shine as bright as the stars. Wishing you a stellar {func?.name?.toLowerCase() || 'celebration'} filled with endless possibilities!</p>
            <div className="stars">⭐ ✨ 🌟</div>
        </div>
    </div>
);

// Template 7 - Balloon Celebration
export const Template7 = ({ name, function: func }) => (
    <div className="template-7">
        <div className="template-content">
            <h1>{func?.emoji || '🎊'} Let's Celebrate!</h1>
            <h2>Hello {name || 'Friend'},</h2>
            <p>Sending you a sky full of good wishes for this {func?.name?.toLowerCase() || 'occasion'}. May all your dreams soar high like these balloons!</p>
            <div className="balloons">🎈 🎈 🎈</div>
        </div>
    </div>
);

// Template 8 - Champagne Toast
export const Template8 = ({ name, function: func }) => (
    <div className="template-8">
        <div className="template-content">
            <h1>{func?.emoji || '🎊'} Cheers to {func?.name || 'Celebration'}!</h1>
            <h2>Dear {name || 'Friend'},</h2>
            <p>Here's to new adventures, new memories, and new successes. Wishing you a {func?.name?.toLowerCase() || 'occasion'} of happiness and good health!</p>
            <div className="toast">🥂</div>
        </div>
    </div>
);

// Template 9 - Polaroid Memories
export const Template9 = ({ name, function: func }) => (
    <div className="template-9">
        <div className="template-content">
            <h1>{func?.emoji || '🎊'} {func?.name || 'Celebration'} Memories</h1>
            <h2>Hello {name || 'Friend'},</h2>
            <p>May this {func?.name?.toLowerCase() || 'occasion'} be filled with moments worth capturing. Wishing you a {func?.name?.toLowerCase() || 'celebration'} of beautiful memories!</p>
            <div className="polaroid">📸</div>
        </div>
    </div>
);

// Template 10 - Countdown Theme
export const Template10 = ({ name, function: func }) => (
    <div className="template-10">
        <div className="template-content">
            <h1>{func?.emoji || '🎊'} {func?.name || 'Celebration'} Countdown</h1>
            <h2>Dear {name || 'Friend'},</h2>
            <p>3... 2... 1... Happy {func?.name || 'Celebration'}! May this countdown be the start of your best {func?.name?.toLowerCase() || 'occasion'} yet!</p>
            <div className="countdown">3... 2... 1...</div>
        </div>
    </div>
);

// Export all templates
export const templates = [
    { id: 1, name: 'Fireworks', component: Template1 },
    { id: 2, name: 'Winter Wonderland', component: Template2 },
    { id: 3, name: 'Golden Wishes', component: Template3 },
    { id: 4, name: 'Midnight Magic', component: Template4 },
    { id: 5, name: 'Confetti Party', component: Template5 },
    { id: 6, name: 'Starry Night', component: Template6 },
    { id: 7, name: 'Balloon Celebration', component: Template7 },
    { id: 8, name: 'Champagne Toast', component: Template8 },
    { id: 9, name: 'Polaroid Memories', component: Template9 },
    { id: 10, name: 'Countdown', component: Template10 },
];

export default templates;