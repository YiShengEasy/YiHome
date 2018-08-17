/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import CSSPrism from '~/CSSModular/CSSPrism';
import CSSCard from '~/CSSModular/CSSCard';
import { withStyles } from 'material-ui/styles';
import './index.css';
import md from './test.md'


const styles = {
  radius: {
    background: 'tan',
    borderRadius: '.3em',
    padding: '1em',
    boxShadow: '0 0 0 .3em #655',
    outline: '.6em solid #655'
  }
}


@CSSPrism(md)
@withStyles(styles)
class RollUpCard extends React.PureComponent {
  render() {
    const { code, classes, ...res } = this.props;
    return <CSSCard code={code} {...res}>
      <div id={'signBox'}>
        <svg id="signSvg" viewBox="0 0 259.18 76.48">
          <path id="signPath" d="M2.33,77.67S43,30.33,47,30s8.67-1.33,8,3S32.33,53.66,32.33,53.66,51,38,51.67,41,43,53,40.33,55.67,33,63.33,33,63.33s19.79-9,22.06-11A36.22,36.22,0,0,0,59.67,47S54,54.66,58.33,53.66,67,45,65,45a10.14,10.14,0,0,0-4.5,1.13c-0.25.25,5.5,0.63,7.88-.25s6.63-2,7.38-3.12,2-3.12,2-3.12,3.5-.5,4-2.75a66.52,66.52,0,0,1-2.87,9.63l10.25-8.37S88,47,91.5,47.25s12.13-6.37,18.13-13.12c-7.25,5-14.12,7.63-11,10.88s11-8.62,11-8.62S108.13,46.5,113.25,50c4,0.38,5-3.75,5-3.75s4.25-14.55,5.5-16.59,5.13-3.91,5.13-3.91S128.5,33.63,127,35.88c2.13,2.25,2.88,2.13,3.63,1.88S149,25.5,147.88,25.13s-9.12,5.63-8.12,7.88,6.63-3.12,6.38-4-0.65,3.13,1.8,3.13,10.2-10.25,11.82-9.37,0,5.63,1.13,6.13S174.38,21,176,18.75s11-14.25,9.88-16.5c-4.25,2.88-10.75,12.63-12.37,20S168.38,36,167.13,38.63,164.25,49,164.25,49s0.63-12,6.38-14.5,12-4.62,16.38-7.12S202.13,15.75,198,14c-7.62.38-13.75,9.38-10.62,14.88s10,9,2.75,13.5S76.5,73.75,73.38,76.38c26.38-8.75,165.88-46,187.75-45.62"
            fill="none" stroke="#000" strokeWidth="2px"></path>
        </svg>
      </div>
    </CSSCard>
  }
}

export default RollUpCard;
