import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Modal from '@material-ui/core/Modal';
import Parser from 'html-react-parser';
import { ProjectImgs } from '../../components';
import { projectObserver } from '../../utils/observers';
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

  useEffect(() => {
    const faders = document.querySelectorAll(".fade-up");
    faders.forEach(fader => {
      projectObserver.observe(fader);
    });
  }, []);

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
      <div>
        <div className='fade-up'>
          <h2>{detailPageInfo.title}</h2>
          <hr />
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
        </div>
        <hr />
        <div className="project-about fade-up">
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
            <div className='project-tech fade-up'>
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
        <div className='project-writeup fade-up'>
          {detailPageInfo.problem?.headline && (
            <>
              <h3 className='project-title'>Problem</h3>
              <div className='project-problem'>
                <span>{detailPageInfo.problem.headline}</span>
                <ul>
                  {detailPageInfo.problem.bullet_points?.map((bullet, key) => {
                    return (
                      <li key={key}>
                        {bullet}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </>
          )}
          <h3 className='project-title'>Solution</h3>
          <ProjectImgs modalData={modalData} data={detailPageInfo}/>
          <span className='image-note'>**Click images to enlarge**</span>
          <div className='project-solution'>{detailPageInfo.solution.headline}</div>
          {detailPageInfo.result?.bullet_points.length ? (
            <>
              <h3 className='project-title'>Result</h3>
              <div className='project-result'>
                <ul>
                  {detailPageInfo.result.bullet_points?.map((bullet, key) => {
                    return (
                      <li key={key}>
                        {Parser(bullet)}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </>
          ) : null}
        </div>
        <hr />
        <div className="bottom-button-container">
          <Link to={`/portfolio/work/${detailPageInfo.nextProjectSlug}`}>
            <Button className="cta-button">
              Next Project
              <ArrowForwardIcon className="forward-icon" fontSize="default"/>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
