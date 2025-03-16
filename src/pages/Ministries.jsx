import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};
 
const Ministries = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <motion.div
        className="relative h-[470px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.heroBg})` }}
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
            OUR MINISTRIES
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
            OUR MINISTRIES
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-amber-950 mx-auto mt-2 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={assets.partnerImg}
              alt="Purpose School of Ministry"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">
                Purpose School of Ministry
              </h2>
              <p className="mt-2  text-base text-gray-600">
                Purpose School of Ministry is an in-house Training School for
                all members of the Church. The school is designed to train
                ministers in the Basic doctrines of Christ, equip people to
                function in their respective ministries and duties, train people
                to function effectively in the fivefold ministry and the gifts
                of the Spirit. All other training of the church is under the
                school of ministry. Currently, the School is looking for
                affiliation from other well-established Bible schools and
                universities.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={assets.retreatImg}
              alt="Retreat"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">Retreat</h2>
              <p className="mt-2 text-base text-gray-600">
                The ministry ensures that all the various ministries such as Men
                Ministry, Women Ministry, Youth Ministry, Church Leadership, and
                the Pastoral Council embark on periodic Prayer and Word-Based
                Retreats. During Easter festivities, the ministry embarks on
                Esther Easter fast beginning from Good Friday to Easter Sunday.
                During this fast, we emphasize the need to crucify the sinful
                nature and to resurrect (live) in the glorious nature of Christ.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={assets.partnerImg}
              alt="Partnership Conference"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">
                Partnership Conference
              </h2>
              <p className="mt-2 text-base text-gray-600">
                The ministry organizes a day partnership conference with all
                stakeholders of the ministry. During this conference, all
                sponsors, sons and daughters, affiliate churches, mentors, and
                the general public are invited. The ministry renders accounts to
                the stakeholders and also raises new friends and partners. The
                suggestions and recommendations of the partners are considered
                upon careful analysis with respect to the Word of God, our
                vision, and the voice of the Spirit. We also use the occasion to
                raise funds for the ministry’s projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={assets.menWomenImg}
              alt="Men & Women Ministry"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">
                Men & Women Ministry
              </h2>
              <p className="mt-2 text-gray-600">
                Ministries designed to support men and women in their spiritual,
                family, and community lives.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Ministries;
