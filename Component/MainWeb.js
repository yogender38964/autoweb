import React from 'react';
import ClientsList from './ClientsList';
import Home from './Home';

const MainWeb = () => {
  return (
    <main>
      <Home/>
      {/* <ServicesHom/> */}
      <ClientsList/>
    </main>
  );
};

export default MainWeb;
