import ImageSlider from './ImageSlider';

const HeroSection = () => {
    // Example images array - replace with your actual images
    const sliderImages = [
        {
            url: '/src/assets/images/slide1.jpg', // Update with your image paths
            alt: 'Students in classroom'
        },
        {
            url: '/src/assets/images/slide2.jpg',
            alt: 'Campus view'
        },
        {
            url: '/src/assets/images/slide3.jpg',
            alt: 'Library study area'
        }
    ];

    return (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Content */}
            <div className="relative pt-[120px] pb-20">
                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                            The Best
                            <span className="text-[#008DFF]"> Institution</span><br/>
                            For interactive Learning
                        </h1>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-[#008DFF] text-white rounded-full hover:bg-[#0077cc] transition-colors hover:cursor-pointer">
                                Get Started
                            </button>
                        </div>
                    </div>
                    
                    {/* Image Slider */}
                    <div className="relative">
                        <ImageSlider images={sliderImages} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
