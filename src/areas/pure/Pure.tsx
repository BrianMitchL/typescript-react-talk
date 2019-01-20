import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { SimpleHelpers } from './SimpleHelpers';
import { ObjectHelpers } from './ObjectHelpers';
import { Link } from 'react-router-dom';

export const Pure = () => (
  <div>
    <Switch>
      <Route exact path="/pure/simple" component={SimpleHelpers} />
      <Route exact path="/pure/objects" component={ObjectHelpers} />
      <Redirect to="/pure/simple" />
    </Switch>

    <div className="uk-text-center">
      <Link className="uk-margin-left uk-margin-right" to="/pure/simple">
        Simple
      </Link>
      <Link className="uk-margin-left uk-margin-right" to="/pure/objects">
        Objects
      </Link>
    </div>
  </div>
);
