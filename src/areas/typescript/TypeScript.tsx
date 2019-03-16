import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import { Pros } from './Pros';
import { Cons } from './Cons';
import { Overview } from './Overview';

export const TypeScript: FC = () => (
  <Switch>
    <Route path="/typescript" exact component={Overview} />
    <Route path="/typescript/pros" component={Pros} />
    <Route path="/typescript/cons" component={Cons} />
  </Switch>
);
