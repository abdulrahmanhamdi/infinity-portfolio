// src/pages/InfinityTeam.jsx
import { coursesData } from '../data/courses';
import CourseCard from '../components/cards/CourseCard';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import LearningPathSection from '../components/sections/LearningPathSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import StatisticsSection from '../components/sections/StatisticsSection';
import AboutTeamSection from '../components/sections/AboutTeamSection'; 
import FeedbackSection from '../components/sections/FeedbackSection';

export default function InfinityTeam() {
  return (
    <>
      {/* Hero Section for this page */}
      <section className="infinity-hero-section d-flex align-items-center text-center">
        <div className="container">
          <FadeInWhenVisible>
            <h1>
              <span className="gradient-text">Welcome</span><br />
              to <span className="brand-text">Infinity Team.</span>
            </h1>
            <h3 className="subtitle">Math and Programming</h3>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section" id="courses">
        <div className="container text-center">
          <FadeInWhenVisible>
            <h2 className="section-title">
              <span>My</span> Courses
            </h2>
            <div className="course-grid">
              {coursesData.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
      <LearningPathSection />
      <TestimonialsSection />
      <StatisticsSection />
      <AboutTeamSection /> 
      <FeedbackSection />
    </>
  );
}