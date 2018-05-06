/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import CSSPrism from '~/CSSModular/CSSPrism';
import CSSCard from '~/CSSModular/CSSCard';
<<<<<<< HEAD
import { withStyles } from 'material-ui/styles';
//import txt from  '../cardTxt'
const test = require("raw-loader!./a.txt")



const styles={
  radius:{
    background:'tan',
    borderRadius:'.3em',
    padding:'1em',
    boxShadow:'0 0 0 .3em #655',
    outline:'.6em solid #655'
  }
}


@CSSPrism(test)
@withStyles(styles)
class RollUpCard extends React.PureComponent {
  render() {
    const { cssHtml, classes } = this.props;
    console.log(classes)
    return <CSSCard cssHtml={cssHtml} title={'边框内圆角'}>
      <div className={classes.radius}>
        测试效果卡片
      </div>
=======
import md from  './test.md'


@CSSPrism(md)
class RollUpCard extends React.PureComponent {
  render() {
    const {cssHtml} = this.props;
    return <CSSCard cssHtml={cssHtml}>
      测试效果卡片
>>>>>>> 483d9c436027dd1b1d6e8fd2b23b332e3436734b
    </CSSCard>
  }
}

export default RollUpCard;
