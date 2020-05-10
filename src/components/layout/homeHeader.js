import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import './styles/homeHeader.scss';

class HomeHeadeer extends React.Component {
  render() {
    return (
      <Container disableGutters={true} maxWidth={false}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
        <div className="header-img">
          <div className="intro">
            <div>
              <h1 className="main-intro">
                <strong>Sarah Ann Garcia</strong>
              </h1>
              <hr />
            </div>
            <div>
              <p className="bio-blurb">
                Web Engineer
              </p>
            </div>
          </div>
        </div>
        </Grid>
      </Container>
    );
  }
}

export default HomeHeadeer;
