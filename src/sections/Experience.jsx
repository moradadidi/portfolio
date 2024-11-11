import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

const ExperienceSection = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="bg-bgSecondary rounded-lg p-6 shadow-lg"
  >
    <div className="flex items-center space-x-2 mb-4">
      <FaBriefcase className="text-accentPurple text-2xl" data-tip="Experience" />
      <ReactTooltip place="top" type="dark" effect="solid" />
      <h2 className="text-xl font-semibold">Professional Experience</h2>
    </div>
    <ul className="space-y-2">
      <li>
        <strong>Web Application Development</strong> <br />
        Jan 2023 - Present <br />
        Developed a web application with product and task management features.
      </li>
      <li>
        <strong>Hackathon Participant</strong> <br />
        April 2024 <br />
        Won 3rd place in OFPPT Hackathon for developing a networking platform.
      </li>
    </ul>
  </motion.div>
);

export default ExperienceSection;
