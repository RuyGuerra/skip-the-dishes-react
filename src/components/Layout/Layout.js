import React, { Fragment } from 'react';
import MenuBar from '../MenuBar/MenuBar';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <main>
        <MenuBar>SKIP THE DISHES</MenuBar>
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
