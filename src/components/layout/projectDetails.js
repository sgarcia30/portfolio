import React from 'react';
import Button from '@material-ui/core/Button';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './styles/projectDetails.scss';

class ProjectDetails extends React.Component {
  render () {
    let detailPageInfo = this.props.data;
    return (
      <div className="detail-container">
        <h2>{detailPageInfo.title}</h2>
        <hr />
        <div>
          <div className="detail-text">
            {detailPageInfo.description}
            {(detailPageInfo.url && detailPageInfo.url.length) &&
              (<div className="bottom-button-container">
                <a href={detailPageInfo.url} rel="noopener noreferrer" target="_blank" className="btn mx-auto view-site">
                  <Button className="cta-button">
                    View Live Site
                  </Button>
                </a>
              </div>)
            }
          </div>
          <hr />
          <div className="project-about">
            {detailPageInfo.roles &&
              (<div className="project-role">
                <h3 className='project-title'>Role</h3>
                <div className="role-container">
                  {detailPageInfo.roles.map((role, key) => {
                    return (
                      <p key={key}>
                        <DoubleArrowIcon className="tech-bullet" fontSize="small"/>{' '}{role.role}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
            {(detailPageInfo.tech) && (
              <div className='project-tech'>
                <h3 className='project-title'>Tech Stack</h3>
                <div className="tech-container">
                  { detailPageInfo.tech.map((tech, key) => {
                    return (
                      <span key={key} className="tech-bubbles" style={{ color: tech.color, backgroundColor: tech.backgroundColor }}>
                        {tech.text}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <hr />
          <div className="bottom-button-container">
              <a href="/portfolio/#project_links">
                <Button className="cta-button">
                  <ArrowBackIcon className="back-icon" fontSize="default"/> All Work
                </Button>
              </a>
            </div>
          </div>
      </div>
    );
  }
};

export default ProjectDetails;
