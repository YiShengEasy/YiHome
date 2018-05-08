/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import CSSPrism from '~/CSSModular/CSSPrism';
import CSSCard from '~/CSSModular/CSSCard';
import './index.css';
import md from './AntBorderCard.md'


@CSSPrism(md)
class AntBorderCard extends React.PureComponent {
  render() {
    const { code,...res} = this.props;
    return <CSSCard code={code} {...res}>
      <div className={'antMove'}>
        repeating-linear-gradient  配合 linear-gradient（white，white）背景覆盖。
        并配合keyframes重复动画改变background-position: 100%;
        less有坑 导致repeating-linear-gradient  效果不对
      </div>
    </CSSCard>
  }
}

export default AntBorderCard;
