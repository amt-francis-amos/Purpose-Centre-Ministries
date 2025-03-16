import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/PurposeCentreMinistries" },
  { icon: <FaTwitter />, href: "https://x.com/PurposeMini?s=09" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/channel/UC56zDI09bvV46-BWZ9VeY_Q" },
];

const contactInfo = [
  { icon: <FaMapMarkerAlt />, text: "123 Church Street, Accra, Ghana" },
  { icon: <FaPhoneAlt />, text: "+233 24 567 8901" },
  { icon: <FaEnvelope />, text: "info@purposecentre.org" },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Sermons", path: "/sermons" },
  { name: "Contact", path: "/contact" },
  { name: "Donate", path: "/donate" },
];

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        
       
        <div>
          <h2 className="text-2xl font-bold text-amber-500">Purpose Centre Ministries</h2>
          <p className="max-w-[300px] mt-3 text-gray-400">
            A place of worship, transformation, and divine purpose. 
            Join us for a powerful experience in God's presence.
          </p>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold text-amber-500">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.path} 
                  className="hover:text-amber-500 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

     
        <div>
          <h3 className="text-xl font-semibold text-amber-500">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-amber-500">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-amber-500">Follow Us</h3>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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
