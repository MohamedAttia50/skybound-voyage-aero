import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Plane } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Book Flight', href: '#booking' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-sky rounded-lg">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              SkyWings
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white hover:text-white/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              variant={isScrolled ? "hero" : "glass"} 
              size="sm"
              onClick={() => scrollToSection('#booking')}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  onClick={() => scrollToSection('#booking')}
                >
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;