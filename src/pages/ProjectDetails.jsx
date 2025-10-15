// src/pages/ProjectDetails.jsx
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = portfolioData.find(p => p.id === projectId);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Portfolio`;
      window.scrollTo(0, 0);
    } else {
      document.title = 'Project Not Found | Portfolio';
    }
  }, [project]);

  if (!project) {
    return (
      <div className="container py-5 text-center">
        <h2>Project Not Found!</h2>
        <p>Sorry, we couldn't find the project you're looking for.</p>
        <Link to="/portfolio" className="btn btn-primary mt-3">Back to Portfolio</Link>
      </div>
    );
  }

  const sections = [
    { id: 'problem', title: 'The Problem' },
    { id: 'solution', title: 'The Solution' },
    { id: 'architecture', title: 'Model Architecture' },
    { id: 'dataset', title: 'Dataset' },
    { id: 'training', title: 'Training Details' },
    { id: 'results', title: 'Results & Analysis' },
    { id: 'futureWork', title: 'Future Improvements' },
    { id: 'technologies', title: 'Technologies Used' },
    { id: 'gallery', title: 'Project Gallery' }
  ];

  return (
    <div className="project-details-page container py-5">
      <div className="project-layout">
        
        {/* --- Table of Contents --- */}
        <aside className="table-of-contents">
          <div className="toc-sticky">
            <h4>Contents</h4>
            <nav>
              <ul>
                {sections
                  .filter(section => project[section.id])
                  .map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{index + 1}. {section.title}</a>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* --- Main Project Content --- */}
        <main className="project-content">
          
          {/* --- Header Section --- */}
          <div className="project-header text-center mb-5">
            <Link to="/portfolio" className="back-to-portfolio">
              <FontAwesomeIcon icon={faChevronLeft} /> Back to Portfolio
            </Link>

            <h1 className="project-details-title">{project.title}</h1>

            <div className="project-meta">
              <span className="project-details-category">{project.category}</span>
              {project.year && (
                <span className="project-details-year">• {project.year}</span>
              )}
            </div>

            {project.summary && (
              <p className="project-summary mt-3">{project.summary}</p>
            )}

            <div className="project-links mt-4">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2">
                  Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              )}
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                  GitHub Repo <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
            </div>
          </div>

          <img src={project.mainImage} alt={project.title} className="project-details-image mb-5" />

          {/* --- Problem --- */}
          {project.problem && (
            <section id="problem" className="project-section">
              <h2>The Problem</h2>
              <div className="problem-layout">
                <p>{project.problem.statement}</p>
                {project.problem.image && <img src={project.problem.image} alt="Problem illustration" />}
              </div>
            </section>
          )}

          {/* --- Solution --- */}
          {project.solution && (
            <section id="solution" className="project-section">
              <h2>The Solution</h2>
              <p>{project.solution.description}</p>
              {project.solution.steps && (
                <div className="solution-steps">
                  {project.solution.steps.map(step => (
                    <div key={step.id} className="step-card">
                      <i className={step.icon}></i>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* --- Architecture --- */}
          {project.architecture && (
            <section id="architecture" className="project-section">
              <h2>Model Architecture</h2>
              <p>{project.architecture.summary}</p>
              <ul>
                {project.architecture.layers.map((layer, idx) => (
                  <li key={idx}>{layer}</li>
                ))}
              </ul>
            </section>
          )}

          {/* --- Dataset --- */}
          {project.dataset && (
            <section id="dataset" className="project-section">
              <h2>Dataset</h2>
              <p><strong>Source:</strong> {project.dataset.source}</p>
              <ul>
                {project.dataset.structure.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p><strong>Total:</strong> {project.dataset.size}</p>
              <p><strong>Split:</strong> {project.dataset.split}</p>
              <p><strong>Image Size:</strong> {project.dataset.imageSize}</p>
            </section>
          )}

          {/* --- Training --- */}
          {project.training && (
            <section id="training" className="project-section">
              <h2>Training Details</h2>
              <ul>
                {Object.entries(project.training.parameters).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* --- Results --- */}
          {project.results && (
            <section id="results" className="project-section">
              <h2>Results & Analysis</h2>
              <p><strong>Metrics:</strong></p>
              <ul>
                {Object.entries(project.results.metrics).map(([metric, value]) => (
                  <li key={metric}>{metric}: {value}</li>
                ))}
              </ul>
              <p><strong>Observations:</strong></p>
              <ul>
                {project.results.observations.map((obs, idx) => (
                  <li key={idx}>{obs}</li>
                ))}
              </ul>
            </section>
          )}

          {/* --- Future Work --- */}
          {project.futureWork && (
            <section id="futureWork" className="project-section">
              <h2>Future Improvements</h2>
              <ul>
                {project.futureWork.improvements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* --- Technologies --- */}
          {project.technologies && (
            <section id="technologies" className="project-section">
              <h2>Technologies Used</h2>
              <div className="tech-tags">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </section>
          )}

          {/* --- Gallery --- */}
          {project.gallery && project.gallery.length > 0 && (
            <section id="gallery" className="project-section">
              <h2>Project Gallery</h2>
              <div className="gallery-grid">
                {project.gallery.map((image, index) => (
                  <img key={index} src={image} alt={`${project.title} gallery image ${index + 1}`} />
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
