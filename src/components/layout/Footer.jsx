import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="space-y-6 lg:col-span-1">
          <a href="#home" className="text-3xl font-serif font-bold text-brand-gold tracking-tight block">
            Ganesh Bhojnalaya
          </a>
          <p className="text-brand-ivory/70 font-light leading-relaxed text-sm pr-4">
            A premium dining experience in the heart of Jaipur, serving authentic pure vegetarian Indian cuisine for over 25 years.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-brown transition-colors duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-brown transition-colors duration-300">
              <Instagram size={18} />
            </a>
            <a href="https://www.zomato.com/jaipur/ganesh-bhojnalaya-lal-kothi/order" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-brown transition-colors duration-300 font-bold text-xs" title="Order on Zomato">
              Z
            </a>
            <a href="https://www.swiggy.com/city/jaipur/ganesh-bhojnalaya-jyoti-nagar-lal-kothi-rest129366?source=sharing" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-brown transition-colors duration-300 font-bold text-xs" title="Order on Swiggy">
              S
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-serif text-brand-gold mb-6">Quick Links</h4>
          <ul className="space-y-3 font-light text-brand-ivory/80">
            <li><a href="#about" className="hover:text-brand-gold transition-colors duration-300">Our Story</a></li>
            <li><a href="#menu" className="hover:text-brand-gold transition-colors duration-300">Dine-in Menu</a></li>
            <li><a href="#gallery" className="hover:text-brand-gold transition-colors duration-300">Gallery</a></li>
            <li><a href="#testimonials" className="hover:text-brand-gold transition-colors duration-300">Testimonials</a></li>
            <li><a href="#reservation" className="hover:text-brand-gold transition-colors duration-300">Book a Table</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-serif text-brand-gold mb-6">Contact</h4>
          <ul className="space-y-4 font-light text-brand-ivory/80 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-gold flex-shrink-0 mt-0.5" />
              <a href="https://maps.app.goo.gl/27PF98YjfEmYrtE6A" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">KIOSK NO 2, Jyoti Nagar, Lalkothi, Jaipur 302005</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-gold flex-shrink-0" />
              <a href="tel:+919680826565" className="hover:text-brand-gold transition-colors">+91-9680826565</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-gold flex-shrink-0" />
              <span>info@ganeshbhojnalyajaipur.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-serif text-brand-gold mb-6">Newsletter</h4>
          <p className="text-brand-ivory/70 font-light text-sm mb-4">
            Subscribe to receive updates on our latest specials and events.
          </p>
          <form className="flex border-b border-brand-gold/50 pb-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none outline-none text-brand-ivory w-full placeholder-brand-ivory/40 text-sm"
              required
            />
            <button type="submit" className="text-brand-gold hover:text-white transition-colors uppercase text-xs font-bold tracking-widest pl-2">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-brand-ivory/10 flex flex-col md:flex-row justify-between items-center text-xs text-brand-ivory/50 font-light">
        <p>&copy; {new Date().getFullYear()} Ganesh Bhojnalaya Jaipur. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
