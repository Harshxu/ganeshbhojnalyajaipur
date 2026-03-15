import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, StarHalf, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajiv Sharma',
    role: 'Local Food Critic',
    text: 'Ganesh Bhojnalaya captures the very soul of Jaipur. The taste is remarkably authentic, and the presentation feels luxurious yet deeply rooted in tradition. A must-visit for family dining.',
  },
  {
    name: 'Priya Patel',
    role: 'Traveler',
    text: 'I have traveled across Rajasthan, but the thali here is unmatched. The cleanliness, the warm smiles from the staff, and the richness of the curries made our evening memorable.',
  },
  {
    name: 'Anand Singh',
    role: 'Regular Patron',
    text: 'We have been coming here for years, and the quality never drops. It’s comforting, hygienic, and consistently delicious. The new ambiance is simply breathtaking.',
  },
  {
    name: 'Neha Gupta',
    role: 'Food Blogger',
    text: 'Absolutely fantastic! The Dal Baati Churma is top-notch, and the paneer dishes are incredibly fresh. Every bite feels like a celebration of authentic Rajasthani flavors.',
  },
  {
    name: 'Vikas Meena',
    role: 'Local Resident',
    text: 'A hidden gem that has evolved beautifully. The perfect blend of a premium dining experience with the comforting taste of home food. Highly recommend the special thali.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Tourist',
    text: 'Finding this place was the highlight of our Jaipur trip! The spices were perfectly balanced, and the hospitality truly made us feel like royalty. Will definitely come back.',
  },
];

const RatingCard = ({ platform, rating, label }) => (
  <div className="flex flex-col items-center justify-center p-6 border border-brand-gold/20 rounded-lg bg-brand-brown/50 backdrop-blur-sm">
    <div className="flex text-brand-gold mb-2">
      <Star className="fill-current w-5 h-5 mx-0.5" />
      <Star className="fill-current w-5 h-5 mx-0.5" />
      <Star className="fill-current w-5 h-5 mx-0.5" />
      <Star className="fill-current w-5 h-5 mx-0.5" />
      <StarHalf className="fill-current w-5 h-5 mx-0.5" />
    </div>
    <div className="text-3xl font-serif text-brand-ivory font-bold mb-1">{rating}</div>
    <div className="text-brand-gold font-medium uppercase tracking-widest text-sm">{platform}</div>
    {label && <div className="text-brand-ivory/60 text-xs mt-1">{label}</div>}
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-brand-brown text-brand-ivory relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Quote className="w-16 h-16 text-brand-gold/40 mx-auto mb-10" />
          
          <div className="h-[250px] md:h-[200px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full"
              >
                <p className="text-xl md:text-3xl font-serif leading-relaxed mb-8 font-light italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <h5 className="text-brand-gold text-lg font-bold tracking-widest uppercase mb-1">
                  {testimonials[currentIndex].name}
                </h5>
                <span className="text-brand-ivory/60 text-sm">
                  {testimonials[currentIndex].role}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-brown transition-colors duration-300 focus:outline-none"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-brand-gold' : 'bg-brand-gold/30 hover:bg-brand-gold/60'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-brown transition-colors duration-300 focus:outline-none"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Ratings and Trust Section */}
        <div className="border-t border-brand-gold/20 pt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif text-brand-gold mb-2">Loved by Thousands</h3>
            <p className="text-brand-ivory/80">Consistently rated excellent across all major platforms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RatingCard platform="Zomato" rating="4.3" label="10K+ Delivery Reviews" />
            <RatingCard platform="Swiggy" rating="4.3" label="5K+ Delivery Reviews" />
            <RatingCard platform="Google Maps" rating="4.3" label="2K+ Dining Reviews" />
            
            {/* FSSAI Badge */}
            <div className="flex flex-col items-center justify-center p-6 border border-brand-gold/20 rounded-lg bg-brand-brown/50 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-gold/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <ShieldCheck className="w-12 h-12 text-brand-gold mb-3 relative z-10" strokeWidth={1.5} />
              <div className="text-xl font-serif text-brand-ivory font-bold mb-1 relative z-10">FSSAI</div>
              <div className="text-brand-gold font-medium uppercase tracking-widest text-sm text-center relative z-10">Certified</div>
              <div className="text-brand-ivory/60 text-xs mt-1 text-center relative z-10">100% Quality Assurance</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
