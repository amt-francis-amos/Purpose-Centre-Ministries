import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { assets } from "../assets/assets";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const YouthMinistry = () => {
  return (
    <div className="pt-[88px] bg-white text-[#6C5332]">

      <motion.section
        className="relative bg-cover object-cover bg-center bg-no-repeat py-32 text-center text-white"
        style={{
          backgroundImage: `url(${assets.youthMinistryImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "70vh",
        }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Purpose Centre Youth Ministry
          </motion.h1>
          <motion.p className="text-xl italic mb-6 text-[#fbeec1]">
            "Serving God and Fulfilling our PURPOSE"
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link
              to="/contact"
              className="inline-block bg-[#D4AF37] text-[#6C5332] px-6 py-3 rounded-full font-semibold hover:bg-[#b9972f] transition"
            >
              Join the Movement
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

     
      <motion.section
        className="py-16 px-4 max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2 className="text-3xl font-bold mb-4">Our Purpose</motion.h2>
        <motion.p className="text-lg leading-relaxed">
          To guide and encourage the Christian youth in the community to know God holistically, serve HIM, and fulfill their purpose.
        </motion.p>
      </motion.section>

      <motion.section
        className="bg-[#f9f4e1] py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl font-bold mb-6 text-center" variants={fadeInUp}>
            Mission & Activities
          </motion.h2>
          <motion.p className="mb-8 text-lg text-center" variants={fadeInUp}>
            Our mission is to provide guidance and support to the youth of Purpose Centre as they navigate through the most challenging part of their development and seek to grow in their walk with Christ.
          </motion.p>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Youth Camps",
              "Children’s Camps",
              "Inter-Religious Programmes",
              "Outreaches",
              "Workshop Programmes",
              "Prayer Services",
              "Church Activities",
            ].map((activity, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4"
                variants={fadeInUp}
              >
                <FaCheckCircle className="text-[#D4AF37] text-xl" />
                <span className="text-lg font-medium">{activity}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

     
      <motion.section
        className="py-16 px-4 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Our Goals</h2>
        <ul className="list-disc pl-6 text-lg leading-relaxed">
          <li>To foster the personal and spiritual growth of each young person.</li>
          <li>To respond to the educational, physical, psychological, spiritual, and social needs of the youth.</li>
        </ul>
      </motion.section>

      
      <motion.section
        className="bg-[#f2ead3] py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl font-bold mb-8 text-center" variants={fadeInUp}>
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Compassion",
                points: [
                  "We are a caring youth community that supports well-being.",
                  "We help meet the needs of our members.",
                  "We nurture and support our leaders.",
                ],
              },
              {
                title: "Respect",
                points: [
                  "We treat everyone with fairness and equity.",
                  "We strive to involve all in decision-making.",
                  "We value interfaith dialogue and environmental respect.",
                ],
              },
              {
                title: "Working Together",
                points: [
                  "We believe in collective strength.",
                  "We value talents, experience, and passion.",
                  "We nurture collaboration and partnerships.",
                ],
              },
              {
                title: "Commitment",
                points: [
                  "We listen and strive to improve.",
                  "We support the ministry with time and resources.",
                  "We offer a safe, welcoming space for all.",
                ],
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-[#D4AF37]">
                  {value.title}
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {value.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default YouthMinistry;
