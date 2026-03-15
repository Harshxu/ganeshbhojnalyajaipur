import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, X } from 'lucide-react';

const FORM_SUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/arpitakumawat1999@gmail.com';

const formatTimeTo12Hour = (timeValue) => {
  if (!timeValue) {
    return '';
  }

  const [hoursString, minutes] = timeValue.split(':');
  const hours = Number(hoursString);

  if (Number.isNaN(hours) || !minutes) {
    return timeValue;
  }

  const period = hours >= 12 ? 'pm' : 'am';
  const normalizedHours = hours % 12 || 12;

  return `${normalizedHours}:${minutes} ${period}`;
};

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });

  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: 'success', // 'success' | 'error'
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedTime = formatTimeTo12Hour(formData.time);
    const payload = {
      name: formData.name,
      phone: formData.phone,
      reservation_date: formData.date,
      reservation_time: formattedTime,
      guests: formData.guests,
      _subject: `New reservation request from ${formData.name}`,
      _captcha: 'false',
      _template: 'table',
    };

    if (formData.email.trim()) {
      payload.email = formData.email.trim();
    }

    try {
      const response = await fetch(FORM_SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to send reservation request.');
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
      });

      setModalConfig({
        isOpen: true,
        type: 'success',
        message: 'Thank you for choosing us! Your reservation request has been received.'
        //message: 'Thank you! Your reservation request has been received. We will confirm your table shortly.'
      });
    } catch (error) {
      console.error('Reservation submission failed:', error);
      setModalConfig({
        isOpen: true,
        type: 'error',
        message: 'Sorry, we could not send your reservation request. Please try calling us directly.'
      });
    }
  };

  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="reservation" className="py-24 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white rounded-sm shadow-premium overflow-hidden flex flex-col lg:flex-row">
          {/* Form Side */}
          <div className="lg:w-1/2 p-10 md:p-16">
            <h4 className="text-brand-gold text-sm uppercase tracking-[0.2em] font-bold mb-4">Book a Table</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-brown font-bold leading-tight mb-8">
              Make a Reservation
            </h2>
            <p className="text-brand-charcoal/70 mb-10 font-light">
              We recommend booking at least 24 hours in advance. For parties larger than 10, please contact us directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b-2 border-brand-sand bg-transparent px-0 py-2 focus:outline-none focus:border-brand-brown transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b-2 border-brand-sand bg-transparent px-0 py-2 focus:outline-none focus:border-brand-brown transition-colors duration-300"
                    placeholder="+91 96808 26565"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-brand-charcoal mb-2">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border-b-2 border-brand-sand bg-transparent px-0 py-2 focus:outline-none focus:border-brand-brown transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-brand-charcoal mb-2">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full border-b-2 border-brand-sand bg-transparent px-0 py-2 focus:outline-none focus:border-brand-brown transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-brand-charcoal mb-2">Guests</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full border-b-2 border-brand-sand bg-transparent px-0 py-2 focus:outline-none focus:border-brand-brown transition-colors duration-300"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-brand-brown hover:bg-brand-maroon text-white font-semibold rounded-sm transition-all duration-300 tracking-wide shadow-md hover:shadow-xl group flex items-center justify-center gap-3"
                >
                  Confirm Reservation
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
              </div>
            </form>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Restaurant Table Setting"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-brown/40"></div>
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center text-white">
              <div className="space-y-6 backdrop-blur-sm bg-black/20 p-8 border border-white/20 rounded-sm">
                <h3 className="text-2xl font-serif">Private Dining</h3>
                <p className="font-light leading-relaxed">
                  Looking for an exclusive experience? We offer private dining spaces for special family occasions and corporate events.
                </p>
                <div className="pt-4 border-t border-white/30">
                  <span className="text-brand-gold font-bold">+91 96808 26565</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Popup Modal */}
      <AnimatePresence>
        {modalConfig.isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-brand-charcoal/60 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-brand-ivory rounded-xl shadow-2xl overflow-hidden z-10 p-8 text-center border border-brand-gold/20"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-brand-charcoal/40 hover:text-brand-charcoal transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-6 flex justify-center">
                {modalConfig.type === 'success' ? (
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center border-4 border-green-50">
                    <CheckCircle2 className="w-10 h-10 text-green-600" strokeWidth={2.5} />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center border-4 border-red-50">
                    <XCircle className="w-10 h-10 text-brand-maroon" strokeWidth={2.5} />
                  </div>
                )}
              </div>

              <h3 className="text-3xl font-serif text-brand-brown mb-3">
                {modalConfig.type === 'success' ? 'Reservation Sent' : 'Oops!'}
              </h3>

              <p className="text-brand-charcoal/80 mb-8 leading-relaxed">
                {modalConfig.message}
              </p>

              <button
                onClick={closeModal}
                className={`w-full py-3 px-6 rounded-sm text-white font-medium transition-colors shadow-md ${modalConfig.type === 'success'
                  ? 'bg-brand-brown hover:bg-brand-maroon focus:ring-brand-brown'
                  : 'bg-brand-maroon hover:opacity-90 focus:ring-brand-maroon'
                  }`}
              >
                {modalConfig.type === 'success' ? 'Done' : 'Try Again'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Reservation;
