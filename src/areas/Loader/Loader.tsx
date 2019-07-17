import React, { Component, FC } from 'react';
import { BarLoader, ReactSpinners } from 'react-spinners';
import './Loader.css';

export const Loader: FC<ReactSpinners.BarLoaderProps> = () => (
  <div className="Loader">
    <BarLoader />
  </div>
);

export class LoaderClass extends Component<ReactSpinners.BarLoaderProps> {
  render() {
    return (
      <div className="Loader">
        <BarLoader />
      </div>
    );
  }
}
