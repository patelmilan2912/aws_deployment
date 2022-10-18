import React from 'react';
import Welcome from '../components/Welcome'
import HotelInfo from '../components/HotelInfo'

const Main = () => {
  return (
    <main id="wrapper">
      <Welcome />
      <HotelInfo />
    </main>
  );
}

export default Main;