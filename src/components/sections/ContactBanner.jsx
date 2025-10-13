// src/components/sections/ContactBanner.jsx
import { Link } from 'react-router-dom';

export default function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="container text-center">
        <h1>Ready to start a new project?</h1>
        <p>Let's build something amazing together!</p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Contact Me
        </Link>
      </div>
    </section>
  );
}