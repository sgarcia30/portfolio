import React from 'react';
import Container from '@material-ui/core/Container';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import moment from 'moment';

import './styles/footer.scss';

class Footer extends React.Component {
  constructor (props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  render() {
    let year = moment().year();
    return (
      <Container className="container footer" disableGutters={true} maxWidth={false}>
        <button className="btn-sm" onClick={this.scrollToTop}>
          <KeyboardArrowUpIcon />
        </button>
        <div className="row">
          <div className="col">
            <h6>&copy; <span id="year">{year}</span> Sarah Ann Garcia</h6>
          </div>
        </div>
      </Container>
    );
  }
}

export default Footer;
