import React from 'react';
import {Grid} from 'material-ui'
import CSSCard from '~/CSSModular/CSSCard'
import {withStyles} from 'material-ui/styles';

const styles={
  cssContain:{
    padding:30,
    flexGrow:1,
    width:'100%' // 导航fix  导致宽度一直为浏览器100%
  }
}
const CSSPage = ({classes}) => {
  return (
    <Grid container
          className={classes.cssContain}
          spacing={24}>
      <Grid item >
        <CSSCard></CSSCard>
      </Grid>
      <Grid item>
        <CSSCard></CSSCard>
      </Grid>
      <Grid item>
        <CSSCard></CSSCard>
      </Grid>
      <Grid item>
        <CSSCard></CSSCard>
      </Grid>
      <Grid item>
        <CSSCard></CSSCard>
      </Grid>
      <Grid item>
        <CSSCard></CSSCard>
      </Grid>
    </Grid>
  );
};

CSSPage.propTypes = {};

export default withStyles(styles)(CSSPage);
