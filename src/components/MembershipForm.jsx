import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

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
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center text-amber-950"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Become a Member
      </motion.h2>
      <p className="text-gray-600 text-center mt-2">
        Join our church family by filling out this form.
      </p>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Full Name */}
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

        {/* Email */}
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

        {/* Phone Number */}
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

        {/* Gender */}
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

        {/* Date of Birth */}
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

        {/* Address */}
        <div>
          <label className="block text-gray-700 font-medium">Address</label>
          <input
            type="text"
            {...register("address", { required: "Address is required" })}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="123 Church Street, Accra, Ghana"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Marital Status */}
        <div>
          <label className="block text-gray-700 font-medium">Marital Status</label>
          <select
            {...register("maritalStatus", { required: "Marital status is required" })}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
          {errors.maritalStatus && (
            <p className="text-red-500 text-sm">{errors.maritalStatus.message}</p>
          )}
        </div>

        {/* Church Denomination */}
        <div>
          <label className="block text-gray-700 font-medium">Church Denomination</label>
          <input
            type="text"
            {...register("churchDenomination", { required: "Denomination is required" })}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Pentecostal, Baptist, Catholic..."
          />
        </div>

        {/* How they heard about the church */}
        <div>
          <label className="block text-gray-700 font-medium">
            How did you hear about us?
          </label>
          <select {...register("referralSource")} className="w-full mt-1 p-2 border border-gray-300 rounded-md">
            <option value="Social Media">Social Media</option>
            <option value="Friend/Family">Friend/Family</option>
            <option value="Website">Website</option>
            <option value="Event">Event</option>
          </select>
        </div>

        {/* Prayer Requests */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium">Prayer Requests</label>
          <textarea
            {...register("prayerRequest")}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Share your prayer request..."
          />
        </div>

        {/* Newsletter Subscription */}
        <div className="md:col-span-2 flex items-center">
          <input type="checkbox" {...register("subscribe")} className="mr-2" />
          <label className="text-gray-700">Subscribe to church updates</label>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center">
          <motion.button
            type="submit"
            className="px-6 py-3 bg-amber-950 text-white text-lg font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            Submit Application
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default MembershipForm;
