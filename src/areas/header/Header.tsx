import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface Route {
  path: string;
  title: string;
}

const routes: Route[] = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/pure',
    title: 'Pure'
  },
  {
    path: '/react-gotchas',
    title: 'React Gotchas'
  }
];

export const Header = ({ location }: RouteComponentProps<any>) => (
  <nav className="uk-navbar-container">
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        {routes.map(r => (
          <li
            key={r.path}
            className={
              location.pathname.includes(r.path) ? 'uk-active' : undefined
            }
          >
            <Link to={r.path}>{r.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);
