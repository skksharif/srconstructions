import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 z-50 bg-white flex items-center justify-center ${
        isLoading ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-gray-200 border-t-red-600 rounded-full mx-auto mb-4"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-gray-800 mb-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          SR Constructions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Building your experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;