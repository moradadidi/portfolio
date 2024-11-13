import { motion } from "framer-motion";
import prof from "../assets/prof.png";

function ProfileSection() {
  return (
    <motion.div
      className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
        <img src={prof} alt="Profile" className="w-full h-full object-cover" />
      </div>
      <h1 className="text-3xl font-bold text-purple-500 mt-4">Mourad Adidi</h1>
      <p className="text-gray-400 mt-2">Full-Stack Developer | Casablanca, Morocco</p>
    </motion.div>
  );
}

export default ProfileSection;
