/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

interface PhotoCarouselProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showNavigation?: boolean;
  showFullscreen?: boolean;
  className?: string;
  height?: string;
  width?: string;
  imagesPerView?: number; // New prop to control how many images show at once
}

export function PhotoCarousel({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
  showIndicators = true,
  showNavigation = true,
  showFullscreen = true,
  className = "",
  height = "h-96",
  width = "w-full",
  imagesPerView = 3 // Default to showing 3 images
}: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0); // Track which image to show in fullscreen

  // Calculate how many images to show based on screen size
  const getImagesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile: 1 image
      if (window.innerWidth < 1024) return 2; // Tablet: 2 images
      return imagesPerView; // Desktop: 3+ images
    }
    return imagesPerView;
  };

  const [currentImagesPerView, setCurrentImagesPerView] = useState(getImagesPerView());

  // Update images per view on resize
  useEffect(() => {
    const handleResize = () => {
      setCurrentImagesPerView(getImagesPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imagesPerView]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, images.length - currentImagesPerView);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlay, autoPlayInterval, images.length, currentImagesPerView]);

  // Pause auto-play on hover
  const handleMouseEnter = useCallback(() => {
    if (autoPlay) setIsAutoPlaying(false);
  }, [autoPlay]);

  const handleMouseLeave = useCallback(() => {
    if (autoPlay) setIsAutoPlaying(true);
  }, [autoPlay]);

  // Navigation functions
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, images.length - currentImagesPerView);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  }, [images.length, currentImagesPerView]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, images.length - currentImagesPerView);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  }, [images.length, currentImagesPerView]);

  const goToSlide = useCallback((index: number) => {
    const maxIndex = Math.max(0, images.length - currentImagesPerView);
    setCurrentIndex(Math.min(index, maxIndex));
  }, [images.length, currentImagesPerView]);

  // Get current images to display
  const getCurrentImages = () => {
    return images.slice(currentIndex, currentIndex + currentImagesPerView);
  };

  // Handle fullscreen for specific image
  const handleFullscreen = useCallback((imageIndex: number) => {
    setFullscreenImageIndex(imageIndex);
    setIsFullscreen(true);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, isFullscreen]);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!images || images.length === 0) {
    return (
      <div className={`${width} ${height} bg-gray-200 rounded-lg flex items-center justify-center`}>
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  const currentImages = getCurrentImages();
  const maxIndex = Math.max(0, images.length - currentImagesPerView);

  const carouselContent = (
    <div
      className={`${width} ${height} relative overflow-hidden rounded-lg ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images Grid */}
      <div className={`grid h-full gap-4 p-4 transition-all duration-500 ease-in-out ${
        currentImagesPerView === 1 ? 'grid-cols-1' :
        currentImagesPerView === 2 ? 'grid-cols-2' : 'grid-cols-3'
      }`}>
        {currentImages.map((image, index) => (
          <div key={`${currentIndex}-${index}`} className="relative group">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              priority={index === 0}
            />

            {/* Caption */}
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 rounded-b-lg">
                <p className="text-center text-xs md:text-sm font-medium">{image.caption}</p>
              </div>
            )}

            {/* Fullscreen Button for Individual Image */}
            {showFullscreen && (
              <button
                onClick={() => handleFullscreen(currentIndex + index)}
                className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
                aria-label="Open fullscreen"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showNavigation && images.length > currentImagesPerView && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous images"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next images"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && images.length > currentImagesPerView && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {Array.from({ length: Math.ceil(images.length / currentImagesPerView) }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * currentImagesPerView)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / currentImagesPerView) === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image group ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > currentImagesPerView && (
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
          {currentIndex + 1}-{Math.min(currentIndex + currentImagesPerView, images.length)} / {images.length}
        </div>
      )}
    </div>
  );

  // Fullscreen Modal - Show the specific image that was clicked
  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Fullscreen Image */}
          <div className="relative w-full h-full">
            <Image
              src={images[fullscreenImageIndex].src}
              alt={images[fullscreenImageIndex].alt}
              fill
              className="object-contain"
            />

            {/* Fullscreen Caption */}
            {images[fullscreenImageIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
                <p className="text-center text-lg">{images[fullscreenImageIndex].caption}</p>
              </div>
            )}
          </div>

          {/* Close Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Fullscreen Image Counter */}
          <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-lg">
            {fullscreenImageIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    );
  }

  return carouselContent;
}
