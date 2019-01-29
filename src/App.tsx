import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { EventPage } from './areas/event/EventPage';
import { Home } from './areas/home/Home';
import { Header } from './areas/header/Header';
import { SimpleHelpers } from './areas/pure/SimpleHelpers';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route component={Header} />

          <div className="uk-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pure" component={SimpleHelpers} />
              <Route exact path="/event/:match?" component={EventPage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
