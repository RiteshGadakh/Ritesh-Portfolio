import React from 'react';
import '../CSS/style.css';
import about from '../assets/about-pic.png';
import experience from '../assets/experience.png';
import education from '../assets/education.png';


const AboutSection = () => {
  return (
    <section id="about">
      <span><br/><br/></span>
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={about}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experience}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>6+ Month <br />Frontend Developer <br/><strong>- Softcrowd Technology</strong></p>
            </div>
            <div className="details-container">
              <img
                src={education}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>Masters in<br />Computer Science</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Dedicated web developer with expertise in front-end and back-end technologies, combining creativity and technical skills to craft high-quality, responsive, and dynamic websites for impactful online experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
