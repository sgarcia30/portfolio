import React, { useEffect } from 'react';
import { projectObserver } from '../../utils/observers';
import './styles/bio.scss';

const Bio = () => {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-up");
    faders.forEach(fader => {
      projectObserver.observe(fader);
    });
  }, []);

  return (
    <section id="bio">
      <div className="title-experience fade-up">
        My Experience
      </div>
      <div className='experience fade-up'>
        <ul>
          <li>5+ years experience in <strong>React</strong>, <strong>Node.js</strong>, and <strong>Typescript</strong>.</li>
          <li>Effective <strong>problem-solver</strong>, consistently meeting project deadlines.</li>
          <li><strong>Collaborative</strong> team player fostering <strong>innovation</strong> and successful project outcomes.</li>
          <li>Versatile engineer with a strong foundation and <strong>passion for learning</strong>.</li>
        </ul>
      </div>
      <div className='experience-image fade-up'>
        <img src='/portfolio/images/clement-helardot.jpg' alt='generic-dev' className='exp-img' />
      </div>
    </section>
  );
}

export default Bio;
