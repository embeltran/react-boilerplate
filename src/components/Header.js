import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
//import logo from '../logo.svg';
//<p><NavLink to="/help" activeClassName="is-active">Help </NavLink></p>
export const Header = ({startLogout}) => (
  <header className="topSection">
    <div className="content-container">
      <div>
        <Link to="/dashboard">Boiler Plate</Link>
        <img src="/images/logo.svg" className="App-logo" alt="logo" />
        <button onClick={startLogout}>Log out</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispath) => ({
  startLogout: () => dispath(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
