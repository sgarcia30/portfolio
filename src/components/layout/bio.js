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
              <img src="/portfolio/images/gardenPostUncompressed_cropped.jpeg" alt="bio_img" className="bio-img" />
            </Grid>
            <Grid item xs={12} sm={6} className="img-bio-grid">
              <p class='bio-text'>
                <h1>I'm a full stack web application developer, currently living in Georgia.</h1>
                I’m also a Mechanical Engineer. I have a Full Stack Web Development certificate from Thinkful and a BS in Mechanical Engineering from the Georgia Institute of Technology.  Both web development and engineering, at their core, are problem solving & that is what I was made to do. I am self-motivated with a strong work ethic.
                <br/>
                <br/>
                When I'm not coding, I can be found wearing overalls in my vegetable garden, wearing overalls under the hood of a car, or wearing overalls spending time with friends and family. I like overalls. Furthermore, I live to learn. My current areas of learning (besides code) include: gardening, playing the ukulele, and essential oils.
              </p>
              <a href="https://resume.io/r/XH6FrzeP6" rel="noopener noreferrer" target="_blank">
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
