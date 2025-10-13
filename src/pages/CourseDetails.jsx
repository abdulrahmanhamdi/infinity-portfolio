// src/pages/CourseDetails.jsx
import { useParams } from 'react-router-dom';
import { coursesData } from '../data/courses';
import CourseMaterialsSection from '../components/sections/CourseMaterialsSection'; // <-- استيراد
import AboutCourseSection from '../components/sections/AboutCourseSection';     // <-- استيراد
import CourseContactBanner from '../components/sections/CourseContactBanner';   // <-- استيراد

export default function CourseDetails() {
  const { slug } = useParams();
  const course = coursesData.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="container py-5 text-center">
        <h2>Course Not Found!</h2>
        <p>Sorry, we couldn't find the course you're looking for.</p>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section for Course Details */}
      <section className="course-details-hero d-flex align-items-center text-center">
        <div className="container">
          <h1 className="course-details-title">{course.title}</h1>
          <p className="course-details-category">{course.category}</p>
        </div>
      </section>

      {/* Course Materials Section */}
      <CourseMaterialsSection materials={course.materials} />

      {/* About Course Section */}
      <AboutCourseSection long_description={course.long_description}  instructor={course.instructor} />

      {/* Course Contact Banner */}
      <CourseContactBanner />
    </>
  );
}