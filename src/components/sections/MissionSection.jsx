// src/components/sections/MissionSection.jsx
import { audienceData } from '../../data/audience';
import TargetAudienceCard from '../cards/TargetAudienceCard';

export default function MissionSection() {
  return (
    <section className="mission-section">
      <div className="container text-center">
        <h2 className="section-title">
          <span>Who Is This For?</span>
        </h2>
        <p className="section-subtitle">
          A platform crafted for ambitious students who aim to master concepts, solve problems, and succeed academically.
        </p>
        <div className="row justify-content-center g-4">
          {audienceData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <TargetAudienceCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}