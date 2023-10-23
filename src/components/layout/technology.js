import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { technologies } from '../../data/tech.data.json';
import { projectObserver } from '../../utils/observers';
import './styles/technology.scss';

const Technology = () => {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-up");
    faders.forEach(fader => {
      projectObserver.observe(fader);
    });
  }, []);
  return (
    <section id="technology">
      <div className="title fade-up">
        My Technologies
      </div>
      <div className="container mx-auto px-0 align-content">
        <Grid container spacing={10} className="grid-container">
        {technologies.map((tech, key) => {
          return (
            <Grid key={key} item xs={6} sm={4} md={2} className="tech_item fade-up">
              <img src={tech.src} alt={tech.alt} className="tech_icon"/>
              <div className='tech_title'>{tech.title}</div>
            </Grid>
          );
        })}
        </Grid>
        <div className='tech_cta fade-up'>
          <Link to={`/portfolio/about`}>
            <Button className="cta-button">
              Learn More About Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Technology;
