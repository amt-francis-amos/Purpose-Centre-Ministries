import React from "react";
import { motion } from "framer-motion";
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

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    <motion.div
  className="relative h-[470px] w-full bg-cover bg-center"
  style={{ backgroundImage: `url(${assets.aboutImg})` }}
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
      ABOUT US
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
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-amber-950"
            variants={fadeInUp}
          >
            OUR HISTORY
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-amber-950 mx-auto mt-2 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </div>

        <motion.section
          className="mb-8 flex flex-col mt-20 md:flex-row gap-8"
          variants={fadeInUp}
        >
          <motion.img
            src={assets.amoImg}
            alt="Purpose Centre Ministries"
            className="w-full md:w-1/2 h-[600px] object-cover rounded-lg shadow-lg"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div className="md:w-1/2" variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900">
              Purpose Centre Ministries
            </h2>
            <p className="mt-2 leading-relaxed">
             Purpose Centre Ministries is a non-denominational Training Church.
              The Chapel was founded on the Resurrection Sunday, 5th April, 2015
              at the old TABUSTECH Assembly Hall. Prior to that, the ministry
              existed at the Sekondi Methodist Park as a Prayer and Training
              Fellowship. The ministry focuses on helping people to identify
              their God-given purpose, as well as creating the platform for them
              to exhibit their divine and natural gifts and talents. The
              ministry is focused on supporting its members to be spiritually
              and biblically sound, physically whole, financially strong,
              marital and family happy, academically sound, and to challenge
              people to move out of their hiding place to be a great influence
              to societies and nations.
            </p>
          </motion.div>
        </motion.section>

       
      </motion.div>
      <ScrollToTop />
    </div>
  );
};

export default About;
