import React from 'react';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="bio">
            <h3>{personalInfo.name}</h3>
            <p className="nationality">Nationality: {personalInfo.nationality}</p>
            <p className="about-text">{personalInfo.about}</p>
          </div>
          
          <div className="additional-info">
            <div className="info-item">
              <h4>Languages</h4>
              <p>{personalInfo.additionalQualifications[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;