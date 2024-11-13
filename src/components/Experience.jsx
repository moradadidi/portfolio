// src/components/ExperienceSection.jsx
import { BiBriefcaseAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const ExperienceSection = () => (
  <motion.div className="lg:col-span-3 p-8 bg-gradient-to-r from-bgSecondary to-darkGray rounded-lg shadow-xl">
    <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
      <BiBriefcaseAlt className="text-accentPurple" /> My Experience
    </h2>
    <ul className="mt-6 space-y-6 text-gray-400">
      <li>
        <h3 className="font-semibold">Web Application Development</h3>
        <p className="text-sm">Jan 2023 - Present</p>
        <p className="text-sm">Developed a web application for product sales and task management.</p>
      </li>
      <li>
        <h3 className="font-semibold">Hackathon Participant</h3>
        <p className="text-sm">April 2024 | OFPPT</p>
        <p className="text-sm">Won 3rd place, developed a networking platform with messaging and search features.</p>
      </li>
    </ul>
  </motion.div>
);

export default ExperienceSection;
