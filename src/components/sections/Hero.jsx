import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from '../../utils/motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-brown">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Premium Indian Restaurant Interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center">
        <motion.div
           variants={staggerContainer(0.2, 0)}
           initial="hidden"
           animate="show"
           className="flex flex-col items-center"
        >
          <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="mb-4">
            <span className="text-brand-gold font-medium tracking-widest uppercase text-sm md:text-base">
              Welcome to Jaipur's Finest
            </span>
          </motion.div>

          <motion.h1 
            variants={textVariant(0.4)}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight mb-6 tracking-tight max-w-4xl"
          >
            Traditional Taste. <br />
            <span className="italic font-light opacity-90">Premium Experience.</span>
          </motion.h1>

          <motion.p 
            variants={fadeIn('up', 'tween', 0.6, 1)}
            className="text-brand-ivory/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
          >
            Experience authentic Indian culinary heritage presented with modern elegance and warm hospitality.
          </motion.p>

          <motion.div 
            variants={fadeIn('up', 'tween', 0.8, 1)}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <a 
              href="#menu" 
              className="px-8 py-4 bg-brand-gold hover:bg-white text-brand-brown font-semibold rounded-sm transition-all duration-300 w-full sm:w-auto text-center tracking-wide"
            >
              Explore Menu
            </a>
            <a 
              href="#reservation" 
              className="px-8 py-4 bg-transparent border border-white/50 text-white hover:bg-white hover:text-brand-brown font-semibold rounded-sm transition-all duration-300 w-full sm:w-auto text-center tracking-wide"
            >
              Reserve a Table
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
