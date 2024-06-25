'use client'

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`fixed bottom-5 left-5 z-50 ${visible ? 'opacity-40' : 'opacity-0'} transition-opacity duration-300`}>
            <button
                onClick={scrollToTop}
                className="bg-[#006494] text-white p-2 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
                aria-label="Scroll to top"
            >
                <FaArrowUp size={24} />
            </button>
        </div>
    );
};

export default ScrollToTopButton;
