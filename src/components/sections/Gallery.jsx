import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vegetarian_Curry.jpeg/500px-Vegetarian_Curry.jpeg', // Thali
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Punjabi_style_Dal_Makhani.jpg/960px-Punjabi_style_Dal_Makhani.jpg', // Dal Makhani
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Shahi_panner.jpg/960px-Shahi_panner.jpg', // Paneer
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Samosa-and-Chatni.jpg/960px-Samosa-and-Chatni.jpg', // Samosa
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Chana_masala.jpg/960px-Chana_masala.jpg', // Chana Masala
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Palakpaneer_Rayagada_Odisha_0009.jpg/960px-Palakpaneer_Rayagada_Odisha_0009.jpg', // Palak paneer
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-brand-ivory relative">
      <div className="text-center mb-16 px-6">
        <span className="text-brand-maroon text-sm uppercase tracking-[0.2em] font-bold mb-4 block">Visual Journey</span>
        <h2 className="text-4xl md:text-5xl font-serif text-brand-brown font-bold leading-tight">
          A Glimpse of the Experience
        </h2>
      </div>

      <div className="w-full overflow-hidden relative pb-12">
        {/* Gradient overlays for smooth fade at edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-brand-ivory to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-brand-ivory to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max"
             style={{
               animation: 'scroll-left 40s linear infinite',
             }}
        >
          {/* We duplicate the images array to create a seamless loop */}
          {[...images, ...images].map((img, idx) => (
            <div 
              key={idx}
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-4 overflow-hidden rounded-xl group cursor-pointer flex-shrink-0 shadow-lg"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-6">
                <span className="text-brand-gold">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="scale-75 group-hover:scale-100 transition-transform duration-500"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </span>
              </div>
              <img 
                src={img} 
                alt={`Gallery experience snapshot`} 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>

        {/* CSS for the animation injected inline to avoid modifying tailwind.config right now */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - ${images.length * 16}px)); }
          }
          .flex:hover {
            animation-play-state: paused !important;
          }
        `}} />
      </div>
    </section>
  );
};

export default Gallery;
