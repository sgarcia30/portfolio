import React from 'react';
import { NavBar, Footer, Skills, Bio } from '../../components';

class About extends React.Component {
  render() {
    return (
        <div className="about">
          <NavBar />
          <Bio />
          <Skills />
          <Footer />
        </div>
    );
  }
}

export default About;
