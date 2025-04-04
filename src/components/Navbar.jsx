import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Ministries",
    path: "/ministries",
    subMenu: [
      { name: "Children", path: "/children-ministry" },
      { name: "Youth", path: "/youth-ministry" },
      { name: "Women", path: "/women-ministry" },
      { name: "Men", path: "/men-ministry" },
    ],
  },
  { name: "Gallery", path: "/gallery" },
  { name: "Virtual Church", path: "/virtual" },
  { name: "Events", path: "/event" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white h-[88px] fixed top-0 w-full z-50 shadow-md flex items-center">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-6 w-full">
        <Link to="/" className="flex items-center">
          <img className="w-[160px]" src={assets.logo} alt="Church Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) =>
            link.name === "Ministries" ? (
              <div key={link.name} className="relative" ref={dropdownRef}>
                <div className="flex items-center gap-1 text-lg font-medium transition">
                  <Link
                    to={link.path}
                    className={`${
                      location.pathname === link.path
                        ? "text-[#6C5332] font-bold border-b-2 border-[#D4AF37]"
                        : "text-[#6C5332] hover:text-[#D4AF37]"
                    }`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {link.name}
                  </Link>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setDropdownOpen((prev) => !prev);
                    }}
                    className="text-[#6C5332] hover:text-[#D4AF37]"
                  >
                    <FaAngleDown
                      className={`transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                    {link.subMenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-[#6C5332] hover:bg-[#f4f4f4] hover:text-[#D4AF37]"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavItem
                key={link.name}
                link={link}
                isActive={location.pathname === link.path}
              />
            )
          )}
        </div>

        {/* Desktop Donate Button */}
        <div className="hidden md:block">
          <Link
            to="/donation"
            className="px-8 py-3 bg-[#D4AF37] text-[#6C5332] rounded-md font-semibold hover:bg-[#B9972F] transition"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-2xl text-[#6C5332]" />
          ) : (
            <FaBars className="text-2xl text-[#6C5332]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu links={navLinks} setIsOpen={setIsOpen} />}
    </nav>
  );
};

const NavItem = ({ link, isActive }) => (
  <Link
    to={link.path}
    className={`text-lg font-medium transition ${
      isActive
        ? "text-[#6C5332] font-bold border-b-2 border-[#D4AF37]"
        : "text-[#6C5332] hover:text-[#D4AF37]"
    }`}
  >
    {link.name}
  </Link>
);

const MobileMenu = ({ links, setIsOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="md:hidden bg-[#6C5332] text-white py-4 absolute top-[88px] left-0 w-full shadow-lg"
  >
    {links.map((link) => (
      <div key={link.name}>
        <Link
          to={link.path}
          className="block px-6 py-3 text-white hover:text-[#D4AF37]"
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </Link>

        {/* Mobile Dropdown for Ministries */}
        {link.subMenu && (
          <div className="pl-8">
            {link.subMenu.map((sub) => (
              <Link
                key={sub.name}
                to={sub.path}
                className="block px-6 py-2 text-white hover:text-[#D4AF37]"
                onClick={() => setIsOpen(false)}
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}
    <Link
      to="/donation"
      className="block text-center px-6 py-3 mt-3 bg-[#D4AF37] text-[#6C5332] hover:bg-[#B9972F] rounded-md mx-6"
      onClick={() => setIsOpen(false)}
    >
      Donate
    </Link>
  </motion.div>
);

export default Navbar;
