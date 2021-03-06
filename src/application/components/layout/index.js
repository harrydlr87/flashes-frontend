import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Login from './components/login';
import Menu from './components/menu';
import Logo from '../../../common/assets/logo.png';

const Layout = ({ children }) => (
  <Fragment>
      <div className="header">
        <NavLink exact to="/">
          <img src={Logo} alt="Flashes" />
        </NavLink>
        <Menu />
        <Login />
      </div>
      {children}
  </Fragment>
);

export default Layout;
