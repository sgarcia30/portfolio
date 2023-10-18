import React from 'react';
import { NavBar, HomeHeader, Footer, ProjectDetail, Technology } from '../../components';
// import './home-page.css';

class Home extends React.Component {
  render() {
    return (
        <div id="home">
          <NavBar />
          <HomeHeader />
          <ProjectDetail />
          <Technology />
          <Footer />
        </div>
    );
  }
}

export default Home;
