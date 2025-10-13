// src/components/sections/LearningPathSection.jsx
import { learningPathData } from '../../data/learningPath';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';

export default function LearningPathSection() {
  return (
    <section className="learning-path-section">
      <div className="container">
        <FadeInWhenVisible>
          <h2 className="section-title text-center">Learning Path To AI</h2>
          <div className="timeline-wrapper-single">
            {learningPathData.map((item, index) => (
              <div className="timeline-item-single" key={index}>
                <div className="timeline-dot-single"><i className={item.icon}></i></div>
                <div className="timeline-content-single">
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}