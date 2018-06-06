/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import CSSPrism from '~/CSSModular/CSSPrism';
import CSSCard from '~/CSSModular/CSSCard';
import jss from 'jss';
import md from './test.md'


const styles = {
  radiusTest: {
    background: data=>data.background,
    padding: '1em',
    'box-shadow': '0 0 0 .3em #655',
    outline: '.6em solid #655',
    'border-radius': data =>data.borderRadius,
  }
}


@CSSPrism(md)
class DogearCard extends React.PureComponent {
  render() {
    const { code, ...res } = this.props;
    const sheet = jss.createStyleSheet(styles, { link: true }).attach()
    sheet.update({
      borderRadius: '0.3em',
      background:'red'
    })
    console.log('sheet',sheet)
    return <CSSCard code={code} {...res}>
      <div className={sheet.classes.radiusTest}>
        测试效果卡片
      </div>
    </CSSCard>
  }
}

export default DogearCard;
