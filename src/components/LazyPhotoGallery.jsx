import React, { useState, useEffect, useRef, useCallback } from 'react';

const LazyPhotoGallery = ({ photos, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [slideDirection, setSlideDirection] = useState('');
    const [loadedImages, setLoadedImages] = useState(new Set());
    const [isCurrentImageLoaded, setIsCurrentImageLoaded] = useState(false);
    const [imageDimensions, setImageDimensions] = useState({});
    const imageRefs = useRef({});

    // 懶加載圖片的函數，同時獲取圖片尺寸
    const loadImage = useCallback((src, index) => {
        if (loadedImages.has(index)) return Promise.resolve();

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                setLoadedImages(prev => new Set([...prev, index]));
                setImageDimensions(prev => ({
                    ...prev,
                    [index]: {
                        width: img.naturalWidth,
                        height: img.naturalHeight,
                        aspectRatio: img.naturalWidth / img.naturalHeight
                    }
                }));
                resolve();
            };
            img.onerror = reject;
            img.src = src;
        });
    }, [loadedImages]);

    // 預載當前圖片和相鄰圖片
    useEffect(() => {
        const preloadAdjacent = async () => {
            const indicesToLoad = [];
            
            // 當前圖片
            indicesToLoad.push(currentIndex);
            
            // 前一張和後一張
            const prevIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
            const nextIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
            indicesToLoad.push(prevIndex, nextIndex);

            // 載入這些圖片
            const loadPromises = indicesToLoad.map(index => 
                loadImage(photos[index], index)
            );

            try {
                await Promise.all(loadPromises);
                setIsCurrentImageLoaded(true);
            } catch (error) {
                console.error('圖片載入失敗:', error);
                setIsCurrentImageLoaded(true); // 即使失敗也顯示
            }
        };

        setIsCurrentImageLoaded(false);
        preloadAdjacent();
    }, [currentIndex, photos, loadImage]);

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

    // Intersection Observer 用於縮圖懶加載
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        loadImage(photos[index], index);
                    }
                });
            },
            { 
                rootMargin: '50px', // 提前50px開始載入
                threshold: 0.1 
            }
        );

        // 觀察所有縮圖
        Object.values(imageRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [photos, loadImage]);

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

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="max-w-4xl mx-auto">
            {title && (
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#4A4A4A] px-5">
                    {title}
                </h1>
            )}
            
            {/* 照片計數器 */}
            <div className="text-center mb-4 px-5">
                <span className="text-sm text-gray-600">
                    {currentIndex + 1} / {photos.length}
                </span>
            </div>

            {/* 主相簿容器 */}
            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                    {!isCurrentImageLoaded ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                            <span className="ml-2 text-gray-500">載入中...</span>
                        </div>
                    ) : (
                        <img
                            src={photos[currentIndex]}
                            alt={`Photo ${currentIndex + 1}`}
                            className={`max-w-full max-h-full object-contain cursor-pointer transition-all duration-300
                                ${slideDirection === 'slide-left' ? 'animate-slide-left' : ''}
                                ${slideDirection === 'slide-right' ? 'animate-slide-right' : ''}`}
                            onClick={handleImageClick}
                            onAnimationEnd={handleAnimationEnd}
                            loading="eager" // 當前圖片優先載入
                        />
                    )}
                </div>

                {/* 左右切換按鈕 - 固定在頁面最左右邊 */}
                <button
                    className="fixed left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
                              bg-white/70 hover:bg-white/90 text-2xl flex items-center justify-center
                              transition-colors z-20
                              disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handlePrev}
                    aria-label="Previous photo"
                    disabled={photos.length <= 1}
                >
                    ❮
                </button>
                <button
                    className="fixed right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
                              bg-white/70 hover:bg-white/90 text-2xl flex items-center justify-center
                              transition-colors z-20
                              disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleNext}
                    aria-label="Next photo"
                    disabled={photos.length <= 1}
                >
                    ❯
                </button>
            </div>

            {/* 縮圖導航 - 響應式懶加載 */}
            {photos.length > 1 && (
                <div className="mt-4 px-2 sm:px-5">
                    {/* 手機版：簡化的圓點指示器 */}
                    <div className="md:hidden flex justify-center items-center space-x-1 mb-3">
                        {photos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleThumbnailClick(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200
                                    ${index === currentIndex 
                                        ? 'bg-blue-500 w-4' 
                                        : 'bg-gray-300 hover:bg-gray-400'}`}
                                aria-label={`Go to photo ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                    {/* 手機版：當前照片前後的縮圖 */}
                    <div className="md:hidden flex justify-center space-x-2 overflow-hidden">
                        {photos.map((photo, index) => {
                            // 只顯示當前照片和前後各一張
                            const isVisible = Math.abs(index - currentIndex) <= 1 || 
                                             (currentIndex === 0 && index === photos.length - 1) ||
                                             (currentIndex === photos.length - 1 && index === 0);
                            
                            if (!isVisible) return null;
                            
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (imageRefs.current[index] = el)}
                                    data-index={index}
                                    onClick={() => handleThumbnailClick(index)}
                                    className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer
                                        ${index === currentIndex 
                                            ? 'border-blue-500 opacity-100 scale-110' 
                                            : 'border-gray-300 opacity-60 hover:opacity-80'}`}
                                >
                                    {loadedImages.has(index) ? (
                                        <img
                                            src={photo}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <div className="w-3 h-3 bg-gray-400 rounded animate-pulse"></div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* 桌面版：完整的縮圖滾動列表 */}
                    <div className="hidden md:flex justify-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                ref={(el) => (imageRefs.current[index] = el)}
                                data-index={index}
                                onClick={() => handleThumbnailClick(index)}
                                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer
                                    ${index === currentIndex 
                                        ? 'border-blue-500 opacity-100' 
                                        : 'border-gray-300 opacity-60 hover:opacity-80'}`}
                            >
                                {loadedImages.has(index) ? (
                                    <img
                                        src={photo}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <div className="w-4 h-4 bg-gray-400 rounded animate-pulse"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
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

                /* 隱藏滾動條 */
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                @media (max-width: 768px) {
                    .h-[400px] {
                        height: 300px;
                    }
                    
                    .fixed.w-12 {
                        width: 2.5rem;
                    }
                    
                    .fixed.h-12 {
                        height: 2.5rem;
                    }
                    
                    .fixed.text-2xl {
                        font-size: 1.25rem;
                    }

                    .fixed.left-4 {
                        left: 0.5rem;
                    }

                    .fixed.right-4 {
                        right: 0.5rem;
                    }

                    /* 手機版縮圖調整 */
                    .w-14.h-14 {
                        min-width: 3.5rem;
                        min-height: 3.5rem;
                    }
                }

                @media (max-width: 480px) {
                    .fixed.left-4 {
                        left: 0.25rem;
                    }

                    .fixed.right-4 {
                        right: 0.25rem;
                    }
                    
                    .px-2 {
                        padding-left: 0.25rem;
                        padding-right: 0.25rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default LazyPhotoGallery;
