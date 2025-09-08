import NavBar from "./NavBar";
import ImageSlider from "./ImageSlider";

// import images for the slider
import img1 from '../assets/images/student_2.webp';
import img2 from '../assets/images/student_3.png';
import img3 from '../assets/images/student_4.png';
import comma from '../assets/icons/quotes.png';

 // Example images array - replace with your actual images
    const sliderImages = [
        {
            url: img1, // Update with your image paths
            alt: 'Students in classroom'
        },
        {
            url: img2,
            alt: 'Campus view'
        },
        {
            url: img3,
            alt: 'Library study area'
        }
    ];


const About = ()=>{
    return(
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {/*wording section */}
            <div className="relative pt-[120px] pb-20">
                {/* wording grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     {/* wordings about us*/}
                     <div className="space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-5 mb-12">
                            About <span className="text-[#008DFF]">Us</span>
                        </h1>
                        <div className="relative flex flex-wrap gap-4">
                            <span className="absolute top-0 left-0">
                                <img src={comma} alt="opening quote" className="w-12 h-12 transform rotate-180 mt-4" />
                            </span>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-relaxed text-gray-800 px-4 pt-16">
                                <span className="text-[#008DFF] font-semibold">We are </span>  
                                an institute that provides
                                you with the finest tutors who can lead you to success in your 
                                studies. We have a well-qualified team of educators who are willing 
                                to guide you. Let's start your educational journey with us!
                            </p>
                            <span className="absolute bottom-0 right-0 transform translate-y-1/2">
                                <img src={comma} alt="closing quote" className="w-12 h-12" />
                            </span>
                        </div>

                     </div>

                    {/* Image slider column */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="w-full max-w-[713px] aspect-square">
                            <ImageSlider images={sliderImages} />
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default About;