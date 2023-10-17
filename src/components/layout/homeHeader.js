import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './styles/homeHeader.scss';

class HomeHeadeer extends React.Component {
  render() {
    return (
      <Container disableGutters={true} maxWidth={false}>
        <Grid
          container
          direction="row"
          justify="left"
          alignItems="left"
        >
        <div className="header-img">
          <div className="intro">
            <div>
              <p className="bio-blurb">
                Sarah Ann Garcia.
              </p>
            </div>
            <div>
              <div className="main-intro">
                <strong>Solving Complex Application</strong>
              </div>
              <div className="main-intro">
                <strong>Design Challenges</strong>
              </div>
            </div>
            <div>
              <p className="bio-blurb">
                With <em>dedication</em>, <em>perseverance</em>, and <em>integrity</em>.
              </p>
            </div>
            <div>
              <a href='/portfolio/sarahanngarcia_resume.pdf' rel="noopener noreferrer" target="_blank" className="btn mx-auto view-site">
                <Button className="cta-button">
                  View Resume
                </Button>
              </a>
            </div>
          </div>
          <div class="section"></div>
        </div>
        </Grid>
      </Container>
    );
  }
}

export default HomeHeadeer;
