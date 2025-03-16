import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../assets/assets"; 
import { Link } from "react-router-dom";
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
    <div className="text-white w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-screen flex items-center justify-center w-full overflow-hidden">
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
          className="relative z-10 max-w-4xl text-center px-4"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Welcome to <span className="text-[#D4AF37]">Purpose Centre Ministries</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            A place of worship, transformation, and divine purpose.
          </p>

          <Link to="/membership">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mt-6 px-8 py-3 bg-[#D4AF37] text-[#6C5332] font-semibold rounded-full hover:bg-[#B9972F] transition"
            >
              Become A Member
            </motion.button>
          </Link>
        </motion.div>
      </section>

   
      <section className="py-16 bg-gray-100 w-full">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-2xl sm:text-4xl font-bold text-[#6C5332] text-center"
  >
    Our Vision & Our Mission
  </motion.h2>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Vision Card */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition duration-300 hover:shadow-xl flex flex-col h-full"
    >
      <img
        src={assets.visionImg}
        alt="Vision"
        className="w-full h-60 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[#6C5332] mb-2">Our Vision</h3>
        <p className="text-amber-950 font-bold uppercase mb-2">
          Commissioned by God to Train His (God's) Children to grow into maturity (in Christ).
        </p>
        <p className="text-base text-gray-700">
          <span className="font-bold">BIRTH, GROWTH, REPRODUCTION & IMPARTATION</span> - We witness to new souls to be born into the family of God through God's word and Spirit.
        </p>
        <p className="text-gray-700 mt-2">
          <span className="font-bold">REPRODUCTION:</span> We develop and mature souls. We train God's children to grow and reproduce spiritually through soul winning, discipleship, and mentoring.
          We grow God’s children by feeding them with the word of God, through discipleship, transformational Character, dying to flesh & living in Christ, retreats, exercising faith, manifesting Spiritual Power, unleashing Potential, Purposeful living, fellowshipping with the Holy Spirit and Christian families. This is to ensure that our members become like
        </p>
      </div>
    </motion.div>

    {/* Mission Card */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition duration-300 hover:shadow-xl flex flex-col h-full"
    >
      <img
        src={assets.missionImg}
        alt="Mission"
        className="w-full h-60 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[#6C5332] mb-2">Our Mission</h3>
        <p className="text-gray-700 mb-2">
          To provide a healthy church environment for the expansion of God’s Kingdom through evangelism, training programs, discipleship, empowerment, and manifestations of the gifts of the Holy Spirit.
        </p>
        <h2 className="text-amber-900 text-xl font-bold mb-2">MISSION DETAILS</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Spiritual Environment I</li>
          <li>More Spiritual Environment II</li>
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


   
      <section className="w-full">
        <MinistryCard />
      </section>

      <ScrollToTop />
    </div>
  );
};

export default Home;
