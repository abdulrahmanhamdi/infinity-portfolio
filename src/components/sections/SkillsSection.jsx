// src/components/sections/SkillsSection.jsx
import { useInView } from 'react-intersection-observer'; 
import { technicalSkills, professionalSkills } from '../../data/skills';

export default function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center">Technical <span>Skills</span></h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {technicalSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <label><i className={skill.icon}></i> {skill.name}</label>
                <div className="progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: inView ? skill.level : '0%' }}
                  >
                    {skill.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="section-title text-center mt-5">Professional <span>Skills</span></h2>
        <div className="row text-center">
          {professionalSkills.map((skill, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="circular-skill">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className={`circle ${inView ? 'animate' : ''}`}
                    strokeDasharray={`${skill.level}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className="percentage">{skill.level}%</text>
                </svg>
                <p className="skill-name">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}