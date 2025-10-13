// src/components/cards/CourseCard.jsx
import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3 className="course-title">{course.title}</h3>
      <span className="course-category">{course.category}</span>
      <p className="course-description">{course.description}</p>
      <Link to={course.link} className="course-link">DETAILS</Link>
    </div>
  );
}