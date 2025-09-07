import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length]);

    // Manual navigation
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-[713px] h-[713px] mx-auto">
            {/* Main content container */}
            <div className="relative w-[713px] h-[713px] overflow-hidden rounded-lg">
                {/* Images */}
                <div 
                    className="absolute w-[713px] h-[713px] transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    <div className="flex">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="w-[713px] h-[713px] flex-shrink-0 flex items-center justify-center"
                                style={{ transform: `translateX(${index * 100}%)` }}
                            >
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-[713px] h-[713px] object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>

            {/* Vertical Dots Navigation */}
            <div className="flex flex-col items-end justify-center space-y-4 ml-8 mr-4 absolute right-0 top-1/2 -translate-y-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300
                            ${index === currentIndex 
                                ? 'bg-[#008DFF]' 
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ImageSlider;
