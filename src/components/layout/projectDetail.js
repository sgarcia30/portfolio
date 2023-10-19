import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects.data.json';
import './styles/projectDetail.scss';

class ProjectDetail extends React.Component {
  render () {
    if (document.querySelector('.grid-container')) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const project = entry.target.querySelector('.project-container');
      
          if (entry.isIntersecting) {
            project.classList.add('project-animation');
          return; // if we added the class, exit the function
          }
      
          // We're not intersecting, so remove the class!
          project.classList.remove('project-animation');
        });
      });
      console.log(document.querySelector('.grid-container'));
      observer.observe(document.querySelector('.grid-container'));
    }
    return (
      <section id="project_links">
        <div className="title">
          Projects
        </div>
        <div className="container mx-auto px-0 align-content-">
          <Grid container spacing={10} className="grid-container">
          {projects.map((project, key) => {
            return (
              <Grid key={key} item xs={12} sm={12} className="project-item">
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
                      <div className='project-details'>
                        {project.detailPageInfo.details}
                      </div>
                      <div className='project-cta'>
                        <Link to={`/portfolio/work/${project.slug}`}>
                          <Button className="cta-button">
                            View Project Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
