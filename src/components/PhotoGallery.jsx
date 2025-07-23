import React, { useState, useEffect } from 'react';

const PhotoGallery = ({ photos, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [slideDirection, setSlideDirection] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // 預載圖片
    useEffect(() => {
        const loadImages = async () => {
            const promises = photos.map(src => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = resolve;
                    img.onerror = reject;
                    img.src = src;
                });
            });

            try {
                await Promise.all(promises);
                setIsLoading(false);
            } catch (error) {
                console.error('圖片載入失敗:', error);
                setIsLoading(false);
            }
        };

        loadImages();
    }, [photos]);

    // 鍵盤導航
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'Escape') {
                handleCloseLightbox();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

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

    if (isLoading) {
        return (
            <div className="max-w-4xl mx-auto p-5">
                <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center bg-gray-100 rounded-lg">
                    <div className="text-gray-500">載入中...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-5">
            {title && (
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#4A4A4A]">
                    {title}
                </h1>
            )}
            
            {/* 照片計數器 */}
            <div className="text-center mb-4">
                <span className="text-sm text-gray-600">
                    {currentIndex + 1} / {photos.length}
                </span>
            </div>

            {/* 主相簿容器 */}
            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
                <div className="w-full h-full flex items-center justify-center bg-gray-50">
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

                {/* 左右切換按鈕 */}
                <button
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full 
                              bg-white/80 hover:bg-white/95 text-lg md:text-2xl flex items-center justify-center
                              transition-all duration-200 shadow-lg hover:shadow-xl z-20
                              disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handlePrev}
                    aria-label="Previous photo"
                    disabled={photos.length <= 1}
                >
                    ❮
                </button>
                <button
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full 
                              bg-white/80 hover:bg-white/95 text-lg md:text-2xl flex items-center justify-center
                              transition-all duration-200 shadow-lg hover:shadow-xl z-20
                              disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleNext}
                    aria-label="Next photo"
                    disabled={photos.length <= 1}
                >
                    ❯
                </button>
            </div>

            {/* 縮圖導航 */}
            {photos.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
                    {photos.map((photo, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200
                                ${index === currentIndex 
                                    ? 'border-blue-500 opacity-100' 
                                    : 'border-gray-300 opacity-60 hover:opacity-80'}`}
                        >
                            <img
                                src={photo}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/95 flex items-center justify-center z-50
                              animate-fade-in"
                    onClick={handleCloseLightbox}
                >
                    <img
                        src={photos[currentIndex]}
                        alt={`Enlarged photo ${currentIndex + 1}`}
                        className="max-w-[95%] max-h-[95%] object-contain"
                    />
                    <button
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 
                                 hover:bg-white/95 text-xl flex items-center justify-center
                                 transition-colors duration-200"
                        onClick={handleCloseLightbox}
                        aria-label="Close lightbox"
                    >
                        ×
                    </button>
                    
                    {/* Lightbox 導航按鈕 */}
                    {photos.length > 1 && (
                        <>
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
                                         bg-white/80 hover:bg-white/95 text-2xl flex items-center justify-center
                                         transition-colors duration-200"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrev();
                                }}
                                aria-label="Previous photo"
                            >
                                ❮
                            </button>
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
                                         bg-white/80 hover:bg-white/95 text-2xl flex items-center justify-center
                                         transition-colors duration-200"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                                aria-label="Next photo"
                            >
                                ❯
                            </button>
                        </>
                    )}
                </div>
            )}

            {/* 自定義動畫 */}
            <style jsx>{`
                @keyframes slide-left {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes slide-right {
                    from {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
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
            `}</style>
        </div>
    );
};

export default PhotoGallery;
