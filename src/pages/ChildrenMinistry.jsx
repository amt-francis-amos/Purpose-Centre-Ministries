import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { assets,values, growthFocus } from "../assets/assets";
import ScrollToTop from "../components/ScrollToTop";

const ChildrenMinistry = () => {


  return (
    <div className="text-white w-full overflow-hidden">
      
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Children’s Ministry</h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Growing children into the full image of Christ—with purpose, power and love.
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

    
      <section className="py-16 px-6 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6C5332] mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To establish a community of young people who fear God, uphold the purity of His Word,
            remain faithful to Christ, and are committed to His teaching.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl text-[#6C5332] font-bold text-center mb-10">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                <p className="text-lg font-medium text-gray-700">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-20 bg-white px-6 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6C5332] text-center mb-12">
            Growing Like Christ – Luke 2:40 & 2:52
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {growthFocus.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#6C5332] mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="bg-[#f9f9f9] py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-xl italic text-[#6C5332] font-medium">
            “As a teacher I believe that love and godly discipline will help shape the future of our kids.”
          </blockquote>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default ChildrenMinistry;
