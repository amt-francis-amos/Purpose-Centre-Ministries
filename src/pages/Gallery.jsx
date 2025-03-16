import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets"; 

const images = [
  "/images/church1.jpg",
  "/images/church2.jpg",
  "/images/church3.jpg",
  "/images/church4.jpg",
  "/images/church5.jpg",
  "/images/church6.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.div
        className="relative h-[470px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.galleryImg})` }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            GALLERY
          </motion.h1>
        </motion.div>
      </motion.div>

      <div className="max-w-[1240px] mx-auto p-6 mt-20">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Church Moments
          </h2>
     
          <motion.div
            className="w-20 h-1 bg-amber-950 mx-auto mt-2 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => setSelectedImage(src)} 
            >
              <img
                src={src}
                alt={`Church Event ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>

     
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Enlarged View"
            className="max-w-full max-h-full rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
