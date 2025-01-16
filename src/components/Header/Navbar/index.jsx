import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.png';
import "./navbar.css"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/contact-us', label: 'Contact Us' },
    { to: '/about-us', label: 'About Us' },
    // { to: '/blog', label: 'Blog' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ecece2] shadow-md" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-20 h-16 overflow-hidden flex items-center justify-center">
              <img 
                src={logo} 
                alt="Savoury Soirée Logo"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                style={{width:"100px"}}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#f1a986] transition-colors duration-200">
                Savoury Soirée
              </span>
              <span className="text-sm font-serif text-black">
                Catering & Events
              </span>
            </div>
          </Link> 

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-black hover:text-[#f1a986] px-3 py-2 text-m font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#f1a986] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact-us"
              className="bg-[#f1a986] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#e08b66] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Reserve Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#f1a986] hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f1a986]"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-4 py-3 space-y-2 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#f1a986] hover:bg-gray-50 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact-us"
            className="block w-full mt-4 bg-[#f1a986] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#e08b66] transition-all duration-200 text-center"
            onClick={() => setIsOpen(false)}
          >
            Reserve Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;