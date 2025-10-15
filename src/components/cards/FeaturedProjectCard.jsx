// src/components/cards/FeaturedProjectCard.jsx
import { Link } from 'react-router-dom';

export default function FeaturedProjectCard({ project }) {
  return (
    // The entire card is a link to the project details page
    <Link to={`/portfolio/${project.id}`} className="featured-project-card">
      
      {/* The project's background image */}
      <img src={project.mainImage} alt={project.title} />
      
      {/* The overlay that appears on hover */}
      <div className="overlay">
        <h3>{project.title}</h3>
      </div>

    </Link>
  );
}