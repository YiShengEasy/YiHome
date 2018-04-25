/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import CSSPrism from '~/CSSModular/CSSPrism';
import CSSCard from '~/CSSModular/CSSCard';
//import txt from  '../cardTxt'
const test = require("raw-loader!./test.txt")
@CSSPrism(test)
class RollUpCard extends React.PureComponent{
  render(){
    const { cssHtml }=this.props;
    return <CSSCard cssHtml={cssHtml}>
      测试效果卡片
    </CSSCard>
  }
}
export default RollUpCard;
