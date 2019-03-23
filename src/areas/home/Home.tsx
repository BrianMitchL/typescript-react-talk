import React, { FC } from 'react';
import logoR from './logo.svg';
import logoTs from './ts-logo.svg';
import './Home.css';

export const Home: FC = () => (
  <div className="Home">
    <img src={logoR} className="react-logo" alt="React logo" />
    <img src={logoTs} className="typescript-logo" alt="TypeScript logo" />
    <h1>An Intro to TypeScript with React</h1>
    <h2 className="uk-margin-remove">Brian Mitchell</h2>
    <p>
      Bird site:{' '}
      <a
        href="https://twitter.com/BrianMitchL"
        target="_blank"
        rel="noopener noreferrer"
      >
        {'@BrianMitchL'}
      </a>
      <br />
      Web site:{' '}
      <a href="https://brianm.me" target="_blank" rel="noopener noreferrer">
        https://brianm.me
      </a>
    </p>
  </div>
);
