// src/components/ui/BackToTopButton.jsx
import { useState, useEffect } from 'react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={`back-to-top-btn ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Go to top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}