import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Modal from '@material-ui/core/Modal';
import { ProjectImgs } from '../../components';
import './styles/projectDetails.scss';

function getModalStyle() {
  return {
    position: 'absolute',
    width: '60%',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const ProjectDetails = (props) => {
  let classes = getModalStyle();
  const { data: detailPageInfo } = props
  const [image, setImage] = useState({});
  const [open, setOpen] = useState(false);

  const modalData = (image) => {
    setImage(image);
    setOpen(prevVal => !prevVal);
  }

  const handleModalState = () => {
    setOpen(prevVal => !prevVal);
  }
  return (
    <div className="detail-container">
      <Modal
        open={open}
        onClose={handleModalState}
        aria-labelledby="image-modal"
        aria-describedby="image-modal"
      >
        <div style={classes} className="modal-body">
          <img src={image.src} alt={image.alt} className="modal-img" />
        </div>
      </Modal>
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
        <div className='project-writeup'>
          <h3 className='project-title'>Problem</h3>
          <div className='project-problem'>{detailPageInfo.problem}</div>
          <h3 className='project-title'>Solution</h3>
          <ProjectImgs modalData={modalData} data={detailPageInfo}/>
          <div className='project-solution'>{detailPageInfo.solution}</div>
          <h3 className='project-title'>Result</h3>
          <div className='project-result'>{detailPageInfo.result}</div>
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
};

export default ProjectDetails;
