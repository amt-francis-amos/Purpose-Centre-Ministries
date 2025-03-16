import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";
import { assets } from "../assets/assets";

const Donation = () => {
  const [amount, setAmount] = useState(0);

  const handlePaystackPayment = () => {
    const handler = window.PaystackPop.setup({
      key: "your-paystack-public-key", 
      email: "donor@example.com",
      amount: amount * 100, 
      currency: "GHS",
      callback: function (response) {
        alert("Payment Successful! Transaction reference: " + response.reference);
      },
      onClose: function () {
        alert("Transaction was not completed, window closed.");
      },
    });
    handler.openIframe();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20">
     
      <motion.div
        className="relative min-h-[300px] md:h-[470px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.donationImg})` }}
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
          <motion.h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            DONATE TO SUPPORT
          </motion.h1>
        </motion.div>
      </motion.div>

     
      <div className="max-w-[600px] mx-auto p-6 mt-12 text-gray-700 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Make a Donation</h2>
        <p className="text-center mt-2 text-gray-600">
          Your generous donation helps us continue our mission.
        </p>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">Amount (GHS)</label>
          <input
            type="number"
            className="mt-1 p-3 w-full border rounded-md"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          onClick={handlePaystackPayment}
          className="mt-6 w-full bg-amber-950 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition duration-300"
        >
          Donate Now
        </button>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Donation;
