import React from 'react';
import { personalInfo } from '../data/personalInfo';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {personalInfo.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;