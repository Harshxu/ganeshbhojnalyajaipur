import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Thali', 'Curries', 'Snacks', 'Desserts'];

const menuItems = [
  {
    id: 1,
    name: 'Maharaja Special Thali',
    description: 'A grand feast featuring Shahi Paneer, Dal Makhani, Mixed Veg, Raita, Pulao, 2 Butter Naan, Papad, and Gulab Jamun.',
    price: '₹350',
    category: 'Thali',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vegetarian_Curry.jpeg/500px-Vegetarian_Curry.jpeg',
  },
  {
    id: 2,
    name: 'Kadhai Paneer',
    description: 'Fresh cottage cheese cooked with bell peppers, onions, and freshly ground spices in a rich tomato gravy.',
    price: '₹220',
    category: 'Curries',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Shahi_panner.jpg/960px-Shahi_panner.jpg',
  },
  {
    id: 3,
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils simmered overnight with butter and fresh cream. A timeless classic.',
    price: '₹180',
    category: 'Curries',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Punjabi_style_Dal_Makhani.jpg/960px-Punjabi_style_Dal_Makhani.jpg',
  },
  {
    id: 4,
    name: 'Punjabi Samosa',
    description: 'Crispy pastry filled with spiced potatoes and peas, served with tangy tamarind and mint chutneys.',
    price: '₹40',
    category: 'Snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Samosa-and-Chatni.jpg/960px-Samosa-and-Chatni.jpg',
  },
  {
    id: 5,
    name: 'Regular Veg Thali',
    description: 'A comforting complete meal: Seasonal Veg, Dal Fry, Jeera Rice, 4 Butter Roti, Salad, and Pickle.',
    price: '₹180',
    category: 'Thali',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Palakpaneer_Rayagada_Odisha_0009.jpg/960px-Palakpaneer_Rayagada_Odisha_0009.jpg',
  },
  {
    id: 6,
    name: 'Gulab Jamun',
    description: 'Soft, melt-in-the-mouth milk dumplings deep-fried and soaked in flavored sugar syrup.',
    price: '₹60',
    category: 'Desserts',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bowl_of_Gulab_Jamuns.jpg/960px-Bowl_of_Gulab_Jamuns.jpg',
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMenu = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-brand-maroon text-sm uppercase tracking-[0.2em] font-bold mb-4 block">Our Culinary Masterpieces</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-brown font-bold leading-tight">
            Discover Our Menu
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-brand-brown border-brand-brown text-white shadow-lg'
                  : 'bg-transparent border-brand-charcoal/20 text-brand-charcoal hover:border-brand-brown'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[400px]">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredMenu.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 30, transition: { duration: 0.2 } }}
                transition={{ 
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4, type: "spring", stiffness: 200, damping: 20 },
                  y: { duration: 0.4, type: "spring", stiffness: 200, damping: 20 }
                }}
                key={item.id}
                className="group cursor-pointer bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-premium transition-shadow duration-500 border border-brand-sand/50 h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 right-4 bg-brand-ivory text-brand-brown px-4 py-1.5 font-bold shadow-md z-20 rounded-sm font-serif">
                    {item.price}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-serif text-brand-brown font-semibold tracking-wide">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-brand-charcoal/70 text-sm leading-relaxed font-light line-clamp-3 mb-6">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-brand-sand/40 flex justify-between items-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-brand-maroon font-medium text-sm tracking-wide">View Details</span>
                    <span className="text-brand-maroon">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-16">
          <a href="#" className="inline-flex items-center justify-center px-8 py-4 border border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white font-medium tracking-widest uppercase text-sm transition-all duration-300">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
