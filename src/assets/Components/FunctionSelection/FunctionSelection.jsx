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

    const functions = [
        // Major Indian Festivals
        {
            id: 'diwali',
            name: 'Diwali',
            emoji: '🪔',
            description: 'Festival of lights and prosperity',
            color: 'linear-gradient(135deg, #f39c12 0%, #e74c3c 100%)',
            category: 'major-festivals'
        },
        {
            id: 'holi',
            name: 'Holi',
            emoji: '🎨',
            description: 'Festival of colors and joy',
            color: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
            category: 'major-festivals'
        },
        {
            id: 'rakshabandhan',
            name: 'Raksha Bandhan',
            emoji: '👫',
            description: 'Celebrate the bond of brother and sister',
            color: 'linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)',
            category: 'major-festivals'
        },
        {
            id: 'eid',
            name: 'Eid',
            emoji: '🌙',
            description: 'Festival of peace and celebration',
            color: 'linear-gradient(135deg, #3498db 0%, #2ecc71 100%)',
            category: 'major-festivals'
        },
        {
            id: 'dussehra',
            name: 'Dussehra',
            emoji: '🏹',
            description: 'Victory of good over evil',
            color: 'linear-gradient(135deg, #ff6348 0%, #ffa502 100%)',
            category: 'major-festivals'
        },

        // Hindu Festivals
        {
            id: 'navratri',
            name: 'Navratri',
            emoji: '🕉️',
            description: 'Nine nights of celebration',
            color: 'linear-gradient(135deg, #ff6b9d 0%, #feca57 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'ganeshchaturthi',
            name: 'Ganesh Chaturthi',
            emoji: '🐘',
            description: 'Festival of Lord Ganesha',
            color: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'janmashtami',
            name: 'Janmashtami',
            emoji: '👶',
            description: 'Birth of Lord Krishna',
            color: 'linear-gradient(135deg, #8e44ad 0%, #3498db 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'mahashivratri',
            name: 'Mahashivratri',
            emoji: '🌙',
            description: 'Great night of Lord Shiva',
            color: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'krishnajanmashtami',
            name: 'Krishna Janmashtami',
            emoji: '🦚',
            description: 'Celebration of Lord Krishna\'s birth',
            color: 'linear-gradient(135deg, #9b59b6 0%, #3498db 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'ramnavami',
            name: 'Ram Navami',
            emoji: '🏹',
            description: 'Birth of Lord Rama',
            color: 'linear-gradient(135deg, #e67e22 0%, #c0392b 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'hanumanjayanti',
            name: 'Hanuman Jayanti',
            emoji: '💪',
            description: 'Birth of Lord Hanuman',
            color: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'saraswatiPuja',
            name: 'Saraswati Puja',
            emoji: '📚',
            description: 'Goddess of knowledge and wisdom',
            color: 'linear-gradient(135deg, #ffffff 0%, #f39c12 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'durgaPuja',
            name: 'Durga Puja',
            emoji: '🔱',
            description: 'Worship of Goddess Durga',
            color: 'linear-gradient(135deg, #e74c3c 0%, #f39c12 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'onam',
            name: 'Onam',
            emoji: '🛶',
            description: 'Harvest festival of Kerala',
            color: 'linear-gradient(135deg, #27ae60 0%, #f39c12 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'pongal',
            name: 'Pongal',
            emoji: '🌾',
            description: 'Tamil harvest festival',
            color: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'baisakhi',
            name: 'Baisakhi',
            emoji: '🌾',
            description: 'Punjabi harvest festival',
            color: 'linear-gradient(135deg, #f39c12 0%, #e74c3c 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'makarsankranti',
            name: 'Makar Sankranti',
            emoji: '🪁',
            description: 'Festival of kites and harvest',
            color: 'linear-gradient(135deg, #f39c12 0%, #3498db 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'basantpanchami',
            name: 'Basant Panchami',
            emoji: '🌼',
            description: 'Welcome spring season',
            color: 'linear-gradient(135deg, #f1c40f 0%, #e67e22 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'mahaShivratri',
            name: 'Maha Shivratri',
            emoji: '🌙',
            description: 'Great night of Lord Shiva',
            color: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'kartikPurnima',
            name: 'Kartik Purnima',
            emoji: '🌕',
            description: 'Full moon of Kartik month',
            color: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'guruPurnima',
            name: 'Guru Purnima',
            emoji: '🙏',
            description: 'Honor spiritual teachers',
            color: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'vasantPanchami',
            name: 'Vasant Panchami',
            emoji: '🌺',
            description: 'Spring festival dedicated to Saraswati',
            color: 'linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'akshayTritiya',
            name: 'Akshay Tritiya',
            emoji: '💰',
            description: 'Auspicious day for new beginnings',
            color: 'linear-gradient(135deg, #f39c12 0%, #d4af37 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'radhaAshtami',
            name: 'Radha Ashtami',
            emoji: '🌸',
            description: 'Birth of Goddess Radha',
            color: 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'govardhanPuja',
            name: 'Govardhan Puja',
            emoji: '🏔️',
            description: 'Worship of Govardhan Hill',
            color: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
            category: 'hindu-festivals'
        },
        {
            id: 'bhaiDooj',
            name: 'Bhai Dooj',
            emoji: '👫',
            description: 'Brother-sister festival',
            color: 'linear-gradient(135deg, #e91e63 0%, #9b59b6 100%)',
            category: 'hindu-festivals'
        },

        // Regional Indian Festivals
        {
            id: 'lohri',
            name: 'Lohri',
            emoji: '🔥',
            description: 'Punjabi winter festival',
            color: 'linear-gradient(135deg, #ff6348 0%, #ff8c00 100%)',
            category: 'regional-festivals'
        },
        {
            id: 'bihu',
            name: 'Bihu',
            emoji: '🥁',
            description: 'Assamese harvest festival',
            color: 'linear-gradient(135deg, #27ae60 0%, #f39c12 100%)',
            category: 'regional-festivals'
        },
        {
            id: 'hemis',
            name: 'Hemis',
            emoji: '🏔️',
            description: 'Ladakhi monastery festival',
            color: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
            category: 'regional-festivals'
        },
        {
            id: 'hornbill',
            name: 'Hornbill',
            emoji: '🦅',
            description: 'Nagaland heritage festival',
            color: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
            category: 'regional-festivals'
        },
        {
            id: 'pongala',
            name: 'Attukal Pongala',
            emoji: '🔥',
            description: 'Women\'s festival in Kerala',
            color: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)',
            category: 'regional-festivals'
        },
        {
            id: 'teej',
            name: 'Teej',
            emoji: '💃',
            description: 'Women\'s festival for marital bliss',
            color: 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)',
            category: 'regional-festivals'
        },
        {
            id: 'karvaChauth',
            name: 'Karva Chauth',
            emoji: '🌙',
            description: 'Women fast for husband\'s long life',
            color: 'linear-gradient(135deg, #ff69b4 0%, #e91e63 100%)',
            category: 'regional-festivals'
        },
        {
            id: 'gangaur',
            name: 'Gangaur',
            emoji: '👸',
            description: 'Rajasthani festival for married women',
            color: 'linear-gradient(135deg, #ff69b4 0%, #f39c12 100%)',
            category: 'regional-festivals'
        },

        // Islamic Festivals
        {
            id: 'eidUlFitr',
            name: 'Eid-ul-Fitr',
            emoji: '🌙',
            description: 'Festival of breaking the fast',
            color: 'linear-gradient(135deg, #3498db 0%, #2ecc71 100%)',
            category: 'islamic-festivals'
        },
        {
            id: 'eidUlAdha',
            name: 'Eid-ul-Adha',
            emoji: '🐐',
            description: 'Festival of sacrifice',
            color: 'linear-gradient(135deg, #27ae60 0%, #f39c12 100%)',
            category: 'islamic-festivals'
        },
        {
            id: 'ramadan',
            name: 'Ramadan',
            emoji: '📿',
            description: 'Holy month of fasting',
            color: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
            category: 'islamic-festivals'
        },
        {
            id: 'miladUnNabi',
            name: 'Milad-un-Nabi',
            emoji: '🕌',
            description: 'Prophet Muhammad\'s birthday',
            color: 'linear-gradient(135deg, #27ae60 0%, #3498db 100%)',
            category: 'islamic-festivals'
        },

        // National Days
        {
            id: 'independence',
            name: 'Independence Day',
            emoji: '🇮🇳',
            description: 'Celebrate freedom and pride',
            color: 'linear-gradient(135deg, #ff6348 0%, #ffffff 50%, #008000 100%)',
            category: 'national-days'
        },
        {
            id: 'republic',
            name: 'Republic Day',
            emoji: '🏛️',
            description: 'Celebrate democracy and constitution',
            color: 'linear-gradient(135deg, #ff6348 0%, #ffffff 50%, #008000 100%)',
            category: 'national-days'
        },
        {
            id: 'gandhijayanti',
            name: 'Gandhi Jayanti',
            emoji: '🕊️',
            description: 'Remembering the Father of the Nation',
            color: 'linear-gradient(135deg, #27ae60 0%, #f39c12 100%)',
            category: 'national-days'
        },

        // Personal Celebrations
        {
            id: 'birthday',
            name: 'Birthday',
            emoji: '🎂',
            description: 'Celebrate special moments',
            color: 'linear-gradient(135deg, #ff9ff3 0%, #feca57 100%)',
            category: 'personal'
        },
        {
            id: 'newyear',
            name: 'New Year',
            emoji: '🎊',
            description: 'Celebrate the beginning of a new year',
            color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            category: 'personal'
        },
        {
            id: 'christmas',
            name: 'Christmas',
            emoji: '🎄',
            description: 'Season of joy and giving',
            color: 'linear-gradient(135deg, #27ae60 0%, #e74c3c 100%)',
            category: 'personal'
        },
        {
            id: 'valentine',
            name: 'Valentine\'s Day',
            emoji: '❤️',
            description: 'Celebrate love and romance',
            color: 'linear-gradient(135deg, #ff6b9d 0%, #ee5a6f 100%)',
            category: 'personal'
        },
        {
            id: 'mothersday',
            name: 'Mother\'s Day',
            emoji: '🌸',
            description: 'Honor mothers everywhere',
            color: 'linear-gradient(135deg, #ff9ff3 0%, #feca57 100%)',
            category: 'personal'
        },
        {
            id: 'fathersday',
            name: 'Father\'s Day',
            emoji: '👨',
            description: 'Celebrate fathers and father figures',
            color: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
            category: 'personal'
        },
        {
            id: 'teachersday',
            name: 'Teacher\'s Day',
            emoji: '👨‍🏫',
            description: 'Honor educators and mentors',
            color: 'linear-gradient(135deg, #3498db 0%, #f39c12 100%)',
            category: 'personal'
        },
        {
            id: 'childrensday',
            name: 'Children\'s Day',
            emoji: '🧒',
            description: 'Celebrate childhood and innocence',
            color: 'linear-gradient(135deg, #ff9ff3 0%, #3498db 100%)',
            category: 'personal'
        },
        {
            id: 'friendshipDay',
            name: 'Friendship Day',
            emoji: '👫',
            description: 'Celebrate the bond of friendship',
            color: 'linear-gradient(135deg, #ff9ff3 0%, #3498db 100%)',
            category: 'personal'
        },
        {
            id: 'womenDay',
            name: 'Women\'s Day',
            emoji: '👩',
            description: 'Celebrate womanhood and empowerment',
            color: 'linear-gradient(135deg, #e91e63 0%, #9b59b6 100%)',
            category: 'personal'
        },
        {
            id: 'youthDay',
            name: 'Youth Day',
            emoji: '🌟',
            description: 'Celebrate the energy of youth',
            color: 'linear-gradient(135deg, #3498db 0%, #f39c12 100%)',
            category: 'personal'
        },
        {
            id: 'elderDay',
            name: 'Elder\'s Day',
            emoji: '👴',
            description: 'Honor and respect elders',
            color: 'linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%)',
            category: 'personal'
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Only redirect if not in general flow and no name provided
        if (!isGeneralFlow && !name) {
            navigate('/');
        }
    }, [name, navigate, isGeneralFlow]);

    const handleFunctionSelect = (func) => {
        if (isGeneralFlow) {
            // For general flow, pass a default name or no name
            navigate('/templates', { state: { name: 'Friend', function: func } });
        } else {
            // For personalized flow, pass the actual name
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

    const filteredFunctions = functions.filter(func =>
        func.name.toLowerCase().includes(searchTerm) ||
        func.description.toLowerCase().includes(searchTerm)
    );

    // Group functions by category
    const groupedFunctions = filteredFunctions.reduce((groups, func) => {
        const category = func.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(func);
        return groups;
    }, {});

    const categoryTitles = {
        'major-festivals': '🎊 Major Indian Festivals',
        'hindu-festivals': '🕉️ Hindu Festivals',
        'regional-festivals': '🗺️ Regional Indian Festivals',
        'islamic-festivals': '🕌 Islamic Festivals',
        'national-days': '🇮🇳 National Days',
        'personal': '🎉 Personal Celebrations'
    };

    if (!isGeneralFlow && !name) {
        return null;
    }

    return (
        <div className={`function-selection-overlay ${isVisible ? 'visible' : ''}`}>
            <div className="function-selection-container">
                <button className="back-button" onClick={handleBack}>
                    ← Back
                </button>

                <div className="function-header">
                    <h2 className="function-title">
                        {isGeneralFlow ? 'Choose Your Festival! 🎊' : `Hello, ${name}! 🎉`}
                    </h2>
                    <p className="function-subtitle">
                        {isGeneralFlow
                            ? 'Select a festival to create beautiful wishes'
                            : 'What would you like to celebrate today?'
                        }
                    </p>

                    {/* Search Bar */}
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search functions... (e.g., Diwali, Holi, Birthday)"
                            className="search-input"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <div className="search-icon">🔍</div>
                    </div>
                </div>

                <div className="functions-content">
                    {Object.entries(groupedFunctions).map(([category, categoryFunctions]) => (
                        <div key={category} className="category-section">
                            <h3 className="category-title">
                                {categoryTitles[category]}
                            </h3>
                            <div className="functions-grid">
                                {categoryFunctions.map((func) => (
                                    <div
                                        key={func.id}
                                        className="function-card"
                                        onClick={() => handleFunctionSelect(func)}
                                        style={{ background: func.color }}
                                    >
                                        <div className="function-emoji">{func.emoji}</div>
                                        <h3 className="function-name">{func.name}</h3>
                                        <p className="function-description">{func.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FunctionSelection;
