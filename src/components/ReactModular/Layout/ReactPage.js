import React from 'react';
import {Grid, Paper} from 'material-ui'
import {withStyles} from 'material-ui/styles';
import ReactNav from './ReactNav';

const styles={
  paper:{
    padding:24
  }
}

@withStyles(styles)
class ReactLayout extends React.PureComponent{
  render(){
    const {classes,children}=this.props;
    return (
      <React.Fragment>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            {children}
          </Paper>
        </Grid>
        <Grid item  >
          <Paper>
            <ReactNav>
            </ReactNav>
          </Paper>
        </Grid>
      </React.Fragment>
    )
  }
};

export default ReactLayout;
