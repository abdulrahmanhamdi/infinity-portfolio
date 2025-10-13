// src/components/cards/TimelineItem.jsx
import { useInView } from 'react-intersection-observer';

export default function TimelineItem({ item, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });

  const isOdd = index % 2 !== 0;

  return (
    <div 
      ref={ref} 
      className={`timeline-item ${isOdd ? 'right' : 'left'} ${inView ? 'is-visible' : ''}`}
    >
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <span className="timeline-year">{item.year}</span>
        <h4 className="timeline-title">{item.title}</h4>
        <p className="timeline-description">{item.description}</p>
      </div>
    </div>
  );
}