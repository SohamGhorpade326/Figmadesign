import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-wider">
          ERICA JONES
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
              {link.name.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Get in Touch Button - Desktop */}
        <a href="#contact" className="hidden md:inline-block px-6 py-3 text-sm font-bold bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300">
          GET IN TOUCH
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] absolute top-full left-0 w-full">
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                {link.name.toUpperCase()}
              </a>
            ))}
            <a href="#contact" className="mt-4 px-8 py-4 text-lg font-bold bg-white text-black rounded-full" onClick={() => setIsOpen(false)}>
              GET IN TOUCH
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
