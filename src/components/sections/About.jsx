import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-premium group">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.8 }}
              className="w-full h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Chefs preparing authentic Indian food" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/60 to-transparent pointer-events-none"></div>
            
            {/* Experience Badge */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-brand-ivory px-6 py-4 rounded-sm shadow-xl flex items-center gap-4">
              <span className="text-4xl font-serif text-brand-maroon font-bold">25+</span>
              <span className="text-sm font-medium uppercase tracking-wider text-brand-charcoal leading-tight">Years of<br/>Excellence</span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div variants={fadeIn('left', 'tween', 0.4, 1)} className="flex flex-col justify-center">
            <h4 className="text-brand-maroon text-sm uppercase tracking-[0.2em] font-bold mb-4">Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-brown font-bold leading-tight mb-8">
              A Legacy of Taste in the Heart of Jaipur
            </h2>
            
            <div className="space-y-6 text-brand-charcoal/80 text-lg font-light leading-relaxed">
              <p>
                Founded in the vibrant city of Jaipur, Ganesh Bhojnalaya has been a symbol of authentic, heartwarming Indian cuisine for decades. We believe that food is more than just sustenance; it is an experience that brings families together, honoring age-old traditions and flavors.
              </p>
              <p>
                Our chefs meticulously craft every dish using the finest, freshest ingredients and traditional spice blends passed down through generations. From rich, slow-cooked curries to freshly baked breads, every bite tells a story of passion, hygiene, and unparalleled hospitality.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h5 className="font-serif text-2xl text-brand-brown mb-2">Authentic</h5>
                <p className="text-sm text-brand-charcoal/70">Recipes rooted in Rajasthani & North Indian heritage.</p>
              </div>
              <div>
                <h5 className="font-serif text-2xl text-brand-brown mb-2">Hygienic</h5>
                <p className="text-sm text-brand-charcoal/70">Uncompromising standards in preparation and serving.</p>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="#menu" 
                className="inline-flex items-center gap-2 pb-2 border-b border-brand-maroon text-brand-maroon font-semibold tracking-wide hover:text-brand-brown hover:border-brand-brown transition-colors duration-300"
              >
                Discover Our Menu
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
