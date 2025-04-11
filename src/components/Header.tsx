import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À Propos' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className="fixed w-full bg-black z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 z-20">
            <img src="/pictures/MasterpropreLogo.png" alt="Masterpropre Logo" className="h-12 w-auto" />
            <span className="text-2xl font-semibold text-white">Masterpropre</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-white hover:text-primary-400 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuClick}
            className="md:hidden z-20 text-white hover:text-primary-400 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black/75 backdrop-blur-sm transform transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            } md:hidden`}
          >
            <div className="flex flex-col h-[300px] max-w-[250px] ml-auto bg-black/90">
              {/* Mobile Navigation */}
              <nav className="flex flex-col px-4 pt-16 pb-4 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-base text-white hover:text-primary-400 py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-200"
                  >
                    <span>{item.label}</span>
                  </a>
                ))}
                <div className="flex items-center space-x-4 pt-4 px-3">
                  <a href="#" className="text-white hover:text-primary-400 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-white hover:text-primary-400 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;