import React from 'react';
// import Tooltip from '@material-ui/core/Tooltip';
import './styles/projectImgs.scss';

class ProjectImgs extends React.Component {
  render () {
    const { modalData } = this.props;
    let detailPageInfo = this.props.data;
    return (
      <div className="detail-img-container">
        { detailPageInfo.images &&
          (
            <div>
              {
                detailPageInfo.images.map((image, key) => {
                  return (
                    <div key={key} className="tooltip" onClick={() => modalData(image)}>
                      <img src={image.src} alt={image.alt} className="project-img" title="Click to enlarge photo"/>
                    </div>
                  );
                })
              }
            </div>
          )
        }
      </div>
    );
  }
};

export default ProjectImgs;

// <Tooltip title="Click to enlarge photo" arrow>
// </Tooltip>
