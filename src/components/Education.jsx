// src/components/EducationSection.jsx
import { BiBook } from "react-icons/bi";
import { motion } from "framer-motion";

const EducationSection = () => (
  <motion.div className="p-8 bg-gradient-to-r from-accentPurple to-darkGray rounded-lg shadow-xl">
    <h2 className="text-2xl font-semibold flex items-center gap-2">
      <BiBook className="text-accentPurple" /> My Education
    </h2>
    <ul className="mt-4 space-y-6">
      <li>
        <h3 className="font-semibold">Digital Development (CFPMS)</h3>
        <p className="text-sm">June 2023 - Ongoing</p>
      </li>
      <li>
        <h3 className="font-semibold">Université Hassan II - Chemistry</h3>
        <p className="text-sm">Oct 2022 - Sept 2023</p>
      </li>
    </ul>
  </motion.div>
);

export default EducationSection;
