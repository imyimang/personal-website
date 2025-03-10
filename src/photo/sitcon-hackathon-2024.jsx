// PhotoGallery.jsx
import React, { useState } from 'react';
import HomeIcon from '../Homeicon';

const Photo = () => {
    const photos = [
        '/photo/sitcon-hackathon-2024/img.jpg',
        '/photo/sitcon-hackathon-2024/img2.jpg',
        '/photo/sitcon-hackathon-2024/img3.jpg',
        '/photo/sitcon-hackathon-2024/img4.jpg',
        '/photo/sitcon-hackathon-2024/img5.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [slideDirection, setSlideDirection] = useState('');

    const handlePrev = () => {
        setSlideDirection('slide-right');
        setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSlideDirection('slide-left');
        setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    const handleImageClick = () => {
        setIsLightboxOpen(true);
    };

    const handleCloseLightbox = () => {
        setIsLightboxOpen(false);
    };

    const handleAnimationEnd = () => {
        setSlideDirection('');
    };

    return (
        <div className="max-w-4xl mx-auto p-5">
            {/* 主相簿容器 */}
            <div className="relative w-full h-[600px] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src={photos[currentIndex]}
                        alt={`Photo ${currentIndex + 1}`}
                        className={`max-w-full max-h-full object-contain cursor-pointer transition-all duration-300
                            ${slideDirection === 'slide-left' ? 'animate-slide-left' : ''}
                            ${slideDirection === 'slide-right' ? 'animate-slide-right' : ''}`}
                        onClick={handleImageClick}
                        onAnimationEnd={handleAnimationEnd}
                    />
                </div>

                {/* 固定在螢幕左右邊的按鈕 */}
                <button
                    className="fixed left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
                              bg-white/70 hover:bg-white/90 text-2xl flex items-center justify-center
                              transition-colors z-20"
                    onClick={handlePrev}
                    aria-label="Previous photo"
                >
                    ❮
                </button>
                <button
                    className="fixed right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
                              bg-white/70 hover:bg-white/90 text-2xl flex items-center justify-center
                              transition-colors z-20"
                    onClick={handleNext}
                    aria-label="Next photo"
                >
                    ❯
                </button>
            </div>

            {/* GitHub 連結 icon */}
            <div className="flex justify-center mt-4">
                <a 
                    href="https://github.com/sitcon-hackathon2024-archive/team23_Food-Ordering" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-colors"
                    aria-label="GitHub 專案連結"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                    >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50
                              animate-fade-in"
                    onClick={handleCloseLightbox}
                >
                    <img
                        src={photos[currentIndex]}
                        alt={`Enlarged photo ${currentIndex + 1}`}
                        className="max-w-[90%] max-h-[90%] object-contain"
                    />
                    <button
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/70 
                                 hover:bg-white/90 text-xl flex items-center justify-center"
                        onClick={handleCloseLightbox}
                        aria-label="Close lightbox"
                    >
                        ×
                    </button>
                </div>
            )}

            {/* 自定義動畫 */}
            <style jsx>{`
                @keyframes slide-left {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                @keyframes slide-right {
                    from {
                        transform: translateX(-100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .animate-slide-left {
                    animation: slide-left 0.3s ease-out;
                }

                .animate-slide-right {
                    animation: slide-right 0.3s ease-out;
                }

                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }

                @media (max-width: 768px) {
                    .h-[600px] {
                        height: 400px;
                    }
                    
                    .w-12 {
                        width: 2.5rem;
                    }
                    
                    .h-12 {
                        height: 2.5rem;
                    }
                    
                    .text-2xl {
                        font-size: 1.25rem;
                    }

                    .left-4 {
                        left: 0.5rem;
                    }

                    .right-4 {
                        right: 0.5rem;
                    }
                }
            `}</style>
        </div>
    );
};


const HackaThon = () => {
    const [titleHeight, setTitleHeight] = useState(0);
    const handleTitleHeightChange = (height) => {
        setTitleHeight(height);
    };

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <HomeIcon />
            <Photo />
        </>
    );
};

export default HackaThon;