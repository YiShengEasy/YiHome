/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import CSSPrism from '~/CSSModular/CSSPrism';
import CSSCard from '~/CSSModular/CSSCard';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import cx from 'classnames';
import Radio from 'material-ui/Radio';
import './index.less'
import md from './StripeCard.md'
const radioList = ['horizontal', 'vertical', 'Declining'];

@CSSPrism(md)
class StripeCard extends React.PureComponent {
  state = {
    selectedValue: 'horizontal' //vertical,Declining
  }
  render() {
    const { code, ...res } = this.props;
    const classStr = cx('stripe', `stripe-${this.state.selectedValue}`);
    return <CSSCard code={code} {...res} link={'http://lea.verou.me/css3patterns/'}>
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
export default StripeCard;
