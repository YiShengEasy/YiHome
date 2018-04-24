import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {withStyles} from 'material-ui/styles';
import { NavLink } from "react-router-dom";
import ListSubheader from 'material-ui/List/ListSubheader';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';


const styles = theme => ({
  root: {
    width: 300,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  item: {
    margin: '5px 10px',
    borderRadius: 5,
    width: 'auto',
    '&:hover': {
      backgroundColor: '#eeeeee'
    }
  },
  active: {
    backgroundColor: '#eeeeee'
  }
});

class ReactNav extends React.Component {
  state = {open: true};

  handleClick = () => {
    this.setState({open: !this.state.open});
  };

  render() {
    const {classes} = this.props;
    const cxStr = cx(classes.item, classes.active);
    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">React组件设计</ListSubheader>}
        >
          <NavLink
            to={'/reactPage'}
            key={'page'}
          >
          <ListItem button className={cxStr}>
            <ListItemIcon>
              <SendIcon/>
            </ListItemIcon>
            <ListItemText inset primary="布局设计"/>
          </ListItem>
          </NavLink>
          <NavLink
            to={'/reactPage/func'}
            key={'func'}
          >
            <ListItem button className={classes.item}>
              <ListItemIcon>
                <DraftsIcon/>
              </ListItemIcon>
              <ListItemText inset primary="高阶组件"/>
            </ListItem>
          </NavLink>
        </List>
      </div>
    );
  }
}

ReactNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReactNav);
