import React from 'react';
import { Grid, TextField } from 'material-ui';
import CSSComponentList from '~/CSSModular/CSSComponentList';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  cssContain: {
    padding: 16,
    flexGrow: 1,
    width: '100%'
  },
  textField: {
    marginTop:0,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    maxWidth: 200,
  },
})

@withStyles(styles)
class CSSPage extends React.PureComponent {
  state = {
    searchKey: ''
  }
  render() {
    {
      const { classes } = this.props;
      const renderForm =
        <Grid item xs={12}>
          <TextField
            id="search"
            label="Search key"
            type="search"
            onChange={(e) => { this.setState({ searchKey: e.target.value }) }}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
      const fiterComponentList = CSSComponentList.filter(item => item.title.includes(this.state.searchKey))
      const renderGrid =
        <Grid container
          className={classes.cssContain}
          spacing={16}>
           {renderForm}
          {fiterComponentList.map(card => {
            let Component = card.component;
            return (
              <Grid item key={card.name}>
                <Component title={card.title} description={card.description}></Component>
              </Grid>)

          })}
        </Grid>
      return (
        <div>
          {renderGrid}
        </div>
      );
    }
  }
}
CSSPage.propTypes = {};
export default CSSPage;