import { motion } from "framer-motion";
import { ministries } from "../assets/assets";

const MinistryCard = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-[#6C5332] mb-6 relative inline-block"
      >
        Our Ministries
        <span className="block w-20 h-1 bg-[#D4AF37] mt-2 mx-auto"></span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed"
      >
        The church is organized into <strong>four key ministries</strong>:{" "}
        <span className="text-[#6C5332] font-semibold">Men’s Ministry</span>,{" "}
        <span className="text-[#6C5332] font-semibold">Women’s Ministry</span>,{" "}
        <span className="text-[#6C5332] font-semibold">Youth Ministry</span>, and{" "}
        <span className="text-[#6C5332] font-semibold">Children’s Ministry</span>.{" "}
        Each ministry is dedicated to <strong>spiritual growth, fellowship, and service</strong> to the community.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 max-w-7xl mx-auto mt-12">
        {ministries.map((ministry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 text-left transition duration-300 hover:shadow-xl"
          >
            <img
              src={ministry.image}
              alt={ministry.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#6C5332]">{ministry.name}</h3>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                {ministry.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MinistryCard;
