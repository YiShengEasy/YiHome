/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import CSSPrism from '~/CSSModular/CSSPrism';
import CSSCard from '~/CSSModular/CSSCard';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import cx from 'classnames';
import Radio from 'material-ui/Radio';
import './index.less'
import md from './a.md'
const radioList = ['horizontal', 'vertical','Declining'];

@CSSPrism(md)
class StripeCard extends React.PureComponent {
  state = {
    selectedValue: 'horizontal' //vertical,Declining
  }
  render() {
    const { cssHtml } = this.props;
    const classStr=cx('stripe',`stripe-${this.state.selectedValue}`);
    return  <CSSCard cssHtml={cssHtml}
    title={'条纹背景'}
    description={'CSS 线性渐变,background-size'}
    link={'http://lea.verou.me/css3patterns/'}>
      <div className={classStr}>
      </div>
      <FormGroup row>
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
