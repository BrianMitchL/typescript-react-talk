import React, { FC } from 'react';
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
import { TypeScript } from './areas/typescript/TypeScript';
import { GenericsPage } from './areas/generics/GenericsPage';

export interface Match {
  match?: string;
}

const App: FC = () => (
  <Router>
    <>
      <Route component={Header} />

      <div className="uk-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/typescript" component={TypeScript} />
          <Route exact path="/pure" component={SimpleHelpers} />
          <Route exact path="/event/:match?" component={EventPage} />
          <Route exact path="/generics" component={GenericsPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  </Router>
);

export default App;
