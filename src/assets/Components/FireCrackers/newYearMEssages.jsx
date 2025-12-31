const newYearMessages = [
    (name) => `Dear ${name}, as we welcome 2026, may your days be filled with endless joy, your heart with love, and your life with laughter. Wishing you a year that's as wonderful as you are!`,

    (name) => `Happy New Year ${name}! 🎊 May 2026 bring you success in every step, happiness in every moment, and love in every corner of your life. Cheers to new beginnings!`,

    (name) => `To ${name}, may this New Year be the start of a journey that leads you to the most amazing destinations. May you find joy in the little things and strength in every challenge. Happy 2026!`,

    (name) => `Hey ${name}! As the clock strikes midnight, may you be blessed with health, happiness, and prosperity. May 2026 be the year all your dreams come true!`,

    (name) => `Warmest wishes to you, ${name}, for a New Year filled with love, laughter, and countless blessings. May 2026 be your most successful year yet!`,

    (name) => `${name}, may the New Year bring you the courage to chase your dreams, the strength to overcome obstacles, and the wisdom to enjoy every moment. Happy 2026!`,

    (name) => `Dear ${name}, as we bid farewell to the old and welcome the new, may your heart be light, your spirit be bright, and your year be filled with delight!`,

    (name) => `Happy New Year ${name}! May 2026 be a beautiful chapter in your life's story, filled with happiness, success, and wonderful memories.`,

    (name) => `To ${name}, may the New Year bring you moments of joy, days of success, and a lifetime of happiness. Wishing you a fantastic 2026!`,

    (name) => `As we step into 2026, ${name}, may you find new opportunities at every turn, love in every relationship, and success in all your endeavors. Happy New Year!`
];

export const getRandomMessage = (name = '') => {
    const randomIndex = Math.floor(Math.random() * newYearMessages.length);
    return newYearMessages[randomIndex](name);
};

export default newYearMessages;