import React from 'react';
import Loader from 'react-loader-spinner';

const SpinnerLoader = () => {
  return (
    <div className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default SpinnerLoader;
