import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Brands', href: '#brands' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Catalog', href: 'https://wa.me/c/917498093633', external: true },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-maroon-900/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Mauli Furnishing"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className={`font-playfair font-bold text-lg leading-tight transition-colors duration-300 ${scrolled ? 'text-maroon-900' : 'text-white'}`}>
                Mauli Furnishing
              </h1>
              <p className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? 'text-gold-600' : 'text-gold-300'}`}>
                Home Decor & Mattresses
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-maroon-700/10 ${
                  scrolled
                    ? 'text-maroon-900/80 hover:text-maroon-700'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919999999999"
              className="ml-4 flex items-center gap-2 bg-gradient-to-r from-maroon-700 to-maroon-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:from-maroon-800 hover:to-maroon-900 transition-all duration-300 shadow-lg shadow-maroon-900/20 hover:shadow-maroon-900/40 hover:-translate-y-0.5"
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-maroon-900 hover:bg-maroon-50' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-lg border-t border-maroon-100/50 px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-maroon-900/80 hover:text-maroon-700 hover:bg-maroon-50 rounded-xl text-sm font-medium transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+919999999999"
            className="flex items-center justify-center gap-2 mt-3 bg-gradient-to-r from-maroon-700 to-maroon-800 text-white px-5 py-3 rounded-xl text-sm font-semibold"
          >
            <Phone size={15} />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
