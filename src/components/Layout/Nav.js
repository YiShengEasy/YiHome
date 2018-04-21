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
    '& a':{
      textDecoration:'none',
    }
  },
  navItem: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20
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
          return (
            <Link key={`nav${item.path}`} to={item.path}className={classes.navItem}>
              <Hover.EasyHover key={`navItem${item.path}`} >
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
