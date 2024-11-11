import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

const ProfileSection = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="col-span-1 lg:col-span-2 bg-bgSecondary rounded-lg p-6 shadow-lg"
  >
    <div className="flex items-center space-x-4">
      <FaUser className="text-accentPurple text-3xl" />
      <h2 className="text-3xl font-bold">Mourad Adidi</h2>
    </div>
    <p className="mt-2 text-textAccent">Full-Stack Developer</p>
    <p className="mt-2">Location: Casablanca, Morocco</p>
    <p className="mt-2">Languages: English, Arabic, French, Amazigh</p>
  </motion.div>
);

export default ProfileSection;
