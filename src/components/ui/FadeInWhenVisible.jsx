// src/components/ui/FadeInWhenVisible.jsx
import { useInView } from 'react-intersection-observer';

export default function FadeInWhenVisible({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,   
  });

  return (
    <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
}