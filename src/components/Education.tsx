import React from 'react';
import { personalInfo } from '../data/personalInfo';

const Education: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {personalInfo.education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-period">{edu.period}</div>
              <div className="timeline-content">
                <h3>{edu.institution}</h3>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;