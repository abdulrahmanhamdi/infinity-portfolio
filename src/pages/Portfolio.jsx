// src/pages/Portfolio.jsx
import { useState, useEffect } from 'react';
import { getProjects } from '../services/firestore';
import ProjectCard from '../components/cards/ProjectCard';
import Modal from '../components/ui/Modal';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Set the browser tab title
  useEffect(() => {
    document.title = "Portfolio | Abdulrahman Hamdi";
  }, []);

  // Fetch project data from Firestore
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter logic
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(project => project.category === activeFilter);

  // Modal logic
  const [selectedProject, setSelectedProject] = useState(null);
  const handleCardClick = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h2>Loading projects...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="container py-5">
        <FadeInWhenVisible>
          <div className="text-center mb-5">
            <h1 className="section-title">
              My <span>Portfolio</span>
            </h1>
            <p className="section-subtitle">
              A complete showcase of my work and projects.
            </p>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="project-grid">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleCardClick(project)}
              />
            ))}
          </div>
        </FadeInWhenVisible>
      </div>

      <Modal
        show={!!selectedProject}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
}