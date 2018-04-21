import React from 'react';
import { withStyles } from 'material-ui/styles';
import Hover from '../Hover';

const styles = {
  nav: {
    padding: 10,
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor:'#90CAF9'
  },
  navItem: {
    flex: 1,
    textAlign:'center',
    color:'#fff',
    fontSize:20
  },
  appBar: {
    backgroundColor: '#2196f3'
  },
};
const Nav = ({ classes }) => {
  return (
    <div className={classes.nav}>
        <Hover className={classes.navItem}>样式动画</Hover>
      <div className={classes.navItem}>设计模式</div>
      <div className={classes.navItem}>技术总结</div>
    </div>
  );
};

Nav.propTypes = {
};

export default withStyles(styles)(Nav);
