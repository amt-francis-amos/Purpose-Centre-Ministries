import React from "react";
import { motion } from "framer-motion";
import { assets, menValues } from "../assets/assets";

;

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const MenMinistry = () => {
  return (
    <div className="font-sans text-gray-800">
      
      <div className="relative h-[80vh] bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${assets.menMinistryImg})` }}>
     
        <div className="absolute inset-0 bg-black/50 z-10" />
       
        <motion.div
          className="relative z-20 flex items-center justify-center h-full text-white text-center px-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Men's Ministry
            </h1>
            <p className="text-lg md:text-xl drop-shadow">
              Encountering Jesus and developing the faith to be all that He calls us to be.
            </p>
          </div>
        </motion.div>
      </div>

      
      <section className="py-12 px-6 md:px-20 bg-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-6 text-blue-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          Our mission is to build the faith of men, relationships, and ministry through the resources we obtain, events we produce, and ongoing leadership development. We strive to create an atmosphere of support, encouragement, and prayer for our pastor, all driven by the ministry. This ministry is about men encountering Jesus Christ and being developed in their faith to be all that Jesus wants them to be.
        </motion.p>
      </section>

      
      <section className="py-12 bg-gray-50 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold mb-10 text-blue-800 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Core Values
        </motion.h2>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {menValues.map((value, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {value.title}
              </h3>
              <p className="text-gray-700 text-base">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default MenMinistry;
