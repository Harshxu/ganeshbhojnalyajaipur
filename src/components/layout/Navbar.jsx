import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-brand-ivory/90 backdrop-blur-md shadow-premium py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl font-serif font-bold text-brand-brown tracking-tight">
          Ganesh Bhojnalaya
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-maroon relative group',
                isScrolled ? 'text-brand-charcoal' : 'text-brand-charcoal' // Adjust if hero is dark
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-brand-maroon transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Delivery */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://www.zomato.com/jaipur/ganesh-bhojnalaya-lal-kothi/order"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-brand-charcoal hover:text-brand-maroon tracking-wider uppercase transition-colors"
          >
            Zomato
          </a>
          <a
            href="https://www.swiggy.com/city/jaipur/ganesh-bhojnalaya-jyoti-nagar-lal-kothi-rest129366?source=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-brand-charcoal hover:text-brand-maroon tracking-wider uppercase transition-colors"
          >
            Swiggy
          </a>
          <a
            href="#reservation"
            className="px-6 py-2.5 bg-brand-brown hover:bg-brand-maroon text-white text-sm font-medium rounded-sm transition-colors duration-300 shadow-md hover:shadow-xl ml-2"
          >
            Reservation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-brand-brown relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-brand-ivory shadow-premium border-t border-brand-sand lg:hidden"
          >
            <nav className="flex flex-col py-6 px-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-brand-brown hover:text-brand-maroon transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-brand-sand flex flex-col space-y-4">
                <a
                  href="https://www.zomato.com/jaipur/ganesh-bhojnalaya-lal-kothi/order"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-brand-brown hover:text-brand-maroon transition-colors"
                >
                  Order on Zomato
                </a>
                <a
                  href="https://www.swiggy.com/city/jaipur/ganesh-bhojnalaya-jyoti-nagar-lal-kothi-rest129366?source=sharing"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-brand-brown hover:text-brand-maroon transition-colors"
                >
                  Order on Swiggy
                </a>
                <a
                  href="#reservation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block text-center px-6 py-3 bg-brand-brown text-white font-medium rounded-sm w-full mt-2"
                >
                  Book a Table
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
