import React from 'react';
import {Grid} from 'material-ui'
import {withStyles} from 'material-ui/styles';
import Hover from '../Hover';
import appRoutes from '../../routes/appRoutes'
import {Link, Router} from 'dva/router';


const styles = {
  gridContain:{
    background:'#2196f3',
    '& a': {
      textDecoration: 'none',
    }
  },
  navItem: {
    display: 'flex',
    color: '#fff',
    background:'#42a6f5',
    justifyContent:'center',
    fontSize: 20,
    height: 30,
    lineHeight: 1.5,
    margin:10
  },
};
const Nav = ({classes, history}) => {
  return (
    <Router history={history}>
      <Grid
        container
        spacing={12}
        className={classes.gridContain}>
        {appRoutes.map(item => {
          const Icon = item.icon;
          return (
            <Grid
              key={`nav${item.path}`} item xs={12} sm={6}>
              <Link  to={item.path}>
                <Hover.EasyHover key={`navItem${item.path}`} className={classes.navItem}>
                  <Icon style={{fontSize: 30}}/>
                  {item.name}
                </Hover.EasyHover>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </Router>
  )
};

Nav.propTypes = {};

export default withStyles(styles)(Nav);
