import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects.data.json';
import './styles/projectDetail.scss';

class ProjectDetail extends React.Component {
  render () {
    return (
      <section id="project_links">
        <div className="container mx-auto px-0 align-content-">
          <Grid container spacing={24} className="grid-container">
          { projects.map((project, key) => {
            return (
              <Grid key={key} item xs={12} sm={6} className="imageHover">
                <Link to={`/portfolio/work/${project.slug}`}>
                  <img src={project.src} alt={project.alt} className="img-fluid desaturate" />
                  <div className="overlay"></div>
                  <h2 className="project_name text-center">{project.projectName}</h2>
                  <div className="logo-container"><img src={project.logo} alt={project.logoAlt} className="project_logo" /></div>
                </Link>
              </Grid>
            );
          })}
          </Grid>
        </div>
      </section>
    );
  }
};

export default ProjectDetail;
