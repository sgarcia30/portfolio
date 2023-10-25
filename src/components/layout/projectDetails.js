import React from 'react';
import Parser from 'html-react-parser';
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
            {Parser(detailPageInfo.details)}
            { (detailPageInfo.url && detailPageInfo.url.length) &&
              (<div className="bottom-button-container">
                <a href={detailPageInfo.url} rel="noopener noreferrer" target="_blank" className="btn mx-auto view-site">
                  <Button className="site-button">
                    View Live Site
                  </Button>
                </a>
              </div>)
            }
          </div>
          { detailPageInfo.roles &&
            (<React.Fragment>
              <hr />
              <h3 className="pt-3 pb-3">Role</h3>
              <div className="role-container">
                {detailPageInfo.roles.map((role, key) => {
                  return (
                    <p key={key}>
                      <DoubleArrowIcon className="tech-bullet" fontSize="small"/>{' '}{role.role}
                    </p>
                  );
                })}
              </div>
            </React.Fragment>
          )}
          <hr />
          { (detailPageInfo.tech) && (
            <div>
              <h3 className="pt-3 pb-3">Project Tech</h3>
              <div className="tech-container">
                { detailPageInfo.tech.map((tech, key) => {
                  return (
                    <span key={key} className="tech-bubbles" style={{ color: tech.color, backgroundColor: tech.backgroundColor }}>
                      {tech.text}
                    </span>
                  );
                })}
              </div>
              <hr />
            </div>
          )}
          <div>
          <div className="bottom-button-container">
              <a href="/portfolio/#project_links">
                <Button className="site-button">
                  <ArrowBackIcon className="back-icon" fontSize="default"/> All Work
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectDetails;
