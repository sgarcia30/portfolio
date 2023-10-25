import React, { useState, useEffect, useRef } from 'react';
import { NavBar, Footer, ProjectImgs, ProjectDetails, WorkHeader } from '../../components';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import { navObserver } from '../../utils/observers';
import { projects } from '../../data/projects.data.json';

function getModalStyle() {
  return {
    position: 'absolute',
    width: '60%',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const Work = (props) => {
  const slug = props.match.params.slug;
  let classes = getModalStyle();
  const projecDetail = useRef();
  const [image, setImage] = useState({});
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (projecDetail?.current) navObserver.observe(projecDetail.current);
  }, [projecDetail]);

  useEffect(() => {
    if (slug) {
      const foundProject = projects.find(project => {
        return project.slug === slug;
      });
      setProject(foundProject);
    }
  }, [slug]);

  const handleModalState = () => {
    setOpen(prevVal => !prevVal);
  }

  const modalData = (image) => {
    setImage(image);
    setOpen(prevVal => !prevVal);
  }

  return (
    <>
    {project && (
      <div className="work" ref={projecDetail}>
        <NavBar />
        <WorkHeader project={project} />
        <section id="project-detail">
          <Grid container spacing={10}>
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
            <Grid item xs={12} sm={6} className="img-detail-grid">
              <ProjectImgs modalData={modalData} data={project.detailPageInfo}/>
            </Grid>
            <Grid item xs={12} sm={6} className="img-detail-grid">
              <ProjectDetails  data={project.detailPageInfo}/>
            </Grid>
          </Grid>
        </section>
        <Footer />
      </div>
      )}
    </>
  );
}

export default Work;
