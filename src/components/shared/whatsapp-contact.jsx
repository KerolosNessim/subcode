import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import * as motion from "motion/react-client"
const WhatsappContact = () => {
  return (
    <motion.div initial={{ opacity: 0 ,y:20}} animate={{ opacity: 1 ,y:0}} transition={{ duration: 1}} className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Pulsing circle effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping" />
        <div className="absolute inset-1 rounded-full bg-green-500 opacity-20 animate-ping" style={{ animationDelay: '0.5s' }} />

        {/* WhatsApp button */}
        <a
          href="https://wa.me/201122222222"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center size-16  rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className='size-10  text-white' />
        </a>
      </div>
    </motion.div>
  );
};

export default WhatsappContact;
