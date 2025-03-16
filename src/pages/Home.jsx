import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../assets/assets"; 
import { assets } from "../assets/assets";
import MinistryCard from "../components/MinistryCard";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white">
     
      <section className="relative min-h-screen flex items-center justify-center px-5 md:px-10 lg:px-20 overflow-hidden">
        
        <div className="absolute inset-0 w-full h-full">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Church background"
            className="w-full h-full object-cover transition-opacity duration-1000"
            initial={{ opacity: 0.6, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 max-w-2xl text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Welcome to <span className="text-[#D4AF37]">Purpose Centre Ministries</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            A place of worship, transformation, and divine purpose.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-[#D4AF37] text-[#6C5332] font-semibold rounded-full hover:bg-[#B9972F] transition"
          >
           Become A Member
          </motion.button>
        </motion.div>
      </section>

 
      <section className="py-16 bg-gray-100 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-[#6C5332]"
        >
          Our Vision & Our Mission
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-10 max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 text-left transition duration-300 hover:shadow-xl"
          >
            <img
              src={assets.visionImg}
              alt="Vision"
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#6C5332]">Our Vision</h3>
              <h2 className="text-amber-950 font-bold uppercase mb-4">
                Commissioned by God to Train His (God's) Children to grow into maturity (in Christ).
              </h2>
              <p className="mt-2 text-base text-gray-700">
                BIRTH, GROWTH, REPRODUCTION & IMPARTATION: Salvation / Born Again:
                We give birth by witnessing to new souls, helping them be born into the family of God.
              </p>
              <p className="mt-2 text-base text-gray-700">
                SPIRIT REPRODUCTION: We develop and mature souls through discipleship and mentoring.
              </p>
              <p className="mt-2 text-base text-gray-700">
                We grow God's children by feeding them with the word of God through transformational character-building, retreats, faith exercises, and the manifestation of spiritual gifts.
              </p>
            </div>
          </motion.div>

    
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 text-left transition duration-300 hover:shadow-xl"
          >
            <img
              src={assets.missionImg}
              alt="Mission"
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#6C5332]">Our Mission</h3>
              <p className="mt-2 text-base text-gray-700">
                To provide a healthy church environment for the expansion of
                God's Kingdom through evangelism, training, discipleship, and
                the manifestation of the gifts of the Holy Spirit.
              </p>
              <h2 className="font-bold text-amber-950 uppercase mt-4 mb-4">
                Mission Details
              </h2>
              <ul className="mt-3 text-gray-700 list-disc pl-5">
                <li>More Spiritual Environment</li>
                <li>More Physical Environment</li>
                <li>More Kingdom Expansion</li>
                <li>More Evangelism/Witnessing</li>
                <li>More Training Programmes</li>
                <li>More Discipleship</li>
                <li>More Empowerment</li>
                <li>More Gifts of the Holy Spirit</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

    
      <section>
        <MinistryCard />
      </section>

     
      <ScrollToTop />
    </div>
  );
};

export default Home;
