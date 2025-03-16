import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
       
        <div>
          <h2 className="text-2xl font-bold text-amber-500">
            Purpose Centre Ministry
          </h2>
          <p className="mt-3 text-gray-400">
            A place of worship, transformation, and divine purpose. Join us for
            a powerful experience in God's presence.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-amber-500">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaMapMarkerAlt className="text-amber-500" />
              <span>123 Church Street, Accra, Ghana</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaPhoneAlt className="text-amber-500" />
              <span>+233 24 567 8901</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaEnvelope className="text-amber-500" />
              <span>info@purposecentre.org</span>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-amber-500">Follow Us</h3>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
            {[
              { icon: <FaFacebookF />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
              { icon: <FaTwitter />, href: "#" },
              { icon: <FaYoutube />, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-amber-500 rounded-full transition"
              >
                <span className="text-white text-lg">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-600 pt-5">
        <p>© {new Date().getFullYear()} Purpose Centre Ministries. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
