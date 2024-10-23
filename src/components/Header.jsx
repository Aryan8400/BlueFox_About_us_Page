import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation to track current path

const Header = () => {
  // State to manage the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  // State to track if "Partner With Us" is clicked
  const [isPartnerPage, setIsPartnerPage] = useState(false);
  const location = useLocation(); // Hook to get the current route

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  // Function to handle "Partner With Us" click
  const handlePartnerClick = () => {
    setIsPartnerPage(true); // Activate the partner page linksi\
  };

  // Reset isPartnerPage state if the user navigates away from the Partner With Us section
  useEffect(() => {
    if (location.pathname !== '/partner') {
      setIsPartnerPage(false); // Deactivate partner mode if not on Partner With Us section
    }
  }, [location.pathname]);

  // Conditionally render links based on the route and partner page status
  const renderLinks = () => {
    if (location.pathname === '/blog' || location.pathname === '/gst-news') {
      // If on the Blog or GST News page, only show Home, Blog, and GST News
      return (
        <>
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/blog" className="hover:text-red-500">Blog</Link>
          <Link to="/gst-news" className="hover:text-red-500">GST News</Link>
        </>
      );
    } else if (isPartnerPage) {
      // If "Partner With Us" is clicked, show Blog and FAQs along with other default links
      return (
        <>
          <a href="#" className="hover:text-red-500">Try Mobile App</a>
          <Link to="/" className="hover:text-red-500">Home</Link>
          <a href="#" className="hover:text-red-500">Pricing</a>
          <Link to="/about-us" className="hover:text-red-500">About Us</Link>
          <a href="#" className="hover:text-red-500">Desktop</a>
          <Link to="/blog" className="hover:text-red-500">Blog</Link>
          <a href="#" className="hover:text-red-500">FAQs</a>
        </>
      );
    } else {
      // Default set of links (when not on the Blog page, GST News page, or Partner With Us mode)
      return (
        <>
          <a href="#" className="hover:text-red-500">Try Mobile App</a>
          <Link to="/" className="hover:text-red-500">Home</Link>
          <a href="#" className="hover:text-red-500">Pricing</a>
          <Link to="/about-us" className="hover:text-red-500">About Us</Link>
          <a href="#" className="hover:text-red-500">Desktop</a>
        </>
      );
    }
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4 lg:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Vyapar Logo" className="w-14 h-19 mr-2" />
          <span className="text-2xl font-bold text-red-600">Vyapar</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex space-x-6 text-lg font-medium text-gray-700">
          {renderLinks()} {/* Render links conditionally */}
          {/* Hide "Partner With Us" and "Login" on Blog and GST News pages */}
          {(location.pathname !== '/blog' && location.pathname !== '/gst-news') && (
            <>
              <a href="#" onClick={handlePartnerClick} className="hover:text-red-500">Partner With Us</a>
              <a href="#" className="hover:text-red-500">Login</a>
            </>
          )}
        </nav>

        {/* Mobile Menu */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50`}
        >
          <div className="flex flex-col space-y-4 p-4 text-lg font-medium text-gray-700">
            {renderLinks()} {/* Render links conditionally */}
            {/* Hide "Partner With Us" and "Login" on Blog and GST News pages */}
            {(location.pathname !== '/blog' && location.pathname !== '/gst-news') && (
              <>
                <a href="#" onClick={handlePartnerClick} className="hover:text-red-500">Partner With Us</a>
                <a href="#" className="hover:text-red-500">Login</a>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;