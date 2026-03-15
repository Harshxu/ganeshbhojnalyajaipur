import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';

const Preloader = ({ setLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
      onAnimationComplete={() => setLoading(false)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#1c1c1c', // brand-charcoal for luxury depth
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ color: '#d4af37', filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))' }}
      >
        <UtensilsCrossed size={80} strokeWidth={1.5} />
      </motion.div>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '150px', opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
          marginTop: '40px',
          boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)'
        }}
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        style={{
          color: '#d4af37',
          fontFamily: '"Playfair Display", serif',
          textTransform: 'uppercase',
          letterSpacing: '8px',
          fontSize: '12px',
          marginTop: '20px'
        }}
      >
        Savor The Tradition
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
