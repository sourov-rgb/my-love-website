import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-pink-600 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        To My Beautiful Riya 💖
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-pink-500 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Our journey is full of love, memories, and magic ✨
      </motion.p>

      <Link to="/gallery">
        <motion.button
          className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-600 shadow-lg "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start Our Journey ➡️
        </motion.button>
      </Link>
    </div>
  );
}

export default HomePage;
