import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function Instagram() {
    const handleInstagramClick = () => {
        const instagramUrl = 'https://www.instagram.com/seuusuario'; 
        window.open(instagramUrl, '_blank');
    };

    return (
        <>
            <button 
                onClick={handleInstagramClick}
                className="fixed bottom-27 cursor-pointer right-2 lg:right-10 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 z-50 flex items-center justify-center"
                aria-label="Follow on Instagram"
            >
                <FaInstagram className="text-2xl" />
            </button>
        </>
    );
}