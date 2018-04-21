import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = {
  nav: {
    margin: 10,
    display: 'flex',
    justifyContent: 'space-around',
  },
  flex: {
    flex: 1,
  },
  appBar: {
    backgroundColor: '#2196f3'
  },
};
const Nav = ({ classes }) => {
  return (
    <div className={classes.nav}>
      <div className={classes.flex}>
        <span>样式动画</span>
      </div>
      <div className={classes.flex}>设计模式</div>
      <div className={classes.flex}>技术总结</div>
    </div>
  );
};

Nav.propTypes = {
};

export default withStyles(styles)(Nav);
