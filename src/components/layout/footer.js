import React from 'react';
import Container from '@material-ui/core/Container';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import moment from 'moment';

import './styles/footer.scss';

const Footer = () => {
  let year = moment().year();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <Container className="container footer" disableGutters={true} maxWidth={false}>
      <button className="btn-sm" onClick={scrollToTop}>
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

export default Footer;
