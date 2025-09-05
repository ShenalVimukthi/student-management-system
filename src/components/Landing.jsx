import HeroSection from "./HeroSection";
import NavBar from "./NavBar";

const Landing =()=>{
    return(
        <div className="bg-white min-h-[900px] max-w-[1440px] w-full flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
              <NavBar/>
              {/* hero section */}
              <HeroSection/>
              
        </div>
    )
}

export default Landing;