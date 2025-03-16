import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/church1.jpg",
  "/images/church2.jpg",
  "/images/church3.jpg",
  "/images/church4.jpg",
  "/images/church5.jpg",
  "/images/church6.jpg",
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Church Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={src}
              alt={`Church Event ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
