// src/components/sections/Hero.jsx
import { Link } from 'react-router-dom';
import { useTypedText } from '../../hooks/useTypedText';

export default function Hero() {
  const typedText = useTypedText(
    ["Freelance Programmer", "Front-end Developer", "AI Enthusiast"],
    100,
    50
  );

  return (
    <section className="hero-section d-flex align-items-center text-center">
      <div className="container">
        <h1 className="hero-title display-3 fw-bold">
          Hi, I am <br />
          <span className="gradient-text">Abdulrahman Hamdi.</span>
        </h1>
        <h3 className="hero-subtitle fs-4 my-4">
          <span>{typedText}</span>
          <span className="blinking-cursor">|</span>
        </h3>
        <Link to="/about" className="btn btn-primary btn-lg mt-3">
          Know More
        </Link>
        <div className="social-icons mt-5">
          <p className="mb-2">Join me here</p>
          <a href="https://www.linkedin.com/in/abdulrahman-hamdi-54a8a6143/" target="_blank" rel="noopener noreferrer" className="icon-link mx-2 fs-4"><i className="bi bi-linkedin"></i></a>
          <a href="https://www.instagram.com/98abdulrahmanhamdi/" target="_blank" rel="noopener noreferrer" className="icon-link mx-2 fs-4"><i className="bi bi-instagram"></i></a>
          <a href="https://github.com/abdulrahmanhamdi" target="_blank" rel="noopener noreferrer" className="icon-link mx-2 fs-4"><i className="bi bi-github"></i></a>
        </div>
      </div>
    </section>
  );
}