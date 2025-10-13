// src/components/sections/AboutTeamSection.jsx
import FadeInWhenVisible from '../ui/FadeInWhenVisible';

export default function AboutTeamSection() {
  return (
    <section className="about-team-section">
      <div className="container">
        <FadeInWhenVisible>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="about-title">About Infinity Team</h2>
              <p>
                Welcome to the Infinity Team Channel! We're thrilled to have you join our vibrant community. At Infinity, our mission is to make the exchange of ideas and information as seamless and effective as possible.
              </p>
              <p>
                We are dedicated to solving complex mathematical problems and developing cutting-edge programming solutions.
              </p>
              <p className="since">Founded in 2020</p>
            </div>
            <div className="col-md-6 text-center">
              <img src="src\assets\img\logo-transparent.png" className="about-image" alt="Infinity Team Logo" />
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}