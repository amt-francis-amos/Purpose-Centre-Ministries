import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { assets } from "../assets/assets";
import ScrollToTop from "../components/ScrollToTop";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <motion.div
        className="relative min-h-[300px] md:h-[470px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.contactImg})` }}
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
            CONTACT US
          </motion.h1>
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-[1240px] mx-auto p-6 mt-20 text-gray-700"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-10">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-amber-950"
            variants={fadeInUp}
          >
            GET IN TOUCH
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-amber-950 mx-auto mt-2 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={fadeInUp}
        >
          <div className="bg-white shadow-lg rounded-lg p-6">
            <FaMapMarkerAlt className="text-4xl text-amber-950 mx-auto" />
            <h3 className="text-lg font-semibold mt-4">Our Location</h3>
            <p className="text-gray-600">123 Church Street, Accra, Ghana</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <FaPhoneAlt className="text-4xl text-amber-950 mx-auto" />
            <h3 className="text-lg font-semibold mt-4">Call Us</h3>
            <p className="text-gray-600">+233 24 567 8901</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <FaEnvelope className="text-4xl text-amber-950 mx-auto" />
            <h3 className="text-lg font-semibold mt-4">Email Us</h3>
            <p className="text-gray-600">info@purposecentre.org</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 mt-16 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-950"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-950"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-950"
            ></textarea>
            <motion.button
              type="submit"
              className="w-full bg-amber-950 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">
            Find Us Here
          </h2>
          <motion.div
            className="w-20 h-1 bg-amber-950 mx-auto mt-2 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />

          <div className="mt-10 w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-[400px] rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127670.80564584038!2d-1.818539193518476!3d4.899978048774447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfddfbcf5a9b8b6f%3A0x6f9c8f0f3f9c9b0!2sTakoradi%2C%20Ghana!5e0!3m2!1sen!2sus!4v1625864418167!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Takoradi, Ghana"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>

      <ScrollToTop />
    </div>
  );
};

export default Contact;
