import Navbar from "../components/Navbar";
import ProfileSection from "../components/ProfileSection";
import AboutSection from "../components/About";
import TechSection from "../components/Skills";
import ProjectsSection from "../components/Projects";
import ExperienceSection from "../components/Experience";
import EducationSection from "../components/Education";
import ContactSection from "../components/Contact";

function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-gray-300 p-6 font-sans relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/path/to/background-pattern..png)" }}
      ></div>

      {/* Content Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10 p-4 lg:p-12 rounded-lg shadow-lg">
        {/* Sections */}
        <ProfileSection />
        <AboutSection />
        <TechSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default Hero;
