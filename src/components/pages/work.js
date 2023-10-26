import React, { useState, useEffect } from 'react';
import { NavBar, Footer, ProjectDetails, WorkHeader } from '../../components';
import Grid from '@material-ui/core/Grid';
import { projects } from '../../data/projects.data.json';

const Work = (props) => {
  window.scrollTo(0, 0);
  const slug = props.match.params.slug;
  const [project, setProject] = useState();

  useEffect(() => {
    if (slug) {
      const foundProject = projects.find(project => {
        return project.slug === slug;
      });
      setProject(foundProject);
    }
  }, [slug]);

  return (
    <div id="work">
      {project && (
         <>
          <NavBar />
          <WorkHeader project={project} />
          <section id="project-detail">
            <Grid container spacing={10}>
              <Grid item xs={12} sm={12} className="img-detail-grid">
                <ProjectDetails data={project.detailPageInfo}/>
              </Grid>
            </Grid>
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Work;
