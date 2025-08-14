import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/school', label: 'L\'école' },
    { path: '/events', label: 'Événements' },
    { path: '/media', label: 'Médias' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-poppins font-bold text-xl text-dark hover:text-primary transition-colors">
            <Music className="h-8 w-8 text-primary" />
            <span>La Lyre</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* --- MODIFICATION ICI --- */}
          {/* Member Space Button */}
          <div className="hidden lg:block">
            <Link
              to="/connexion"
              className="bg-accent hover:bg-accent/90 text-white font-inter font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Espace Membre
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-dark hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block font-inter font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-dark'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* --- MODIFICATION ICI --- */}
              <Link
                to="/connexion"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-inter font-semibold px-6 py-3 rounded-full transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Espace Membre
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;