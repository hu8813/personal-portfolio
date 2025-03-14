import React from 'react';
import { personalInfo } from '../data/personalInfo';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {personalInfo.experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-period">{exp.period}</div>
              <div className="timeline-content">
                <h3>{exp.position} {exp.company && `at ${exp.company}`}</h3>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;