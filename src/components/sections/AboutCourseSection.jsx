// src/components/sections/AboutCourseSection.jsx
import FadeInWhenVisible from '../ui/FadeInWhenVisible';

export default function AboutCourseSection({ long_description, instructor }) {
  return (
    <section className="about-course-section">
      <div className="container">
        <FadeInWhenVisible>
          <h2 className="section-title text-center">About <span>This Course</span></h2>
          <div className="about-text-box">
            {/* Use the long description here */}
            <p className="course-description-full">{long_description}</p>
            {instructor && <p className="instructor">Instructor: <span>{instructor}</span></p>}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}