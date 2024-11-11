// src/sections/About.jsx
import { FaExternalLinkAlt } from 'react-icons/fa';

function About() {
  return (
    <div className="p-6 bg-gray-800 rounded-lg text-white max-w-xs mb-8">
      <h2 className="text-xl font-bold mb-4">
        Building the Future, One Line of Code at a Time
      </h2>
      <p className="text-gray-400 mb-4">
        Computer engineer with a strong foundation in problem-solving and software development...
      </p>
      <div className="flex items-center text-indigo-400 cursor-pointer">
        <span>About Me</span>
        <FaExternalLinkAlt className="ml-2" />
      </div>
    </div>
  );
}

export default About;
