// src/assets/Components/Templates/TemplatesList.jsx
import React from 'react';

// Template 1 - Elegant Floral (Sage Green with floral accents)
export const Template1 = ({ name, function: func }) => (
    <div className="template-inner template-floral">
        <div className="corner-decor top-left">✿</div>
        <div className="corner-decor top-right">✿</div>
        <div className="template-content">
            <div className="elegant-divider">─── ❀ ───</div>
            <h1 className="template-title">Happy {func?.name || 'Celebration'}!</h1>
            <h2 className="template-greeting">Dear {name || 'Friend'},</h2>
            <p className="template-message">May this special day bring you joy, peace, and beautiful memories that last forever.</p>
            <div className="elegant-divider">─── ❀ ───</div>
            <span className="signature">With love & wishes</span>
        </div>
        <div className="corner-decor bottom-left">✿</div>
        <div className="corner-decor bottom-right">✿</div>
    </div>
);

// Template 2 - Royal Gold (Luxurious gold & maroon)
export const Template2 = ({ name, function: func }) => (
    <div className="template-inner template-royal">
        <div className="royal-border"></div>
        <div className="template-content">
            <div className="crown-icon">♛</div>
            <h1 className="template-title">{func?.name || 'Celebration'} Wishes</h1>
            <div className="gold-line"></div>
            <h2 className="template-greeting">To {name || 'Friend'},</h2>
            <p className="template-message">Wishing you a magnificent celebration filled with grandeur, joy, and prosperity.</p>
            <div className="gold-ornament">✦ ❖ ✦</div>
        </div>
    </div>
);

// Template 3 - Festive Balloons (Turquoise celebration)
export const Template3 = ({ name, function: func }) => (
    <div className="template-inner template-balloons">
        <div className="balloon-cluster">
            <span className="balloon b1">🎈</span>
            <span className="balloon b2">🎈</span>
            <span className="balloon b3">🎈</span>
            <span className="balloon b4">🎈</span>
            <span className="balloon b5">🎈</span>
        </div>
        <div className="template-content">
            <div className="banner-text">
                <span>✦</span> HAPPY <span>✦</span>
            </div>
            <h1 className="template-title">{func?.name || 'Celebration'}!</h1>
            <h2 className="template-greeting">{name || 'Friend'}</h2>
            <p className="template-message">We're so happy to celebrate this special day with you!</p>
            <div className="confetti-line">🎊 🎉 🎊</div>
        </div>
    </div>
);

// Template 4 - Minimalist Elegant (White with gold accents)
export const Template4 = ({ name, function: func }) => (
    <div className="template-inner template-minimal">
        <div className="gold-frame">
            <div className="frame-corner tl"></div>
            <div className="frame-corner tr"></div>
            <div className="frame-corner bl"></div>
            <div className="frame-corner br"></div>
        </div>
        <div className="template-content">
            <span className="mini-label">WISHING YOU A</span>
            <h1 className="template-title">Happy {func?.name || 'Day'}!</h1>
            <div className="thin-divider"></div>
            <h2 className="template-greeting">{name || 'Friend'}</h2>
            <p className="template-message">May your day be filled with love, laughter, and all the things that make you smile.</p>
            <span className="heart-icon">♥</span>
        </div>
    </div>
);

// Template 5 - Warm Sunset (Orange & coral gradient)
export const Template5 = ({ name, function: func }) => (
    <div className="template-inner template-sunset">
        <div className="sun-glow"></div>
        <div className="template-content">
            <div className="rays">☀</div>
            <h1 className="template-title">Warm Wishes</h1>
            <h2 className="template-greeting">Dear {name || 'Friend'},</h2>
            <p className="template-message">Like the golden rays of sunset, may your {func?.name?.toLowerCase() || 'celebration'} fill your heart with warmth and happiness.</p>
            <div className="wave-decor">〰️〰️〰️</div>
        </div>
    </div>
);

