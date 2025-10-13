// src/components/sections/CourseContactBanner.jsx
import FadeInWhenVisible from '../ui/FadeInWhenVisible';

export default function CourseContactBanner() {
  return (
    <section className="course-contact-banner">
      <div className="container text-center">
        <FadeInWhenVisible>
          <h1>Need help with a concept or topic?</h1>
          <p>I’m available to discuss your challenges in math, programming, or university courses. Let’s solve it together.</p>
          <div className="social-icons mt-4">
            <a href="https://www.linkedin.com/in/abdulrahman-hamdi-54a8a6143/" target="_blank" rel="noopener noreferrer" className="icon-link mx-2 fs-4" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://wa.me/905314551282" target="_blank" rel="noopener noreferrer" className="icon-link mx-2 fs-4" title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:abdulrahmanh524@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-link mx-2 fs-4" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}