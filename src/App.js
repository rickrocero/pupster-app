import React from 'react';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Discover from './components/pages/Discover';
import Search from './components/pages/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";  

class App extends React.Component {
    state = {
      currentPage: "About"
    };
  
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };
  
    
    render() {
      return (
      <Router>
        <div>
          <NavTabs
          />
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/discover">
              <Discover />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
          </Switch>
        </div>
      </Router>
      );
    }
  }
  

export default App;
