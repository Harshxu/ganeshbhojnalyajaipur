import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';

const SignatureDish = () => {
  return (
    <section className="py-24 bg-brand-brown relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Signature Thali Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown via-brand-brown/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Text Content */}
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="lg:w-1/2">
            <h4 className="text-brand-gold text-sm uppercase tracking-[0.2em] font-bold mb-4">Chef's Recommendation</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight mb-6">
              The Royal Rajasthani Thali
            </h2>
            <p className="text-brand-ivory/80 text-lg font-light leading-relaxed mb-8">
              Experience the true essence of Jaipur on a platter. Our signature thali is a carefully curated symphony of flavors, featuring slow-cooked Dal Baati Churma, rich Gatte ki Sabzi, Ker Sangri, and freshly baked breads, ending on a sweet note with Ghevar.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#reservation"
                className="px-8 py-4 bg-brand-gold hover:bg-white text-brand-brown font-semibold rounded-sm transition-all duration-300 w-full sm:w-auto text-center tracking-wide"
              >
                Reserve a Table
              </a>
              <span className="text-brand-gold font-serif text-3xl hidden sm:inline-block">₹450</span>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div variants={fadeIn('left', 'tween', 0.4, 1)} className="lg:w-1/2 relative group w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative rounded-full overflow-hidden border-4 border-brand-gold/30 p-2 shadow-2xl bg-brand-brown/50">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/The_delicious_Rajasthani_food.png/500px-The_delicious_Rajasthani_food.png"
                alt="Royal Rajasthani Thali"
                className="w-full h-full object-cover rounded-full transform group-hover:rotate-3 transition-transform duration-1000 ease-in-out"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:top-10 md:-right-10 bg-brand-maroon text-white w-28 h-28 rounded-full flex items-center justify-center flex-col shadow-xl border-2 border-brand-gold/50"
            >
              <span className="text-xs uppercase tracking-widest font-semibold">100%</span>
              <span className="text-lg font-serif italic">Authentic</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignatureDish;
