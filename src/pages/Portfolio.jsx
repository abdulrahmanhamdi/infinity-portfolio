// src/pages/Portfolio.jsx
import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData'; // Step 1: Import local data
import FeaturedProjectCard from '../components/cards/FeaturedProjectCard'; // Step 2: We will create this component next
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
// Note: Modal component is no longer used in this new design, so it can be removed.

export default function Portfolio() {
  // Use the static data directly, no need for loading or firestore fetching for now
  const [projects, setProjects] = useState(portfolioData);

  // Set the browser tab title
  useEffect(() => {
    document.title = "Portfolio | Abdulrahman Hamdi";
  }, []);

  // Filter and Modal logic has been removed to simplify for the new design.
  // The new card will link to a details page instead of opening a modal.

  return (
    <div className="container py-5">
      <FadeInWhenVisible>
        <div className="text-center mb-5">
          <h1 className="section-title">
            My <span>Portfolio</span>
          </h1>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion for technology.
          </p>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        {/* Step 3: Use the new grid class and map over the projects */}
        <div className="featured-project-grid">
          {projects.map(project => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </FadeInWhenVisible>
    </div>
  );
}