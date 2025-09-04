import logo from '../assets/images/logo.png';

const NavBar = () => {
  return (
    <div className="w-full min-h-[100px] bg-transparent fixed top-0 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      {/* Brand/Logo placeholder */}
      <div className="flex-shrink-0">
        <img src={logo} className='w-10 sm:w-12 md:w-40 h-auto object-contain'/>
      </div>
      {/* Navigation links */}
      <div className="flex-grow flex justify-start">
        <ul className="hidden sm:flex space-x-4 sm:space-x-6 md:space-x-8 text-[#008DFF] items-center">
          <li className="hover:text-[#0077cc] transition-colors hover:cursor-pointer">About</li>
          <li className="hover:text-[#0077cc] transition-colors hover:cursor-pointer">Contact</li>
          <li className="hover:text-[#0077cc] transition-colors hover:cursor-pointer">Courses</li>
          <li className="hover:text-[#0077cc] transition-colors hover:cursor-pointer">Teachers</li>
        </ul>
      </div>
      {/* Auth links */}
      <div className="flex-grow flex justify-end">
        <ul className="hidden sm:flex space-x-4 sm:space-x-6 md:space-x-8 text-[#008DFF] items-center">
          <li className="hover:text-[#0077cc] transition-colors">
            <button className='hover:cursor-pointer'>Login</button>
          </li>
          <li>
            <button className="px-6 py-2 bg-[#008DFF] rounded-[20px] text-white hover:bg-[#0077cc] hover:cursor-pointer transition-colors mx-2 sm:mx-3 md:mx-4">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      {/* Mobile menu toggle (placeholder for future scalability) */}
      <button className="sm:hidden text-white text-2xl">☰</button>
    </div>
  );
};

export default NavBar;