/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import CSSPrism from '~/CSSModular/CSSPrism';
import CSSCard from '~/CSSModular/CSSCard';
import { withStyles } from 'material-ui/styles';
import md from  './test.md'


const styles={
  radius:{
    background:'tan',
    borderRadius:'.3em',
    padding:'1em',
    boxShadow:'0 0 0 .3em #655',
    outline:'.6em solid #655'
  }
}


@CSSPrism(md)
@withStyles(styles)
class RollUpCard extends React.PureComponent {
  render() {
    const { code, classes,...res} = this.props;
    return <CSSCard code={code} {...res}>
      <div className={classes.radius}>
        测试效果卡片
      </div>
    </CSSCard>
  }
}

export default RollUpCard;
