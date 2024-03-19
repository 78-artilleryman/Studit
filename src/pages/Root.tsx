import Header from '@Components/header/Header';
import { GlobalStyle } from '@styles/global';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </React.Fragment>
  );
}

export default Root;
