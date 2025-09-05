import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/images/logo.png';

const NavBar = ({ onLogin, onSignUp }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Courses', path: '/courses' },
    { name: 'Teachers', path: '/teachers' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full min-h-[100px] bg-transparent fixed top-0 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-full">
        {/* Brand/Logo */}
        <Link to="/" className="flex-shrink-0" aria-label="Home">
          <img src={logo} alt="Company Logo" className="w-10 sm:w-12 md:w-40 h-auto object-contain"/>
        </Link>

        {/* Navigation links */}
        <nav className="flex-grow">
          <ul className="hidden sm:flex space-x-4 sm:space-x-6 md:space-x-8 text-[#008DFF] items-center justify-start">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`hover:text-[#0077cc] transition-colors hover:cursor-pointer ${
                    location.pathname === link.path ? 'text-[#0077cc] font-semibold' : ''
                  }`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth links */}
        <div className="flex items-center">
          <ul className="hidden sm:flex space-x-4 sm:space-x-6 md:space-x-8 text-[#008DFF] items-center">
            <li>
              <button
                onClick={onLogin}
                className="hover:text-[#0077cc] transition-colors"
                aria-label="Login"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={onSignUp}
                className="px-6 py-2 bg-[#008DFF] rounded-[20px] text-white hover:bg-[#0077cc] transition-colors mx-2 sm:mx-3 md:mx-4"
                aria-label="Sign Up"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-[#008DFF] p-2"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="sm:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
          <ul className="space-y-4">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`block text-[#008DFF] hover:text-[#0077cc] transition-colors ${
                    location.pathname === link.path ? 'text-[#0077cc] font-semibold' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLogin();
                }}
                className="block w-full text-left text-[#008DFF] hover:text-[#0077cc] transition-colors"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onSignUp();
                }}
                className="block w-full px-6 py-2 bg-[#008DFF] rounded-[20px] text-white hover:bg-[#0077cc] transition-colors"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export default NavBar;