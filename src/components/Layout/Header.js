import React from 'react';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from 'material-ui';
import { AccountCircle, CloudCircle } from '@material-ui/icons';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  appBar: {
    backgroundColor: '#2196f3'
  },
};
const Header = ({ classes }) => {
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Easy的个人主页
          </Typography>
        <IconButton
          aria-haspopup="true"
          color="inherit"
        >
          <CloudCircle />
        </IconButton>
        <Tooltip id="tooltip-top" title="github地址" placement="top">
          <IconButton
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
};

export default withStyles(styles)(Header);
