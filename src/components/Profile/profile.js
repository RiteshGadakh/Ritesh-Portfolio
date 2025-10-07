import React from 'react';
import '../CSS/style.css';
import ritesh from '../assets/ritesh2.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const ProfileSection = () => {
  const openResume = () => {
    // const pdfUrl = 'https://drive.google.com/file/d/13DBb7Gd_2hRlvzZMgXeYHqsr-LwO9ALu/view?usp=sharing';
    // window.open(pdfUrl, '_blank');
     window.open("../assets/Ritesh_Resume.pdf");
  };

  const openContactInfo = () => {
    window.location.href = './#form-details';
  };

  const openLinkedIn = () => {
    window.location.href = 'https://linkedin.com/';
  };

  const openGithub = () => {
    window.location.href = 'https://github.com/';
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img 
        src={ritesh}
        alt="Ritesh profile picture" 
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Ritesh Gadakh</h1>
        <p className="section__text__p2">Web Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={openResume}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={openContactInfo}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="My LinkedIn profile"
            className="icon"
            onClick={openLinkedIn}
          />
          <img
            src={github}
            alt="My Github profile"
            className="icon"
            onClick={openGithub}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
