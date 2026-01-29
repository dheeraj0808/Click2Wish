import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FunctionSelection.css';

const FunctionSelection = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name } = location.state || {};
    const [isVisible, setIsVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isGeneralFlow, setIsGeneralFlow] = useState(!name);
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'valentine', name: 'Valentine' },
        { id: 'anti', name: 'Anti-Valentine' },
        { id: 'major', name: 'Major' },
        { id: 'hindu', name: 'Hindu' },
        { id: 'regional', name: 'Regional' },
        { id: 'islamic', name: 'Islamic' },
        { id: 'cultural', name: 'Cultural' }
    ];

    const functions = [
        // Valentine Week
        { id: 'rose-day', name: 'Rose Day', emoji: '🌹', description: 'Feb 7 • Love Begins', color: 'linear-gradient(135deg, #ff6b9d 0%, #ff9a9e 100%)', category: 'valentine' },
        { id: 'propose-day', name: 'Propose Day', emoji: '💍', description: 'Feb 8 • Say It', color: 'linear-gradient(135deg, #ff4d6d 0%, #ff758f 100%)', category: 'valentine' },
        { id: 'chocolate-day', name: 'Chocolate Day', emoji: '🍫', description: 'Feb 9 • Sweet Wishes', color: 'linear-gradient(135deg, #7f5539 0%, #b08968 100%)', category: 'valentine' },
        { id: 'teddy-day', name: 'Teddy Day', emoji: '🧸', description: 'Feb 10 • Cute & Cozy', color: 'linear-gradient(135deg, #ffd6a5 0%, #ffb703 100%)', category: 'valentine' },
        { id: 'promise-day', name: 'Promise Day', emoji: '🤝', description: 'Feb 11 • Forever', color: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)', category: 'valentine' },
        { id: 'hug-day', name: 'Hug Day', emoji: '🤗', description: 'Feb 12 • Warmth', color: 'linear-gradient(135deg, #00b894 0%, #55efc4 100%)', category: 'valentine' },
        { id: 'kiss-day', name: 'Kiss Day', emoji: '💋', description: 'Feb 13 • Romance', color: 'linear-gradient(135deg, #e84393 0%, #fd79a8 100%)', category: 'valentine' },
        { id: 'valentines-day', name: "Valentine's Day", emoji: '❤️', description: 'Feb 14 • Love Day', color: 'linear-gradient(135deg, #ff3d68 0%, #ff7eb3 100%)', category: 'valentine' },

        // Anti-Valentine Week
        { id: 'slap-day', name: 'Slap Day', emoji: '🖐️', description: 'Feb 15 • Move On', color: 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)', category: 'anti' },
        { id: 'kick-day', name: 'Kick Day', emoji: '🦵', description: 'Feb 16 • Let Go', color: 'linear-gradient(135deg, #1e272e 0%, #485460 100%)', category: 'anti' },
        { id: 'perfume-day', name: 'Perfume Day', emoji: '🧴', description: 'Feb 17 • Fresh Start', color: 'linear-gradient(135deg, #0abde3 0%, #54a0ff 100%)', category: 'anti' },
        { id: 'flirt-day', name: 'Flirt Day', emoji: '😉', description: 'Feb 18 • New Vibes', color: 'linear-gradient(135deg, #feca57 0%, #ff9f43 100%)', category: 'anti' },
        { id: 'confession-day', name: 'Confession Day', emoji: '🗣️', description: 'Feb 19 • Speak Up', color: 'linear-gradient(135deg, #5f27cd 0%, #c8d6e5 100%)', category: 'anti' },
        { id: 'missing-day', name: 'Missing Day', emoji: '🥺', description: 'Feb 20 • Memories', color: 'linear-gradient(135deg, #00d2d3 0%, #01a3a4 100%)', category: 'anti' },
        { id: 'breakup-day', name: 'Breakup Day', emoji: '💔', description: 'Feb 21 • Heal & Rise', color: 'linear-gradient(135deg, #ee5253 0%, #341f97 100%)', category: 'anti' },

        // Major Festivals
        { id: 'diwali', name: 'Diwali', emoji: '🪔', description: 'Festival of Lights', color: 'linear-gradient(135deg, #f39c12 0%, #e74c3c 100%)', category: 'major' },
        { id: 'holi', name: 'Holi', emoji: '🎨', description: 'Festival of Colors', color: 'linear-gradient(135deg, #9b59b6 0%, #e91e63 100%)', category: 'major' },
        { id: 'eid', name: 'Eid', emoji: '🌙', description: 'Eid al-Fitr', color: 'linear-gradient(135deg, #2ecc71 0%, #f39c12 100%)', category: 'major' },
        { id: 'christmas', name: 'Christmas', emoji: '🎄', description: 'Winter Holiday', color: 'linear-gradient(135deg, #27ae60 0%, #c9a66b 100%)', category: 'major' },
        { id: 'newyear', name: 'New Year', emoji: '🎊', description: 'New Beginnings', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', category: 'major' },
        { id: 'rakshabandhan', name: 'Raksha Bandhan', emoji: '👫', description: 'Bond of Siblings', color: 'linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)', category: 'major' },

        // Hindu Festivals
        { id: 'navratri', name: 'Navratri', emoji: '🕉️', description: 'Nine Nights', color: 'linear-gradient(135deg, #ff6b9d 0%, #feca57 100%)', category: 'hindu' },
        { id: 'ganeshchaturthi', name: 'Ganesh Chaturthi', emoji: '🐘', description: 'Lord Ganesha', color: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)', category: 'hindu' },
        { id: 'janmashtami', name: 'Janmashtami', emoji: '🦚', description: 'Krishna Birth', color: 'linear-gradient(135deg, #8e44ad 0%, #3498db 100%)', category: 'hindu' },
        { id: 'mahashivratri', name: 'Mahashivratri', emoji: '🔱', description: 'Night of Shiva', color: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)', category: 'hindu' },
        { id: 'dussehra', name: 'Dussehra', emoji: '🏹', description: 'Victory of Good', color: 'linear-gradient(135deg, #ff6348 0%, #ffa502 100%)', category: 'hindu' },
        { id: 'ramnavami', name: 'Ram Navami', emoji: '🏹', description: 'Birth of Rama', color: 'linear-gradient(135deg, #e67e22 0%, #c0392b 100%)', category: 'hindu' },
        { id: 'hanumanjayanti', name: 'Hanuman Jayanti', emoji: '💪', description: 'Lord Hanuman', color: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)', category: 'hindu' },
        { id: 'durgapuja', name: 'Durga Puja', emoji: '🔱', description: 'Goddess Durga', color: 'linear-gradient(135deg, #e74c3c 0%, #f39c12 100%)', category: 'hindu' },
        { id: 'onam', name: 'Onam', emoji: '🛶', description: 'Kerala Harvest', color: 'linear-gradient(135deg, #27ae60 0%, #f39c12 100%)', category: 'hindu' },
        { id: 'pongal', name: 'Pongal', emoji: '🌾', description: 'Tamil Festival', color: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)', category: 'hindu' },
        { id: 'makarsankranti', name: 'Makar Sankranti', emoji: '🪁', description: 'Kite Festival', color: 'linear-gradient(135deg, #f39c12 0%, #3498db 100%)', category: 'hindu' },
        { id: 'bhaidooj', name: 'Bhai Dooj', emoji: '👫', description: 'Sibling Love', color: 'linear-gradient(135deg, #e91e63 0%, #9b59b6 100%)', category: 'hindu' },

        // Regional Festivals
        { id: 'lohri', name: 'Lohri', emoji: '🔥', description: 'Punjabi Winter', color: 'linear-gradient(135deg, #ff6348 0%, #ff8c00 100%)', category: 'regional' },
        { id: 'bihu', name: 'Bihu', emoji: '🥁', description: 'Assamese Festival', color: 'linear-gradient(135deg, #27ae60 0%, #f39c12 100%)', category: 'regional' },
        { id: 'baisakhi', name: 'Baisakhi', emoji: '🌾', description: 'Punjabi Harvest', color: 'linear-gradient(135deg, #f39c12 0%, #e74c3c 100%)', category: 'regional' },
        { id: 'teej', name: 'Teej', emoji: '💃', description: 'Women Festival', color: 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)', category: 'regional' },
        { id: 'karvachauth', name: 'Karva Chauth', emoji: '🌙', description: 'Love & Devotion', color: 'linear-gradient(135deg, #ff69b4 0%, #e91e63 100%)', category: 'regional' },
        { id: 'gangaur', name: 'Gangaur', emoji: '👸', description: 'Rajasthani', color: 'linear-gradient(135deg, #ff69b4 0%, #f39c12 100%)', category: 'regional' },
        { id: 'hornbill', name: 'Hornbill', emoji: '🦅', description: 'Nagaland', color: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)', category: 'regional' },
        { id: 'hemis', name: 'Hemis', emoji: '🏔️', description: 'Ladakh Festival', color: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)', category: 'regional' },

        // Islamic Festivals
        { id: 'eidulfitr', name: 'Eid-ul-Fitr', emoji: '🌙', description: 'Breaking Fast', color: 'linear-gradient(135deg, #3498db 0%, #2ecc71 100%)', category: 'islamic' },
        { id: 'eiduladha', name: 'Eid-ul-Adha', emoji: '🐐', description: 'Festival of Sacrifice', color: 'linear-gradient(135deg, #27ae60 0%, #f39c12 100%)', category: 'islamic' },
        { id: 'ramadan', name: 'Ramadan', emoji: '📿', description: 'Holy Month', color: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)', category: 'islamic' },
        { id: 'miladunnabi', name: 'Milad-un-Nabi', emoji: '🕌', description: 'Prophet Birthday', color: 'linear-gradient(135deg, #27ae60 0%, #3498db 100%)', category: 'islamic' },
        { id: 'shabbarat', name: 'Shab-e-Barat', emoji: '✨', description: 'Night of Fortune', color: 'linear-gradient(135deg, #9b59b6 0%, #3498db 100%)', category: 'islamic' },

        // Cultural & Personal
        { id: 'birthday', name: 'Birthday', emoji: '🎂', description: 'Special Day', color: 'linear-gradient(135deg, #ff9ff3 0%, #feca57 100%)', category: 'cultural' },
        { id: 'mothersday', name: "Mother's Day", emoji: '🌸', description: 'Honor Mothers', color: 'linear-gradient(135deg, #ff9ff3 0%, #feca57 100%)', category: 'cultural' },
        { id: 'fathersday', name: "Father's Day", emoji: '👨', description: 'Honor Fathers', color: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)', category: 'cultural' },
        { id: 'teachersday', name: "Teacher's Day", emoji: '👨‍🏫', description: 'Honor Teachers', color: 'linear-gradient(135deg, #3498db 0%, #f39c12 100%)', category: 'cultural' },
        { id: 'friendshipday', name: 'Friendship Day', emoji: '🤝', description: 'Celebrate Friends', color: 'linear-gradient(135deg, #ff9ff3 0%, #3498db 100%)', category: 'cultural' },
        { id: 'womensday', name: "Women's Day", emoji: '👩', description: 'Empowerment', color: 'linear-gradient(135deg, #e91e63 0%, #9b59b6 100%)', category: 'cultural' },
        { id: 'childrensday', name: "Children's Day", emoji: '🧒', description: 'For Kids', color: 'linear-gradient(135deg, #ff9ff3 0%, #3498db 100%)', category: 'cultural' },
        { id: 'independence', name: 'Independence Day', emoji: '🇮🇳', description: 'Freedom', color: 'linear-gradient(135deg, #ff6348 0%, #27ae60 100%)', category: 'cultural' },
        { id: 'republic', name: 'Republic Day', emoji: '🏛️', description: 'Constitution', color: 'linear-gradient(135deg, #ff6348 0%, #27ae60 100%)', category: 'cultural' },
        { id: 'gandhijayanti', name: 'Gandhi Jayanti', emoji: '🕊️', description: 'Peace Day', color: 'linear-gradient(135deg, #27ae60 0%, #f39c12 100%)', category: 'cultural' },
        { id: 'anniversary', name: 'Anniversary', emoji: '💍', description: 'Celebration', color: 'linear-gradient(135deg, #f39c12 0%, #e74c3c 100%)', category: 'cultural' },
        { id: 'graduation', name: 'Graduation', emoji: '🎓', description: 'Achievement', color: 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)', category: 'cultural' },
        { id: 'youthday', name: 'Youth Day', emoji: '🌟', description: 'Energy of Youth', color: 'linear-gradient(135deg, #3498db 0%, #f39c12 100%)', category: 'cultural' }
    ];

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isGeneralFlow && !name) {
            navigate('/');
        }
    }, [name, navigate, isGeneralFlow]);

    const handleFunctionSelect = (func) => {
        if (isGeneralFlow) {
            navigate('/templates', { state: { name: 'Friend', function: func } });
        } else {
            navigate('/templates', { state: { name, function: func } });
        }
    };

    const handleBack = () => {
        if (isGeneralFlow) {
            navigate('/');
        } else {
            navigate('/name-input');
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    // Filter by search and category
    const filteredFunctions = functions.filter(func => {
        const matchesSearch = func.name.toLowerCase().includes(searchTerm) ||
            func.description.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || func.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    // Group functions by category for display
    const getCategoryTitle = (category) => {
        const titles = {
            'valentine': 'Valentine Week',
            'anti': 'Anti-Valentine Week',
            'major': 'Major Festivals',
            'hindu': 'Hindu Festivals',
            'regional': 'Regional Festivals',
            'islamic': 'Islamic Festivals',
            'cultural': 'Cultural & Personal'
        };
        return titles[category] || category;
    };

    // Get unique categories from filtered results
    const getGroupedFunctions = () => {
        if (activeCategory !== 'all') {
            return { [activeCategory]: filteredFunctions };
        }
        return filteredFunctions.reduce((groups, func) => {
            const cat = func.category;
            if (!groups[cat]) groups[cat] = [];
            groups[cat].push(func);
            return groups;
        }, {});
    };

    if (!isGeneralFlow && !name) {
        return null;
    }

    const groupedFunctions = getGroupedFunctions();

    return (
        <div className={`festival-page ${isVisible ? 'visible' : ''}`}>
            {/* Back Button */}
            <button className="back-btn" onClick={handleBack}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
            </button>

            {/* Header */}
            <div className="festival-header">
                <h1 className="festival-title">Choose Your Special Day</h1>
            </div>

            {/* Search Bar */}
            <div className="search-wrapper">
                <div className="search-box">
                    <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search 50+ festivals..."
                        className="search-input"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            {/* Category Tabs */}
            <div className="category-tabs">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat.id)}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Festival Grid */}
            <div className="festival-content">
                {Object.entries(groupedFunctions).map(([category, items]) => (
                    <div key={category} className="festival-section">
                        <div className="section-header">
                            <h2 className="section-title">{getCategoryTitle(category)}</h2>
                            <span className="see-all">See all</span>
                        </div>
                        <div className="festival-grid">
                            {items.map((func) => (
                                <div
                                    key={func.id}
                                    className="festival-card"
                                    onClick={() => handleFunctionSelect(func)}
                                    style={{ background: func.color }}
                                >
                                    <div className="card-emoji">{func.emoji}</div>
                                    <h3 className="card-name">{func.name}</h3>
                                    <p className="card-desc">{func.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {filteredFunctions.length === 0 && (
                    <div className="no-results">
                        <p>No festivals found. Try a different search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FunctionSelection;
