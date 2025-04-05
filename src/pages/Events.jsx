import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import sanityClient from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { assets } from "../assets/assets";
import ScrollToTop from "../components/ScrollToTop";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "event"] | order(date desc) {
        _id,
        title,
        description,
        image,
        date,
        author
      }`)
      .then((data) => {
        console.log("Fetched events:", data);
        setEvents(data);
      })
      .catch((error) => {
        console.error("Sanity Fetch Error:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      
      <motion.div
        className="relative min-h-[300px] md:h-[470px] w-full bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${assets.eventImg})` }}
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
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Upcoming Events
          </h1>
        </motion.div>
      </motion.div>

     
      <div className="max-w-7xl mx-auto p-6 mt-10">
        {loading ? (
          <motion.p
            className="text-center text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Loading events...
          </motion.p>
        ) : events.length === 0 ? (
          <motion.div
            className="text-center text-gray-500 text-xl font-semibold mt-10 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p>No events available at the moment.</p>
            <span className="text-4xl mt-2">😔</span>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <motion.div
                key={event._id}
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all hover:shadow-xl hover:scale-[1.02]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
               
                {event.image && (
                  <img
                    src={urlFor(event.image).width(600).url()}
                    alt={event.title}
                    className="w-full h-60 object-cover"
                  />
                )}

               
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {event.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {new Date(event.date).toDateString()}
                  </p>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {event.description.length > 120
                      ? event.description.substring(0, 120) + "..."
                      : event.description}
                  </p>
                  {event.author && (
                    <p className="mt-3 text-gray-500 text-sm">
                      <span className="font-medium">By:</span> {event.author}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Events;
