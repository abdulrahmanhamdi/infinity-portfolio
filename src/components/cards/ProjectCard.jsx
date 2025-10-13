// src/components/cards/ProjectCard.jsx

export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.category}</p>
    </div>
  );
}