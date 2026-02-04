
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首 页', href: '#home' },
    { name: '非遗传承', href: '#heritage' },
    { name: '盛况回顾', href: '#gallery' },
    { name: '巡游地图', href: '#route' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-full bg-traditional-red flex items-center justify-center text-white font-bold ${!isScrolled && 'border-2 border-white'}`}>
            大
          </div>
          <span className={`font-serif-sc text-xl font-black tracking-widest ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            大步巡游
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-widest transition-colors ${
                isScrolled ? 'text-stone-700 hover:text-traditional-red' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
            {/* Mobile menu toggle would go here */}
            <button className={`${isScrolled ? 'text-stone-900' : 'text-white'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
