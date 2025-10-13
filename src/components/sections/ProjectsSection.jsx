// src/components/sections/ProjectsSection.jsx
import { useState } from 'react'; 
import { projectsData } from '../../data/projects';
import ProjectCard from '../cards/ProjectCard';
import Modal from '../ui/Modal'; 

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-section">
      <div className="container text-center">
        <h2 className="section-title"><span>Selected</span> Projects</h2>
        <p className="section-subtitle">
          A collection of projects I've worked on as a freelancer and a student.
        </p>
        <div className="project-grid">
          {projectsData.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project}
              onClick={() => handleCardClick(project)} 
            />
          ))}
        </div>
      </div>

      <Modal 
        show={!!selectedProject} 
        project={selectedProject} 
        onClose={handleCloseModal} 
      />
    </section>
  );
}