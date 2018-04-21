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
        <Nav history={history}></Nav>
      {renderRoutes}
    </div>
  )
}
export default Layout;
