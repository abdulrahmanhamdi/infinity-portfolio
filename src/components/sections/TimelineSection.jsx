// src/components/sections/TimelineSection.jsx
import { timelineData } from '../../data/timeline';
import TimelineItem from '../cards/TimelineItem'; 

export default function TimelineSection() {
  return (
    <section className="timeline-section" id="timeline">
      <div className="container">
        <h2 className="section-title text-center">
          My <span>Journey</span>
        </h2>
        <div className="timeline-wrapper">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}