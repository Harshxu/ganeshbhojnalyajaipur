import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-charcoal text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
         <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-bold mb-4 block">Get In Touch</span>
         <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
           Visit Us in Jaipur
         </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 rounded-sm overflow-hidden">
          {/* Info Side */}
          <div className="p-10 md:p-16 bg-brand-brown">
            <h3 className="text-3xl font-serif mb-10 text-brand-ivory">Contact Information</h3>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex flex-shrink-0 items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                  <MapPin size={24} className="text-brand-gold group-hover:text-brand-brown transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-2 text-brand-gold">Location</h4>
                  <p className="text-brand-ivory/80 font-light leading-relaxed">
                    KIOSK NO 2, Jyoti Nagar Shopping Center<br />
                    Jyoti Nagar, Lalkothi, Jaipur<br />
                    Rajasthan 302005
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex flex-shrink-0 items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                  <Phone size={24} className="text-brand-gold group-hover:text-brand-brown transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-2 text-brand-gold">Reservation & Queries</h4>
                  <p className="text-brand-ivory/80 font-light leading-relaxed">
                    +91 96808 26565<br />
                    info@ganeshbhojnalyajaipur.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex flex-shrink-0 items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                  <Clock size={24} className="text-brand-gold group-hover:text-brand-brown transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-2 text-brand-gold">Opening Hours</h4>
                  <p className="text-brand-ivory/80 font-light leading-relaxed">
                    Monday - Sunday<br />
                    11:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="w-full relative min-h-[400px]">
            {/* Embedded Google Map iframe for Jyoti Nagar Jaipur */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.615796248981!2d75.78921221142578!3d26.88277259169604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db444a1eb6369%3A0xc3f9829cd1626f21!2sJyothi%20Nagar%2C%20Lalkothi%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ganesh Bhojnalaya Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
