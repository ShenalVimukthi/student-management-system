import { useState } from 'react';
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Teachers from "./Teachers";

const Landing = () => {
    const [currentSection, setCurrentSection] = useState('home');

    const handleNavigation = (path) => {
        // Remove the leading slash and set as current section
        const section = path || '/';
        setCurrentSection(section);
    };

    // Render content based on current section
    const renderContent = () => {
        switch(currentSection) {
            case '/about':
                return <About />;
            case '/contact':
                return <Contact />;
            case '/courses':
                return <Courses />;
            case '/teachers':
                return <Teachers />;
            default:
                return <HeroSection />;
        }
    };

    return (
        <div className="bg-white min-h-screen w-full relative">
            <NavBar onNavigation={handleNavigation} />
            <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
                {renderContent()}
            </div>
        </div>
    );
};

export default Landing;