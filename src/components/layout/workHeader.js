import React, { useEffect, useRef } from 'react';
import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import { WorkPageHeaderObserver } from '../../utils/observers';

import './styles/workHeader.scss';

const WorkHeader = (props) => {
  const { project } = props;
  const landingDiv = useRef();
  useEffect(() => {
    // homePageHeaderObserver.observe(landingDiv.current);
  });

  return (
    <Container disableGutters={true} maxWidth={false}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
      <div className="work-header-img" ref={landingDiv} style={{ background: `url(${project.src})`}}>
        <div className="work-overlay"></div>
          <div className="work-logo-container">
            <img src={project.logo} alt={project.logoAlt} className="work_project_logo"/>
          </div>
        </div>
      </Grid>
    </Container>
  );
}

export default WorkHeader;
