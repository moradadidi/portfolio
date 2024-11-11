import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

const ContactSection = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    className="bg-bgSecondary rounded-lg p-6 shadow-lg"
  >
    <div className="flex items-center space-x-2 mb-4">
      <FaEnvelope className="text-accentPurple text-2xl" data-tip="Contact" />
      <ReactTooltip place="top" type="dark" effect="solid" />
      <h2 className="text-xl font-semibold">Contact</h2>
    </div>
    <p>
      <FaEnvelope className="inline-block mr-2" /> adidimorad7@gmail.com
    </p>
    <p>
      <FaPhone className="inline-block mr-2" /> 0634728767
    </p>
  </motion.div>
);

export default ContactSection;
