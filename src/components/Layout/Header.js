import React from 'react';
import {withStyles} from 'material-ui/styles';
import {AppBar, Toolbar, Typography, IconButton, Tooltip} from 'material-ui';
import {AccountCircle, CloudCircle} from '@material-ui/icons';

const styles = {
  headRoot: {
    backgroundColor: '#20232a',
  },
  flex: {
    flex: '1 1 auto',
  },
  appBar: {
    display: 'flex',
    backgroundColor: 'transparent',
  },
};
const Header = ({classes}) => {
  return (
    <AppBar className={classes.headRoot} position="fixed">
        <Toolbar className={classes.appBar}>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Easy的个人主页
          </Typography>
          <IconButton
            aria-haspopup="true"
            color="inherit"
          >
            <CloudCircle/>
          </IconButton>
          <Tooltip id="tooltip-top" title="github地址" placement="top">
            <IconButton
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle/>
            </IconButton>
          </Tooltip>
        </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};

export default withStyles(styles)(Header);
