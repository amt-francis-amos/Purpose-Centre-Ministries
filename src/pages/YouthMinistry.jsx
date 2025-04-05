import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { assets } from "../assets/assets";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const YouthMinistry = () => {
  return (
    <motion.div
      className="pt-[88px] bg-white text-[#6C5332]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
     
      <motion.section
        className="relative bg-cover object-cover bg-center bg-no-repeat py-32 text-center text-white"
        style={{
          backgroundImage: `url(${assets.youthMinistryImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "70vh",
        }}
        variants={itemVariants}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            variants={itemVariants}
          >
            Purpose Centre Youth Ministry
          </motion.h1>
          <motion.p
            className="text-xl italic mb-6 text-[#fbeec1]"
            variants={itemVariants}
          >
            "Serving God and Fulfilling our PURPOSE"
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="inline-block bg-[#D4AF37] text-[#6C5332] px-6 py-3 rounded-full font-semibold hover:bg-[#b9972f] transition"
            >
              Join the Movement
            </Link>
          </motion.div>
        </div>
      </motion.section>

     
      <motion.section
        className="py-16 px-4 max-w-6xl mx-auto text-center"
        variants={itemVariants}
      >
        <h2 className="text-3xl font-bold mb-4">Our Purpose</h2>
        <p className="text-lg leading-relaxed">
          To guide and encourage the Christian youth in the community to know
          God holistically, serve HIM, and fulfill their purpose.
        </p>
      </motion.section>

      
      <motion.section
        className="bg-[#f9f4e1] py-16 px-4"
        variants={itemVariants}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Mission & Activities
          </h2>
          <p className="mb-8 text-lg text-center">
            Our mission is to provide guidance and support to the youth of
            Purpose Centre as they navigate through the most challenging part of
            their development and seek to grow in their walk with Christ.
          </p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
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
                variants={itemVariants}
              >
                <FaCheckCircle className="text-[#D4AF37] text-xl" />
                <span className="text-lg font-medium">{activity}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

     
      <motion.section
        className="py-16 px-4 max-w-5xl mx-auto"
        variants={itemVariants}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Our Goals</h2>
        <ul className="list-disc pl-6 text-lg leading-relaxed">
          <motion.li variants={itemVariants}>
            To foster the personal and spiritual growth of each young person.
          </motion.li>
          <motion.li variants={itemVariants}>
            To respond to the educational, physical, psychological, spiritual,
            and social needs of the youth.
          </motion.li>
        </ul>
      </motion.section>

      
      <motion.section
        className="bg-[#f2ead3] py-16 px-4"
        variants={itemVariants}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>

          <motion.div
            className="grid md:grid-cols-2 gap-10"
            variants={containerVariants}
          >
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
                variants={itemVariants}
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
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default YouthMinistry;
