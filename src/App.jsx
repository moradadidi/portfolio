import {
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import { FaReact, FaNodeJs, FaJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip"; // Install with 'npm install react-tooltip'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-8 font-sans">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Column 1: Intro and About Me */}
        <div className="flex flex-col gap-8">
          {/* Intro Section */}
          <motion.div
            className="bg-gradient-to-br from-purple-800 to-purple-500 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl font-bold">Mourad Adidi</h1>
            <p className="mt-4">Full-Stack Developer | Casablanca, Morocco</p>
          </motion.div>

          {/* About Me Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold flex items-center">
              About Me <span className="ml-2 text-green-400">🔗</span>
            </h2>
            <p className="mt-4 text-gray-400">
              Full-stack developer with a strong foundation in software development and problem-solving. Experienced in
              building efficient and reliable solutions, continuously expanding skills to keep pace with evolving
              technologies.
            </p>
          </div>

          {/* Resume Download */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-between hover:bg-gray-700 transition duration-300">
            <span className="text-lg">My Resume</span>
            <button
              className="flex items-center gap-2 text-gray-300 hover:text-white"
              data-tooltip-id="download-tooltip"
              data-tooltip-content="Download Resume"
            >
              <FaDownload /> Download
            </button>
            <Tooltip id="download-tooltip" />
          </div>
        </div>

        {/* Column 2: Projects and Tech Stack */}
        <div className="flex flex-col gap-8">
          {/* Projects Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold flex items-center">
              My Projects <FaCode className="ml-2 text-blue-400" />
            </h2>
            <ul className="mt-4 space-y-2 text-gray-400">
              {["Sales & Task Management App", "Networking Platform (Hackathon)", "Full-Stack Portfolio App"].map(
                (project) => (
                  <li
                    key={project}
                    className="flex justify-between hover:text-indigo-400 cursor-pointer transition-colors duration-200"
                  >
                    <span>{project}</span>
                    <FaCode />
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Tech Stack Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Tech I Love</h2>
            <div className="mt-4 flex flex-wrap gap-4">
              {[FaReact, FaJs, FaHtml5, FaCss3Alt, FaPhp, FaPython, FaNodeJs, FaGitAlt].map((Icon, index) => (
                <Icon key={index} className="text-yellow-400 hover:text-yellow-500 transition duration-300" size={30} />
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Experience and Education */}
        <div className="flex flex-col gap-8">
          {/* Experience Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold flex items-center">
              My Experience <FaBriefcase className="ml-2 text-yellow-400" />
            </h2>
            <ul className="mt-4 text-gray-400 space-y-4">
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
              <li>
                <h3 className="font-semibold">Personal Project - Full-Stack Development</h3>
                <p className="text-sm">May 2024 - June 2024</p>
                <p className="text-sm">Built a complete web app focusing on UI/UX and performance optimization.</p>
              </li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold flex items-center">
              My Education <FaGraduationCap className="ml-2 text-green-400" />
            </h2>
            <ul className="mt-4 text-gray-400 space-y-4">
              <li>
                <h3 className="font-semibold">Digital Development (CFPMS)</h3>
                <p className="text-sm">June 2023 - Ongoing</p>
                <p className="text-sm">Specializing in full-stack development.</p>
              </li>
              <li>
                <h3 className="font-semibold">Université Hassan II - Chemistry</h3>
                <p className="text-sm">Oct 2022 - Sept 2023</p>
                <p className="text-sm">Focused on analytical and research skills.</p>
              </li>
              <li>
                <h3 className="font-semibold">College Molay Ismail - Life and Earth Sciences</h3>
                <p className="text-sm">Oct 2021 - Sept 2022</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 4: Contact and Social Links */}
        <div className="flex flex-col gap-8">
          {/* Contact Me Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold flex items-center">
              Contact Me <span className="ml-2 text-green-400">🔗</span>
            </h2>
            <p className="mt-4 text-gray-400">Feel free to reach out!</p>
            <p className="mt-2 flex items-center gap-2">
              <FaEnvelope /> adidimorad7@gmail.com
            </p>
            <p className="mt-2 flex items-center gap-2">
              <FaPhone /> 0634728767
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-around hover:bg-gray-700 transition duration-300">
            {[
              { icon: FaGithub, link: "https://github.com/your-github" },
              { icon: FaLinkedin, link: "https://linkedin.com/in/your-linkedin" },
              { icon: FaInstagram, link: "https://instagram.com/your-instagram" },
            ].map(({ icon: Icon, link }, index) => (
              <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                <Icon size={30} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
