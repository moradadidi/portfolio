// src/components/ProjectsSection.jsx
import { BiBriefcaseAlt, BiCodeAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const projects = ["Sales & Task Management App", "Networking Platform", "Full-Stack Portfolio App"];

const ProjectsSection = () => (
  <motion.div className="lg:col-span-3 p-8 bg-gradient-to-r from-darkGray to-bgPrimary rounded-lg shadow-xl">
    <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
      <BiBriefcaseAlt className="text-accentPurple" /> My Projects
    </h2>
    <ul className="mt-6 space-y-4">
      {projects.map((project, index) => (
        <motion.li key={index} className="flex justify-between items-center hover:text-textAccent transition-colors cursor-pointer">
          <span>{project}</span>
          <BiCodeAlt />
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default ProjectsSection;
