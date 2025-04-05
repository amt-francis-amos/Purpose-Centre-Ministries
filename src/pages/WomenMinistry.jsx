import React from "react";
import { motion } from "framer-motion";
import { assets, coreValues } from "../assets/assets";

const WomenMinistry = () => {
  return (
    <div className="font-sans text-gray-800">
 
      <div className="relative h-[80vh] bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${assets.womenMinistryImg})` }}>
     
        <div className="absolute inset-0 bg-black/50 z-10" />

       
        <motion.div
          className="relative z-20 flex items-center justify-center h-full text-white text-center px-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Women's Ministry
            </h1>
            <p className="text-lg md:text-xl drop-shadow">
              Glorifying God through love, service, growth, and fellowship.
            </p>
          </div>
        </motion.div>
      </div>

      <section className="py-12 px-6 md:px-20 text-center bg-white">
        <motion.h2
          className="text-3xl font-bold mb-6 text-pink-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          The Women's Ministry seeks to glorify God through the study of the Word,
          supporting the Pastor's vision, working with other ministries, exemplifying
          love, evangelizing, raising women leaders, and building godly families.
        </motion.p>
      </section>

     
      <section className="py-12 bg-pink-50 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-10">
          Ministry Core Values
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100 hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-800">
                {value.title}
              </h3>
              <p className="text-gray-700 text-base">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
      <section className="py-12 px-6 md:px-20 text-center bg-white">
        <motion.h2
          className="text-3xl font-bold text-pink-700 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ministry Objectives
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Spiritual maturity - Growing women up in the knowledge of the Lord.
        </motion.p>
      </section>
    </div>
  );
};

export default WomenMinistry;
