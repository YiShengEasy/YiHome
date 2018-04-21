import React from 'react';
import {withStyles} from 'material-ui/styles';
import Hover from '../Hover';
import appRoutes from '../../routes/appRoutes'
import {Link, Router} from 'dva/router';


const styles = {
  nav: {
    padding: 10,
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#90CAF9',
    '& a': {
      textDecoration: 'none',
    }
  },
  navItem: {
    display:'flex',
    color: '#fff',
    fontSize: 20,
    height: 30,
    lineHeight:1.5
  },
  appBar: {
    backgroundColor: '#2196f3'
  },
};
const Nav = ({classes, history}) => {
  return (
    <Router history={history}>
      <div className={classes.nav}>
        {appRoutes.map(item => {
          const Icon = item.icon;
          return (
            <Link key={`nav${item.path}`} to={item.path}>
              <Hover.EasyHover key={`navItem${item.path}`} className={classes.navItem}>
                  <Icon style={{fontSize:30}}/>
                {item.name}
              </Hover.EasyHover>
            </Link>
          )
        })}
      </div>
    </Router>
  )
};

Nav.propTypes = {};

export default withStyles(styles)(Nav);
