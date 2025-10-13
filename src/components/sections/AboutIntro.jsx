// src/components/sections/AboutIntro.jsx
import { Link } from 'react-router-dom';

export default function AboutIntro() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-center mb-4 mb-lg-0">
            <img 
              src="/assets/img/pic.jpg" 
              alt="Profile Picture" 
              className="profile-img" 
            />
          </div>

          <div className="col-lg-8">
            <h1 className="display-5 fw-bold">Abdulrahman <span>Hamdi</span></h1>
            <p className="lead text-muted mb-4">
              Computer & AI Engineer | Full-Stack Developer | Author
            </p>
            
            <p className="summary-text">
              A multidisciplinary Computer and AI Engineer, ranked first in my department at Sivas Cumhuriyet University. My expertise lies at the intersection of Artificial Intelligence, Full-Stack Web Development, and Embedded Systems. I have hands-on experience designing and implementing deep learning models (CNN, GAN), developing full-stack platforms with Django and React, and building IoT systems using Raspberry Pi.
            </p>
            <p className="summary-text">
              Passionate about creating innovative digital solutions that combine intelligence, usability, and efficiency.
            </p>

            <div className="key-points mt-4">
              <div className="point-item">
                <i className="bi bi-robot"></i>
                <span>AI & Deep Learning Specialist</span>
              </div>
              <div className="point-item">
                <i className="bi bi-code-slash"></i>
                <span>Full-Stack Web Development</span>
              </div>
              <div className="point-item">
                <i className="bi bi-book"></i>
                <span>Published Author of Two Books </span>
              </div>
            </div>

            <Link to="/portfolio" className="btn btn-primary mt-4 me-3">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-outline-primary mt-4">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}