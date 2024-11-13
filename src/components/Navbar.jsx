import { FaHome, FaFolder, FaUser, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const active = location.pathname; // Track active item based on URL path

  return (
    <nav className="flex w-1/2 md:w-1/3 items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-full shadow-lg">
      {/* Left Side Icons */}
      <div className="flex items-center gap-6">
        <Link to="/" className="cursor-pointer">
          <FaHome
            className={`transition duration-300 ${
              active === "/home" ? "text-white opacity-100" : "text-white opacity-60"
            }`}
            size={24}
          />
        </Link>
        <Link to="/about" className="cursor-pointer">
          <FaFolder
            className={`transition duration-300 ${
              active === "/about" ? "text-white opacity-100" : "text-white opacity-60"
            }`}
            size={24}
          />
        </Link>
        <Link to="/projects" className="cursor-pointer">
          <FaUser
            className={`transition duration-300 ${
              active === "/projects" ? "text-white opacity-100" : "text-white opacity-60"
            }`}
            size={24}
          />
        </Link>
      </div>

      {/* Contact Me Button */}
      <Link to="/contact" className="cursor-pointer">
        <button
          className={`flex items-center px-4 py-2 rounded-full transition duration-300 ${
            active === "/contact" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <FaEnvelope className="mr-2" /> Contact Me
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
