import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/layout/Preloader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Features from './components/sections/Features';
import Menu from './components/sections/Menu';
import SignatureDish from './components/sections/SignatureDish';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Reservation from './components/sections/Reservation';
import Contact from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  // We can let Preloader call setLoading(false) via onAnimationComplete,
  // but to be safe we'll provide a local fallback.
  useEffect(() => {
    // Timeout of 3.5 seconds to ensure all preloader animations finish before exit
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-brand-ivory text-brand-charcoal overflow-hidden selection:bg-brand-gold/30">
          <Navbar />

          <main>
            <Hero />
            <About />
            <Features />
            <Menu />
            <SignatureDish />
            <Gallery />
            <Testimonials />
            <Reservation />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
