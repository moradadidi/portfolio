// src/sections/Skills.jsx
import { FaReact, FaNodeJs, FaJs, FaPython, FaDatabase, FaToolbox } from "react-icons/fa";

const skills = [
  {
    category: "Programming Languages",
    icon: <FaJs />,
    details: "JavaScript, TypeScript, HTML5, CSS, Python, PHP",
  },
  {
    category: "Frameworks",
    icon: <FaReact />,
    details: "React.js, Express.js, Node.js, Laravel",
  },
  {
    category: "Databases",
    icon: <FaDatabase />,
    details: "MySQL, PostgreSQL",
  },
  {
    category: "Front-End",
    icon: <FaReact />,
    details: "HTML5, CSS, Tailwind, Bootstrap, React.js",
  },
  {
    category: "Back-End",
    icon: <FaNodeJs />,
    details: "Express.js, Node.js, PHP, Laravel",
  },
  {
    category: "Data Science",
    icon: <FaPython />,
    details: "Python, Matplotlib, Seaborn",
  },
  {
    category: "Tools",
    icon: <FaToolbox />,
    details: "Git, MongoDB, UML",
  },
];

const SkillsSection = () => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-md">
    <h2 className="text-xl font-semibold mb-4">Skills</h2>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center space-x-2">
          {skill.icon}
          <span>
            <strong>{skill.category}:</strong> {skill.details}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default SkillsSection;