// Template 6 - Starry Dreams (Deep purple galaxy)
export const Template6 = ({ name, function: func }) => (
    <div className="template-inner template-galaxy">
        <div className="stars-bg">
            <span className="star s1">✦</span>
            <span className="star s2">✧</span>
            <span className="star s3">✦</span>
            <span className="star s4">✧</span>
            <span className="star s5">⋆</span>
        </div>
        <div className="template-content">
            <div className="moon-icon">🌙</div>
            <h1 className="template-title">Dream Big</h1>
            <h2 className="template-greeting">{name || 'Friend'},</h2>
            <p className="template-message">May the stars align to bring you endless joy and your dreams reach new heights this {func?.name?.toLowerCase() || 'celebration'}.</p>
            <div className="sparkle-row">✨ ⭐ ✨</div>
        </div>
    </div>
);

// Template 7 - Cherry Blossom (Soft pink Japanese style)
export const Template7 = ({ name, function: func }) => (
    <div className="template-inner template-sakura">
        <div className="blossom-decor top">🌸</div>
        <div className="branch-left"></div>
        <div className="template-content">
            <h1 className="template-title">{func?.name || 'Celebration'}</h1>
            <div className="jp-divider">❁</div>
            <h2 className="template-greeting">{name || 'Friend'}</h2>
            <p className="template-message">Like cherry blossoms in spring, may your days bloom with beauty and grace.</p>
            <div className="petals">🌸 🌸 🌸</div>
        </div>
        <div className="blossom-decor bottom">🌸</div>
    </div>
);

// Template 8 - Vintage Classic (Cream & brown retro)
export const Template8 = ({ name, function: func }) => (
    <div className="template-inner template-vintage">
        <div className="vintage-border"></div>
        <div className="template-content">
            <div className="vintage-ornament top">❧</div>
            <h1 className="template-title">Heartfelt Wishes</h1>
            <div className="vintage-line">─────────</div>
            <h2 className="template-greeting">Dear {name || 'Friend'},</h2>
            <p className="template-message">On this {func?.name?.toLowerCase() || 'special occasion'}, we send you our warmest regards and fondest wishes.</p>
            <div className="vintage-ornament bottom">☙</div>
        </div>
    </div>
);

// Template 9 - Ocean Breeze (Teal & aqua waves)
export const Template9 = ({ name, function: func }) => (
    <div className="template-inner template-ocean">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="template-content">
            <div className="shell-icon">🐚</div>
            <h1 className="template-title">Waves of Joy</h1>
            <h2 className="template-greeting">{name || 'Friend'},</h2>
            <p className="template-message">May your {func?.name?.toLowerCase() || 'celebration'} flow like gentle waves, bringing peace and happiness.</p>
            <div className="wave-icons">🌊 ✨ 🌊</div>
        </div>
    </div>
);

// Template 10 - Festive Sparkle (Red & gold celebration)
export const Template10 = ({ name, function: func }) => (
    <div className="template-inner template-festive">
        <div className="sparkle-corner tl">✦</div>
        <div className="sparkle-corner tr">✦</div>
        <div className="template-content">
            <div className="ribbon">🎀</div>
            <h1 className="template-title">Celebrate!</h1>
            <div className="festive-divider">★ ─ ★ ─ ★</div>
            <h2 className="template-greeting">Dear {name || 'Friend'},</h2>
            <p className="template-message">It's time to celebrate! Wishing you an amazing {func?.name?.toLowerCase() || 'occasion'} filled with love and laughter.</p>
            <div className="gift-icon">🎁</div>
        </div>
        <div className="sparkle-corner bl">✦</div>
        <div className="sparkle-corner br">✦</div>
    </div>
);

// Template 11 - Garden Fresh (Green & white botanical)
export const Template11 = ({ name, function: func }) => (
    <div className="template-inner template-botanical">
        <div className="leaf-decor top-left">🌿</div>
        <div className="leaf-decor top-right">🌿</div>
        <div className="template-content">
            <div className="flower-crown">🌻</div>
            <h1 className="template-title">Blooming Wishes</h1>
            <div className="botanical-line">─ 🌱 ─</div>
            <h2 className="template-greeting">{name || 'Friend'},</h2>
            <p className="template-message">May your life blossom with joy and your {func?.name?.toLowerCase() || 'celebration'} be as fresh as a garden in spring.</p>
            <div className="flower-row">🌷 🌼 🌷</div>
        </div>
        <div className="leaf-decor bottom-left">🌿</div>
        <div className="leaf-decor bottom-right">🌿</div>
    </div>
);

