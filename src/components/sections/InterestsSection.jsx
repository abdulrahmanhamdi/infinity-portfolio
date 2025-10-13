// src/components/sections/InterestsSection.jsx
import { useInView } from 'react-intersection-observer';
import { interestsData } from '../../data/interests';

export default function InterestsSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="interests-section" ref={ref}>
      <div className="container text-center">
        <h2 className="section-title">Personal <span>Interests</span></h2>
        <div className={`interest-grid ${inView ? 'is-visible' : ''}`}>
          {interestsData.map((interest, index) => (
            <div className="interest-item" key={index}>
              <i className={interest.icon}></i> {interest.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}