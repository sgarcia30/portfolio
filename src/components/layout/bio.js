import React, { useEffect } from 'react';
import { Card, CardContent } from '@material-ui/core';
import { projectObserver } from '../../utils/observers';
import { endorsements } from '../../data/endorsements.data.json';
import './styles/bio.scss';

const Bio = () => {
  window.scrollTo(0, 0);
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
      <div className="title-experience fade-up">
        Colleague Endorsements
      </div>
      <div className='endorsements-container'>
        {endorsements?.map((e, key) => {
          return (
            <div className='fade-up'>
              <Card className='endorsement-container' key={key}>
                <CardContent className='endorsement-content'>
                  <div className='endorsement'><em>{`"${e.endorsement}"`}</em></div>
                  <div>
                    <span className='endorsement-name'><strong>{e.name}</strong></span>
                    <span><em>{e.title}</em></span>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="title-experience fade-up">
        Offline
      </div>
      <div className='offline-bio fade-up'>
      When not coding, I can be found hiking and camping with my pal, Charlie. I live to learn, which is evident in my code, but this thirst for knowledge also extends to my offline hobbies. I find serenity in the great outdoors, immersing myself in the beauty of nature while exploring new hiking trails and setting up campfires under the stars. Yoga is my daily ritual for both physical and mental well-being, providing balance to my high-tech endeavors. I also have a deep appreciation for the therapeutic and healing benefits of essential oils, often crafting unique blends to promote relaxation and mindfulness during these moments of offline tranquility.
      </div>
      <div className='experience-image fade-up'>
        <img src='/portfolio/images/sa_charlie_lula.jpg' alt='hiking-with-charlie' className='exp-img' />
      </div>
    </section>
  );
}

export default Bio;
