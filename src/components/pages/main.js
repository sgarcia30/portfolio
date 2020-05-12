import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Home, About, Work } from '../../components';

// Main component
class Main extends React.Component {
    render() {
        return (
          <Router>
            <div className="main">
                <main>
                    <Route exact path='/portfolio' component={Home} />
                    <Route path='/portfolio/work/:slug' component={Work} />
                    <Route exact path='/portfolio/about' component={About} />
                </main>
            </div>
          </Router>
        );
    }
}

export default Main;
