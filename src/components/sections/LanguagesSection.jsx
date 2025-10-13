// src/components/sections/LanguagesSection.jsx
import { useInView } from 'react-intersection-observer';
import { languagesData } from '../../data/languages';

export default function LanguagesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="languages-section" id="languages" ref={ref}>
      <div className="container text-center">
        <h2 className="section-title">Language <span>Skills</span></h2>
        <div className="row justify-content-center">
          {languagesData.map((lang, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="circular-skill">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className={`circle ${inView ? 'animate' : ''}`}
                    strokeDasharray={`${lang.level}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className="percentage">{lang.label}</text>
                </svg>
                <p className="skill-name">{lang.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}