import React, { useEffect, useRef} from 'react';
import { NavBar, Footer, Skills, Bio } from '../../components';
import { navObserver } from '../../utils/observers';

const About = () => {
  const aboutSection = useRef();
  useEffect(() => {
    navObserver.observe(aboutSection.current);
  });
    return (
      <div className="about" ref={aboutSection}>
        <NavBar />
        <Bio />
        <Skills />
        <Footer />
      </div>
  );
}

export default About;
