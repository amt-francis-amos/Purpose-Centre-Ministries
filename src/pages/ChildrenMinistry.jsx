import React from 'react'

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets"; // make sure you have a childrenMinistryImg or add one
import ScrollToTop from "../components/ScrollToTop";

const ChildrenMinistry = () => {
  return (
    <div className="text-white w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center bg-black">
        <img
          src={assets.childrenMinistryImg}
          alt="Children Ministry Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Children’s Ministry
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Raising the next generation in Christ through love, learning, and fun.
          </p>
          <Link to="/membership">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-[#D4AF37] text-[#6C5332] font-semibold rounded-full hover:bg-[#B9972F] transition"
            >
              Join the Ministry
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl font-bold text-[#6C5332] text-center mb-10"
          >
            Nurturing Young Hearts for Christ
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.img
              src={assets.childrenClassImg}
              alt="Children in church"
              className="w-full h-auto rounded-lg shadow-md object-cover"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#6C5332] mb-4">
                What We Do
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Interactive Bible teachings tailored for kids.</li>
                <li>Engaging worship and praise sessions.</li>
                <li>Games, crafts, and creative lessons.</li>
                <li>Safe and loving environment for every child.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Activities */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl font-bold text-[#6C5332] mb-12"
          >
            Core Values & Activities
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Faith Foundation",
                description: "Instilling godly values through biblical truths.",
                icon: "🙏",
              },
              {
                title: "Creative Expression",
                description: "Art, music, and drama to express their faith.",
                icon: "🎨",
              },
              {
                title: "Play & Fellowship",
                description: "Games and bonding activities to build community.",
                icon: "🤝",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#6C5332] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default ChildrenMinistry;
