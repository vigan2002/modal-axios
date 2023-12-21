import React from 'react';
import Header from '../Components/Header/Header';
import CarsContent from '../Components/CarsContent/CarsContent';

const CarsPage = () => {
  return (
    <div>
        <Header title="Welcome to our Cars Page!" />
        <CarsContent />
    </div>
  )
}

export default CarsPage;
