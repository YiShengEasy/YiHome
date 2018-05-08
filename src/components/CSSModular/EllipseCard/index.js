import React from 'react';
import CSSPrism from '~/CSSModular/CSSPrism';
import CSSCard from '~/CSSModular/CSSCard';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import cx from 'classnames';
import Radio from 'material-ui/Radio';
import { withStyles } from 'material-ui/styles';
import md from  './EllipseCard.md'



const styles=theme=>({
  ellipse:{
    height:theme.card.height,
    background:theme.palette.primary.light,
    resize:'both',
    overflow:'hidden',
    border: '1em solid transparent',
    textAlign: 'center'
  },
  all:{
    borderRadius:'50%',
  },
  half:{
    borderRadius:'50% / 100% 100% 0 0',
  },
  quarter:{
    borderRadius:'100% 0 0 0',
  }
})
const radioList=['all','half','quarter'];

@CSSPrism(md)
@withStyles(styles)
class EllipseCard extends React.PureComponent {
  state={
    selectedValue: 'all' //half,quarter
  }
  render() {
    const { code, classes,...res} = this.props;
    const classStr = cx(classes.ellipse, classes[this.state.selectedValue]);
    return <CSSCard code={code} {...res}>
      <div className={classStr}>
       { this.state.selectedValue }
      </div>
      <FormGroup row>
        {radioList.map(name =>
          <FormControlLabel
            key={`${name}`}
            control={
              <Radio
                checked={this.state.selectedValue === name}
                value={name}
                onChange={() => { this.setState({ selectedValue: name }) }}
                name="stripe-demo"
              />
            }
            label={name}
          />
        )}
      </FormGroup>
    </CSSCard>
  }
}

export default EllipseCard;
