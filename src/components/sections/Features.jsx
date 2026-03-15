import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Leaf, HeartHandshake, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Authentic Taste',
    description: 'Traditional recipes brought to life with hand-picked spices.',
    icon: <ChefHat size={32} className="text-brand-gold group-hover:text-brand-maroon transition-colors duration-300" />,
  },
  {
    title: 'Fresh Ingredients',
    description: 'We source the best local vegetables, dairy, and pure ghee.',
    icon: <Leaf size={32} className="text-brand-gold group-hover:text-brand-maroon transition-colors duration-300" />,
  },
  {
    title: '100% Hygienic',
    description: 'Spotless kitchens and rigorous cleanliness standards.',
    icon: <ShieldCheck size={32} className="text-brand-gold group-hover:text-brand-maroon transition-colors duration-300" />,
  },
  {
    title: 'Warm Hospitality',
    description: 'Experience dining that feels like home, every single time.',
    icon: <HeartHandshake size={32} className="text-brand-gold group-hover:text-brand-maroon transition-colors duration-300" />,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-brand-brown relative text-brand-ivory">
      {/* Background pattern placeholder */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-gold text-sm uppercase tracking-[0.2em] font-bold mb-4"
          >
            Why Choose Us
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight"
          >
            The Ganesh Bhojnalaya Promise
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-brand-charcoal/40 p-10 rounded-sm border border-brand-sand/10 hover:border-brand-gold/30 hover:bg-brand-charcoal/60 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-brand-ivory/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-4 tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-brand-ivory/70 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
