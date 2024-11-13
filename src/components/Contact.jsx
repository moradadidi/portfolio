// src/components/ContactSection.jsx
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactSection = () => (
  <motion.div className="p-8 bg-gradient-to-r from-bgSecondary to-darkGray rounded-lg shadow-xl">
    <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
      <FiMail className="text-accentPurple" /> Contact Me
    </h2>
    <ul className="mt-6 flex justify-center gap-4 text-textAccent">
      <FaEnvelope className="hover:text-accentPurple cursor-pointer" size={25} />
      <FaPhone className="hover:text-accentPurple cursor-pointer" size={25} />
      <FaGithub className="hover:text-accentPurple cursor-pointer" size={25} />
      <FaLinkedin className="hover:text-accentPurple cursor-pointer" size={25} />
      <FaInstagram className="hover:text-accentPurple cursor-pointer" size={25} />
    </ul>
  </motion.div>
);

export default ContactSection;
