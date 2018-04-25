import React from 'react';
import Header from './Header';
import Nav from './Nav';
import {Router} from 'dva/router';

const Layout = ({children, history}) => {
  const renderRoutes =
    <Router history={history}>
        {children}
    </Router>
  return (
    <div>
      <Header></Header>
      <div style={{marginTop:60}}>
        <Nav history={history}></Nav>
        {renderRoutes}
      </div>
    </div>
  )
}
export default Layout;
