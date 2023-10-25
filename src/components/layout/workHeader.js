import React, { useEffect, useRef } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { workPageObserver } from '../../utils/observers';

import './styles/workHeader.scss';

const WorkHeader = (props) => {
  const workHeader = useRef();
  const { project } = props;
  useEffect(() => {
    workPageObserver.observe(workHeader.current);
  });

  return (
    <Container disableGutters={true} maxWidth={false}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
      <div className="work-header-img" ref={workHeader} style={{ background: `url(${project.src})`}}>
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
