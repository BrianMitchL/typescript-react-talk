import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps
} from 'react-router-dom';
import { Home } from './areas/home/Home';
import { Header } from './areas/header/Header';
import { Pure } from './areas/pure/Pure';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route component={Header} />
          <Route exact path="/" component={Home} />

          <div className="uk-container">
            <Route path="/pure" component={Pure} />
            <Route
              path="/react-gotchas"
              component={({ match }: RouteComponentProps<any>) => (
                <h3>Requested Param: {match.params.id}</h3>
              )}
            />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
