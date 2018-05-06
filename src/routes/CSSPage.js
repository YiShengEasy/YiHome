import React from 'react';
import {Grid} from 'material-ui'
import CSSComponentList from '~/CSSModular/CSSComponentList';
import {withStyles} from 'material-ui/styles';

const styles = {
  cssContain: {
    padding: 16,
    flexGrow: 1,
    width: '100%'
  }
}
const CSSPage = ({classes}) => {
  return (
    <Grid container
          className={classes.cssContain}
          spacing={16}>
      {CSSComponentList.map(card => {
        let Component = card.component;
        return (
          <Grid item key={card.name}>
            <Component title={card.title} description={card.description}></Component>
          </Grid>)

      })}
    </Grid>
  );
};

CSSPage.propTypes = {};

export default withStyles(styles)(CSSPage);
