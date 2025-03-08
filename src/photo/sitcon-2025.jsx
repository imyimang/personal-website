// PhotoGallery.jsx
import React, { useState } from 'react';
import HomeIcon from '../Homeicon';

const Photo = () => {
    <HomeIcon />
    const photos = [
        '/photo/sitcon-2025/img.jpg',
        '/photo/sitcon-2025/img2.jpg',
        '/photo/sitcon-2025/img3.jpg',
        '/photo/sitcon-2025/img4.jpg',
        '/photo/sitcon-2025/img5.jpg',
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


const SITCON = () => {
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

export default SITCON;