/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import CSSPrism from '~/CSSModular/CSSPrism';
import CSSCard from '~/CSSModular/CSSCard';
import md from  './AntBorderCard.md'


@CSSPrism(md)
class AntBorderCard extends React.PureComponent {
  render() {
    const { cssHtml, classes } = this.props;
    return <CSSCard cssHtml={cssHtml} title={'边框内圆角'}>
      <div>
        测试效果卡片
      </div>
    </CSSCard>
  }
}

export default AntBorderCard;
