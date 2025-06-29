import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import IMG from '../Assets/profile.jpeg';

const Body = () => {
  return (
    <section id="home" className="hero">
      <div className="avatar">
        <img src={IMG} alt="Profile" />
      </div>
      <h2>Tracy Ohowa</h2>
      <p>Software Developer</p>
      <div className="social-links">
        <a href="https://github.com/Ohowa" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Body;