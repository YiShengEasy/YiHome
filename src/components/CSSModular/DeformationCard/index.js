import React from 'react';
import CSSPrism from '~/CSSModular/CSSPrism';
import CSSCard from '~/CSSModular/CSSCard';
import md from './DeformationCard.md';
import './index.css';


@CSSPrism(md)
class DeformationCard extends React.PureComponent {
  state = {
    selectedValue: 'all' //half,quarter
  }
  render() {
    const { code, classes, ...res } = this.props;
    return <CSSCard code={code} {...res}>
      <div className={'deformation'}>
        <img src="http://csssecrets.io/images/adamcatlace.jpg" alt='nopic' />
        <img src="http://csssecrets.io/images/adam-sleeping.jpg" alt='nopic' />
      </div>
      <div>使用clip-path 裁剪，polygon 参数指定需要连接的坐标点 （可画其他多边形）</div>
    </CSSCard>
  }
}

export default DeformationCard;
