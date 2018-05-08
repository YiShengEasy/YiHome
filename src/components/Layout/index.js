import React from 'react';
import Header from './Header';
import Nav from './Nav';
import {Router} from 'dva/router';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '/theme';

const Layout = ({children, history}) => {
  const renderRoutes =
    <Router history={history}>
        {children}
    </Router>
  return (
    <MuiThemeProvider theme={theme}>
      <Header></Header>
      <div style={{marginTop:60}}>
        <Nav history={history}></Nav>
        {renderRoutes}
      </div>
    </MuiThemeProvider>
  )
}
export default Layout;
