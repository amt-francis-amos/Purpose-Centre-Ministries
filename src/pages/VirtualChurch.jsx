import React from "react";
import { motion } from "framer-motion";
import { assets, sermonVideos } from "../assets/assets";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const VirtualChurch = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <motion.div
        className="relative h-[470px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.onlineImg})` }}
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
            className="text-2xl md:text-5xl font-extrabold drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* -WELCOME TO OUR VIRTUAL CHURCH */}
          </motion.h1>
          <p className="text-lg md:text-xl mt-2 font-medium">
            {/* Join us in worship anytime, anywhere. */}
          </p>
        </motion.div>
      </motion.div>

     
      <motion.div
        className="max-w-[1240px] mx-auto p-6 mt-20 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Live Streaming Service
        </h2>
        <motion.div
          className="w-20 h-1 bg-amber-950 mx-auto mt-2 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />
        <p className="mt-4 text-gray-700">
          Experience our worship services live every Sunday at 9:00 AM.
        </p>

        <motion.div
          className="mt-10 overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/@purposecentreministries5530"
            title="Live Church Service"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-[1240px] mx-auto p-6 mt-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">
          Featured Sermons
        </h2>
        <motion.div
          className="w-20 h-1 bg-amber-950 mx-auto mt-2 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {sermonVideos.map((video, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                width="100%"
                height="250"
                src={video}
                title={`Church Sermon ${index + 1}`}
                frameBorder="0"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <motion.a
            href="https://www.youtube.com/@purposecentreministries5530/videos
            "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-amber-950 text-white text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Watch More Videos
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="bg-amber-950 text-white text-center py-12 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold">
          Join Our Online Community
        </h2>
        <p className="mt-2 text-lg">
          Be part of our church family from anywhere in the world.
        </p>
        <Link to="/membership">
          <motion.button
            className="mt-4 inline-block px-6 py-3 bg-white text-amber-950 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Get Connected
          </motion.button>
        </Link>
      </motion.div>

      <ScrollToTop />
    </div>
  );
};

export default VirtualChurch;
