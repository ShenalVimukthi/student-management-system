import NavBar from "./NavBar";
import ImageSlider from "./ImageSlider";

// import images for the slider
import img1 from '../assets/images/student_2.webp';
import img2 from '../assets/images/student_3.png';
import img3 from '../assets/images/student_4.png';

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
        <div>
            {/* Navigation bar  */}
            {/* <NavBar/> */}
            {/*  */}

        </div>
    )
}

export default About;