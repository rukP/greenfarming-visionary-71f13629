
import React, { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          {/* <span className="bg-sarura-500 text-white h-8 w-8 rounded-md flex items-center justify-center font-display text-xl">S</span>
          <span className="text-xl font-display font-bold text-gray-900">Sarura</span> */}
          <img src="/logo.png" alt="logo" width={150} height={150} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-sarura-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#download"
            className="btn-hover inline-flex items-center bg-sarura-500 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-sarura-500/20"
          >
            <Download size={16} className="mr-1.5" />
            Download
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 animate-fade-in">
          <nav className="container mx-auto py-5 px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-sarura-500 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#download"
              className="btn-hover inline-flex items-center justify-center bg-sarura-500 text-white px-5 py-3 rounded-full text-base font-medium shadow-lg shadow-sarura-500/20 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={18} className="mr-2" />
              Download App
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
