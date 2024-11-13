// src/pages/Projects.jsx
import ProjectsSection from '../components/Projects';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-gray-300 p-6 font-sans">
      <div className="container mx-auto py-12">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Projects;
