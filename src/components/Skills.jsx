// src/components/TechStackSection.jsx
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPhp, FaPython, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const TechStackSection = () => (
  <motion.div className="p-8 bg-gradient-to-r from-bgSecondary to-darkGray rounded-lg shadow-xl">
    <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
      <BiCodeAlt className="text-accentPurple" /> Tech I Love
    </h2>
    <div className="mt-4 flex flex-wrap gap-6 justify-center">
      {[FaReact, FaJs, FaHtml5, FaCss3Alt, FaPhp, FaPython, FaNodeJs, FaGitAlt].map((Icon, index) => (
        <Icon key={index} className="text-accentPurple hover:text-textAccent transition duration-300" size={35} />
      ))}
    </div>
  </motion.div>
);

export default TechStackSection;
