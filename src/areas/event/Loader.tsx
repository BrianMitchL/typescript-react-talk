import React, { FC } from 'react';
import { BarLoader } from 'react-spinners';
import './Loader.css';

export const Loader: FC = () => (
  <div className="Loader">
    <BarLoader />
  </div>
);
