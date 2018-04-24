import React from 'react';
import Header from './Header';
import Nav from './Nav';
import {Grid} from 'material-ui'
import {Router} from 'dva/router';
import {withStyles} from 'material-ui/styles';

const styles = {
  container:{
    flexGrow:1,
    padding:12
  }
}
const Layout = ({children, history, classes}) => {
  const renderRoutes =
    <Router history={history}>
      <Grid container
            spacing={24}
            justify={'center'}
            className={classes.container}>
        {children}
      </Grid>
    </Router>
  return (
    <div>
      <Header></Header>
      <div style={{marginTop:70}}>
        <Nav history={history}></Nav>
        {renderRoutes}
      </div>
    </div>
  )
}
export default withStyles(styles)(Layout);
