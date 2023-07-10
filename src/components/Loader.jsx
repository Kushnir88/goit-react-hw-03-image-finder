import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import './Loader.module.css';

const Loader = () => {
  return <TailSpin color="#00BFFF" height={80} width={80} />;
};

export default Loader;
