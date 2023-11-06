import React, { useEffect, useRef } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Parser from 'html-react-parser';
import { headerObserver } from '../../utils/observers';

import './styles/header.scss';

const Header = (props) => {
  const { tagline } = props;
  const landingDiv = useRef();
  useEffect(() => {
    headerObserver.observe(landingDiv.current);
  });

  return (
    <Container disableGutters={true} maxWidth={false}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
      <div className="header-img" ref={landingDiv}>
        <div className="intro">
          <div>
            <p className="bio-blurb">
              Sarah Ann Garcia.
            </p>
          </div>
          <div>
            <div className="main-intro">
              <strong>{tagline.line1a}</strong>
            </div>
            <div className="main-intro">
              <strong>{tagline.line1b}</strong>
            </div>
          </div>
          <div>
            <p className="bio-blurb">
              {Parser(tagline.line2)}
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
        <div className="section"></div>
      </div>
      </Grid>
    </Container>
  );
}

export default Header;
