import React from 'react';
import Avatar from '../Assets/aboutme.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-avatar">
        <img 
          src={Avatar}
          alt="About me illustration" 
        />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am a passionate software developer with expertise in modern web technologies. 
          I love creating beautiful, functional applications that solve real-world problems. 
          My journey in tech started several years ago, and I continue to learn and grow every day.
          When I'm not coding, you can find me exploring new frameworks, contributing to open source,
          or sharing knowledge with the developer community.
        </p>
      </div>
    </section>
  );
};

export default About;