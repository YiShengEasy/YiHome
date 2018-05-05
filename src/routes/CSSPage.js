import React from 'react';
import {Grid} from 'material-ui'
import CSSCard from '~/CSSModular/CSSCard'
import RollUpCard from '~/CSSModular/RollUpCard'
import StripeCard from '~/CSSModular/StripeCard'
import {withStyles} from 'material-ui/styles';

const styles={
  cssContain:{
    padding:30,
    flexGrow:1,
    width:'100%'
  }
}
const CSSPage = ({classes}) => {
  return (
    <Grid container
          className={classes.cssContain}
          spacing={24}>
      <Grid item >
        <RollUpCard></RollUpCard>
      </Grid>
      <Grid item>
        <StripeCard></StripeCard>
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
