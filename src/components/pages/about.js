import React from 'react';
import { NavBar, Footer, Skills, Bio, Header } from '../../components';

const About = () => {
  const tagline = {
    line1a: 'About Me.',
    line2: 'Engineering solutions that produce real results.'
  }

  return (
    <div className="about">
      <NavBar />
      <Header tagline={tagline} />
      <Bio />
      <Skills />
      <Footer />
    </div>
  );
}

export default About;
