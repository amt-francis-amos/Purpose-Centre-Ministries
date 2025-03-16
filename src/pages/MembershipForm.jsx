import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const MembershipForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Membership Data:", data);
    alert("Your membership application has been submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
   
      <motion.div
        className="relative h-[470px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.memberImg})` }}
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
            BECOME A MEMBER
          </motion.h1>
        </motion.div>
      </motion.div>

     
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-amber-950"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Join Our Church Family
        </motion.h2>
        <p className="text-gray-600 text-center mt-2">
          Fill out the form below to become a member.
        </p>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

        
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

        
          <div>
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="+233 555 123 456"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium">Gender</label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>

        
          <div>
            <label className="block text-gray-700 font-medium">Date of Birth</label>
            <input
              type="date"
              {...register("dob", { required: "Date of Birth is required" })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
            {errors.dob && (
              <p className="text-red-500 text-sm">{errors.dob.message}</p>
            )}
          </div>

        
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium">Address</label>
            <input
              type="text"
              {...register("address", { required: "Address is required" })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="123 Church St, Accra"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

         
          <div className="md:col-span-2 text-center">
            <motion.button
              type="submit"
              className="mt-4 px-6 py-3 text-lg font-semibold text-white bg-amber-950 rounded-full shadow-lg hover:bg-amber-800 transition duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Submit Membership Form
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default MembershipForm;
