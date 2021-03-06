import { Link, RouteComponentProps } from 'react-router-dom';

interface Route {
  path: string;
  title: string;
}

const routes: Route[] = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/typescript',
    title: 'TypeScript Overview',
  },
  {
    path: '/pure',
    title: 'Pure',
  },
  {
    path: '/event',
    title: 'Event',
  },
  {
    path: '/generics',
    title: 'Generics',
  },
];

export function Header({ location }: RouteComponentProps) {
  return (
    <nav className="uk-navbar-container">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          {routes.map((r) => (
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
}
