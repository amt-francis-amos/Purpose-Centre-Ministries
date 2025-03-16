import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import sanityClient from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false); // 🔄 Refresh trigger

  const fetchEvents = () => {
    setLoading(true);
    sanityClient
      .fetch(
        `*[_type == "event"] | order(date desc) {
          _id, title, description, image, date, author
        }`
      )
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, [refresh]); 

  return (
    <div className="min-h-screen bg-gray-100">
     
      <motion.div
        className="relative h-[470px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url('/events-hero.jpg')` }}
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
            <button
              onClick={() => setRefresh(!refresh)} 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Refresh Events
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <motion.div
                key={event._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={urlFor(event.image).url()}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>
                  <p className="text-gray-600 text-sm">{new Date(event.date).toDateString()}</p>
                  <p className="mt-2 text-gray-700">
                    {event.description.substring(0, 100)}...
                  </p>
                  <p className="mt-2 text-gray-500 text-sm">By {event.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
