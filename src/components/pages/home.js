import React from 'react';
import { NavBar, Header, Footer, ProjectDetail, Technology } from '../../components';

const Home = () => {
  const tagline = {
    line1a: 'Solving Complex Application',
    line1b: 'Design Challenges',
    line2: 'With <em>dedication</em>, <em>perseverance</em>, and <em>integrity</em>.'
  }
  return (
      <div id="home" style={{ backgroundColor: '#f9f9f9' }}>
        <NavBar />
        <Header tagline={tagline} />
        <ProjectDetail />
        <Technology />
        <Footer />
      </div>
  );
}

export default Home;
