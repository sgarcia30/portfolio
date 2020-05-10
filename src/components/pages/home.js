import React from 'react';
import { NavBar, HomeHeader, Footer, ProjectDetail } from '../../components';
// import './home-page.css';

class Home extends React.Component {
  render() {
    return (
        <div id="home">
          <NavBar />
          <HomeHeader />
          <ProjectDetail />
          <Footer />
        </div>
    );
  }
}

export default Home;
