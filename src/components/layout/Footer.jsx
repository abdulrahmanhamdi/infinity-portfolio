// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          {/* Column 1: About */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>About Me</h5>
            
              A passionate Computer & AI Engineer dedicated to building innovative and efficient digital solutions.
            
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h5>Follow Me</h5>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/abdulrahman-hamdi-54a8a6143/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/abdulrahmanhamdi" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
              <a href="https://x.com/abdulrahmanh524" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
              <a href="https://www.instagram.com/98abdulrahmanhamdi/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="text-center">
          <p className="footer-bottom">
            © {new Date().getFullYear()} Abdulrahman Hamdi — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}