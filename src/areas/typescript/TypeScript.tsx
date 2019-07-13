import React, { FC } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';
import cn from 'classnames';
import { Pros } from './Pros';
import { Cons } from './Cons';
import { Overview } from './Overview';
import { Trend } from './Trend';
import { Link } from 'react-router-dom';

const routes = [
  ['', 'Overview'],
  ['/trend', 'Trend'],
  ['/pros', 'Pros'],
  ['/cons', 'Cons']
];

export const TypeScript: FC<RouteComponentProps> = ({
  location: { pathname }
}) => (
  <>
    <h1>TypeScript</h1>
    <nav>
      <ul className="uk-nav uk-nav-default">
        {routes.map(link => (
          <li
            key={link[0]}
            className={cn(
              {
                'uk-active': pathname === `/typescript${link[0]}`
              },
              'uk-display-inline-block',
              'uk-margin-small-left',
              'uk-margin-small-right'
            )}
          >
            <Link to={`/typescript${link[0]}`}>{link[1]}</Link>
          </li>
        ))}
      </ul>
    </nav>

    <Switch>
      <Route path="/typescript" exact component={Overview} />
      <Route path="/typescript/trend" exact component={Trend} />
      <Route path="/typescript/pros" exact component={Pros} />
      <Route path="/typescript/cons" exact component={Cons} />
      <Redirect to="/typescript" />
    </Switch>
  </>
);
