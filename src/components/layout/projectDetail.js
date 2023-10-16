import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects.data.json';
import './styles/projectDetail.scss';

class ProjectDetail extends React.Component {
  render () {
    return (
      <section id="project_links">
        <div className="title">
          Projects
        </div>
        <div className="container mx-auto px-0 align-content-">
          <Grid container spacing={24} className="grid-container">
          {projects.map((project, key) => {
            return (
              <Grid key={key} item xs={12} sm={12} className="">
                <Link to={`/portfolio/work/${project.slug}`}>
                  <Card className='project-container'>
                    <CardContent className='project-content'>
                      <div className='project-media'>
                        <img src={project.src} alt={project.alt} className="project-bg-img"/>
                        <div className="overlay"></div>
                        <div className="logo-container">
                          <img src={project.logo} alt={project.logoAlt} className="project_logo"/>
                        </div>
                      </div>
                      <div className='project-info'>
                        <div className="project_name">{project.projectName}</div>
                        <div></div>
                        <div></div>
                      </div>
                    </CardContent>
                  </Card>
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
