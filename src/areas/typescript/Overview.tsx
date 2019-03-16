import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Overview: FC = () => (
  <div>
    <h1>TypeScript</h1>
    <blockquote>
      TypeScript is a typed superset of JavaScript that compiles to plain
      JavaScript.
    </blockquote>

    <ul>
      <li>Open Source</li>
      <li>Backed by Microsoft</li>
      <li>Recommended by Angular</li>
      <li>Out of the box support from create-react-app</li>
      <li>Babel support</li>
    </ul>
    <Link to="/typescript/pros" rel="next">
      Pros
    </Link>
  </div>
);
