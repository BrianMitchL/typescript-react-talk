import React, { FC } from 'react';
import trend from './state-of-js-typescript-2018.png';

export const Trend: FC = () => (
  <>
    <h2>Trend</h2>
    <img src={trend} alt="Usage trend of TypeScript" />
    <a
      className="uk-link-muted"
      href="https://2018.stateofjs.com/javascript-flavors/typescript/results-over-time"
    >
      Source - State of JS 2018
    </a>
    <blockquote>
      On average, 46.5% of respondents have used TypeScript and would be happy
      to use it again.
    </blockquote>
  </>
);