// Template 12 - Midnight Glow (Dark blue with neon accents)
export const Template12 = ({ name, function: func }) => (
    <div className="template-inner template-neon">
        <div className="glow-orb"></div>
        <div className="template-content">
            <div className="neon-icon">◈</div>
            <h1 className="template-title">Glow Up!</h1>
            <div className="neon-line"></div>
            <h2 className="template-greeting">{name || 'Friend'},</h2>
            <p className="template-message">Shine bright this {func?.name?.toLowerCase() || 'celebration'}! Your energy lights up every room.</p>
            <div className="neon-sparkles">⚡ ✨ ⚡</div>
        </div>
    </div>
);

// Template 13 - Pastel Dreams (Soft lavender & mint)
export const Template13 = ({ name, function: func }) => (
    <div className="template-inner template-pastel">
        <div className="cloud-decor c1">☁</div>
        <div className="cloud-decor c2">☁</div>
        <div className="template-content">
            <div className="rainbow-icon">🌈</div>
            <h1 className="template-title">Sweet Wishes</h1>
            <h2 className="template-greeting">Dear {name || 'Friend'},</h2>
            <p className="template-message">Sending you the softest wishes for a {func?.name?.toLowerCase() || 'celebration'} as sweet as your heart.</p>
            <div className="candy-row">💜 💙 💚 💛 🧡</div>
        </div>
    </div>
);

// Template 14 - Rustic Charm (Brown & beige natural)
export const Template14 = ({ name, function: func }) => (
    <div className="template-inner template-rustic">
        <div className="twine-border"></div>
        <div className="template-content">
            <div className="leaf-icon">🍂</div>
            <h1 className="template-title">Warm Thoughts</h1>
            <div className="rustic-divider">───────</div>
            <h2 className="template-greeting">{name || 'Friend'},</h2>
            <p className="template-message">From our heart to yours, wishing you a cozy and wonderful {func?.name?.toLowerCase() || 'celebration'}.</p>
            <div className="nature-row">🍁 🌾 🍁</div>
        </div>
    </div>
);

// Template 15 - Confetti Burst (Multicolor party)
export const Template15 = ({ name, function: func }) => (
    <div className="template-inner template-party">
        <div className="confetti-bg">
            <span className="conf c1">●</span>
            <span className="conf c2">●</span>
            <span className="conf c3">●</span>
            <span className="conf c4">●</span>
            <span className="conf c5">●</span>
            <span className="conf c6">●</span>
        </div>
        <div className="template-content">
            <div className="party-icon">🎉</div>
            <h1 className="template-title">Let's Party!</h1>
            <h2 className="template-greeting">{name || 'Friend'},</h2>
            <p className="template-message">It's your {func?.name?.toLowerCase() || 'special day'}! Time to celebrate with all the joy in the world!</p>
            <div className="party-row">🥳 🎊 🥳</div>
        </div>
    </div>
);

// Export all templates
export const templates = [
    { id: 1, name: 'Elegant Floral', component: Template1 },
    { id: 2, name: 'Royal Gold', component: Template2 },
    { id: 3, name: 'Festive Balloons', component: Template3 },
    { id: 4, name: 'Minimalist', component: Template4 },
    { id: 5, name: 'Warm Sunset', component: Template5 },
    { id: 6, name: 'Starry Dreams', component: Template6 },
    { id: 7, name: 'Cherry Blossom', component: Template7 },
    { id: 8, name: 'Vintage Classic', component: Template8 },
    { id: 9, name: 'Ocean Breeze', component: Template9 },
    { id: 10, name: 'Festive Sparkle', component: Template10 },
    { id: 11, name: 'Garden Fresh', component: Template11 },
    { id: 12, name: 'Midnight Glow', component: Template12 },
    { id: 13, name: 'Pastel Dreams', component: Template13 },
    { id: 14, name: 'Rustic Charm', component: Template14 },
    { id: 15, name: 'Confetti Burst', component: Template15 },
];

export default templates;