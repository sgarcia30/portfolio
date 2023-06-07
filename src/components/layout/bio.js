import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './styles/bio.scss';

class Bio extends React.Component {
  render () {
    return (
      <section id="bio">
        <Grid container spacing={24}>
            <Grid item xs={12} sm={6} className="img-bio-grid">
              <img src="/portfolio/images/sa_charlie_lula.jpg" alt="bio_img" className="bio-img" />
            </Grid>
            <Grid item xs={12} sm={6} className="img-bio-grid">
              <p class='bio-text'>
                <h1>I'm a full stack web application developer, currently living in Georgia.</h1>
                I obtained a BS in Mechanical Engineer from the Georgia Institute of Technology with a Full Stack Web Development certificate.  Both web development and engineering, at their core, are problem solving which is what I was made to do. I am self-motivated with a strong work ethic.
                <br/>
                <br/>
                When not coding, I can be found hiking and camping with my pal, Charlie. I live to learn which is evident in my code but can also be seen in my hobbies: camping, yoga, and essential oils.
              </p>
              <a href="/sarahanngarcia_resume.pdf" rel="noopener noreferrer" target="_blank" download>
                <Button className="resume-button">
                  Resume
                </Button>
              </a>
            </Grid>
          </Grid>
      </section>
    );
  }
}

export default Bio;
