import React from 'react';
import Grid from '@material-ui/core/Grid';
import './styles/projectImgs.scss';

class ProjectImgs extends React.Component {
  render () {
    const { modalData } = this.props;
    let detailPageInfo = this.props.data;
    return (
      <Grid container spacing={4} className="detail-img-container">
        { detailPageInfo.images &&
          (<>
              {detailPageInfo.images.map((image, key) => {
                  return (
                    <Grid item xs={12} sm={12} md={6} key={key} className="tooltip" onClick={() => modalData(image)}>
                      <img src={image.src} alt={image.alt} className="project-img" title="Click to enlarge photo"/>
                    </Grid>
                  );
               })}
            </>)
        }
      </Grid>
    );
  }
};

export default ProjectImgs;
