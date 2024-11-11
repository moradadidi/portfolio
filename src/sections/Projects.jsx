import { motion } from 'framer-motion';
import { FaProjectDiagram } from 'react-icons/fa';

const ProjectsSection = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="bg-bgSecondary rounded-lg p-6 shadow-lg"
  >
    <div className="flex items-center space-x-2 mb-4">
      <FaProjectDiagram className="text-accentPurple text-2xl" />
      <h2 className="text-xl font-semibold">Projects</h2>
    </div>
    <ul className="space-y-2">
      <li>Product Sales and Task Management App</li>
      <li>Networking Platform (Hackathon Project)</li>
      <li>Full-Stack Web Application</li>
    </ul>
  </motion.div>
);

export default ProjectsSection;
