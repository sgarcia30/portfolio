import React from 'react';
import { NavBar, Footer, ProjectImgs, ProjectDetails } from '../../components';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
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

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      open: false
    };
    this.handleModalState = this.handleModalState.bind(this);
    this.modalData = this.modalData.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleModalState() {
    let open = this.state.open;
    this.setState({
      open: !open
    })
  }

  modalData(image) {
    let open = this.state.open;
    this.setState({ image, open: !open });
  }

  render() {
    let classes = getModalStyle();
    let slug = this.props.match.params.slug;
    let project = projects.find(project => {
      return project.slug === slug;
    });
    return (
        <div className="work">
          <NavBar />
          <section id="project-detail">
            <Grid container spacing={10}>
              <Modal
                open={this.state.open}
                onClose={this.handleModalState}
                aria-labelledby="image-modal"
                aria-describedby="image-modal"
              >
                <div style={classes} className="modal-body">
                  <img src={this.state.image.src} alt={this.state.image.alt} className="modal-img" />
                </div>
              </Modal>
              <Grid item xs={12} sm={6} className="img-detail-grid">
                <ProjectImgs modalData={this.modalData} data={project.detailPageInfo}/>
              </Grid>
              <Grid item xs={12} sm={6} className="img-detail-grid">
                <ProjectDetails  data={project.detailPageInfo}/>
              </Grid>
            </Grid>
          </section>
          <Footer />
        </div>
    );
  }
}

export default Work;
