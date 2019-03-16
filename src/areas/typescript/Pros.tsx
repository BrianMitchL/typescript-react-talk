import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Pros: FC = () => (
  <div>
    <h1>TypeScript Pros</h1>

    <ul>
      <li>Autocompletion</li>
      <li>Compile time errors</li>
      <li>Stability</li>
      <li>API documentation</li>
      <li>Tooling</li>
    </ul>

    <Link to="/typescript/cons" rel="next">
      Cons
    </Link>
  </div>
);
