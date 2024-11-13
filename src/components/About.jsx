import { motion } from "framer-motion";
import { BiBook } from "react-icons/bi";

function AboutSection() {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-white flex items-center gap-2">
        <BiBook className="text-purple-500" /> About Me
      </h2>
      <p className="text-gray-400 mt-2">
        {/* About Me content */}
        Hi, I am Mourad Adidi, a dedicated Full-Stack Developer with a strong foundation in PHP, Laravel, React.js, and JavaScript...
      </p>
    </motion.div>
  );
}

export default AboutSection;
