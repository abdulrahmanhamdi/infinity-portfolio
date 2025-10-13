// src/components/sections/StatisticsSection.jsx
import { statsData } from '../../data/stats';
import CountUp from 'react-countup'; 
import FadeInWhenVisible from '../ui/FadeInWhenVisible';

export default function StatisticsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <FadeInWhenVisible>
          <div className="row text-center">
            {statsData.map((stat, index) => (
              <div className="col-md-4" key={index}>
                <div className="stat-box">
                  <h1 className="stat-number">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix || ''}
                      enableScrollSpy 
                      scrollSpyOnce 
                    />
                  </h1>
                  <h3 className="stat-label">{stat.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}