import React from 'react';
import '../CSS/style.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.jpg';

function ProjectsSection() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <p className="section__text__p3">welcome to my portfolio showcase, where i present tangible manifestations of my expertise each project is accompanied by succinct descriptions and direct access to Code repositories and live demos. these exhibits serve as testament to my exceptional problem-solving abilities, proficiency in adapting to diverse technologgies, and proficient project mangement skills.</p>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project1}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">E-Commerce Website</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/RiteshGadakh/passionForfashion')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://passionforfashion.onrender.com/')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project2}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Ritesh|Portfolio Website</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/RiteshGadakh/Ritesh-Portfolio')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('ritesh-gadakh.netlify.app')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project3}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Photography Website</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/RiteshGadakh/Morya-Art_Studio')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('morya-art-studio.netlify.app')}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
