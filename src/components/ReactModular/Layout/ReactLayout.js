import React from 'react';
import {Grid, Paper} from 'material-ui'
import {withStyles} from 'material-ui/styles';
import ReactNav from './ReactNav';

const styles={
  paper:{
    padding:24,
  },
  container:{
    flexGrow:1,
    width:'100%' // 导航fix  导致宽度一直为浏览器100%
  }
}

@withStyles(styles)
class ReactLayout extends React.PureComponent{
  render(){
    const {classes,children}=this.props;
    return (
      <Grid container
            spacing={24}
            justify={'center'}
            className={classes.container}>
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
      </Grid>
    )
  }
};

export default ReactLayout;
