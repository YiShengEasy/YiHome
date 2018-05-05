/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import CSSPrism from '~/CSSModular/CSSPrism';
import CSSCard from '~/CSSModular/CSSCard';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Radio from 'material-ui/Radio';
import './index.less'
//import txt from  '../cardTxt'
const test = require("raw-loader!./a.txt")

const radioList = ['horizontal', 'vertical'];


@CSSPrism(test)
class StripeCard extends React.PureComponent {
  state = {
    selectedValue: 'horizontal' //vertical
  }
  render() {
    const { cssHtml, classes } = this.props;
    console.log(classes)
    return <CSSCard cssHtml={cssHtml} title={'条纹背景'} link={'stripe'}>
      <div className={'stripe'}>
      </div>
      <FormGroup row className='form'>
        {radioList.map(name =>
          <FormControlLabel
          key={`Radio-${name}`}
            control={
              <Radio
                checked={this.state.selectedValue === name}
                value={name}
                onChange={()=>{this.setState({selectedValue:name})}}
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
export default StripeCard;
