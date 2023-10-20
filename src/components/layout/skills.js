import React from 'react';
import Grid from '@material-ui/core/Grid';
import { skills } from '../../data/skills.data.json';
import './styles/skills.scss';

class Skills extends React.Component {
  render () {
    return (
      <section id="skills">
        <div className="container mx-auto px-0 align-content-">
          <Grid container spacing={10} className="grid-container" style={{ justifyContent: 'center' }}>
          { skills.map((skill, key) => {
            return (
              <Grid key={key} item xs={6} sm={3} >
                  <img src={skill.logo} alt={skill.alt} className="skill-img" />
                  <h2 className="skill_name">{skill.title}</h2>
              </Grid>
            );
          })}
          </Grid>
        </div>
      </section>
    );
  }
};

export default Skills;
