/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import CSSPrism from '~/CSSModular/CSSPrism';
import CSSCard from '~/CSSModular/CSSCard';
import {Grid, TextField, Button, BottomNavigation, BottomNavigationAction, Icon} from 'material-ui';
import {withStyles} from 'material-ui/styles';
import './index.css';
import md from './FontAnimateCard.md'


const styles = theme => ({
  navigation: {
    position: 'absolute',
    bottom: 0
  },
  text: {
    backgroundColor: theme.palette.primary.main,
    margin: 2,
    color: '#fff',
    padding: 10,
    borderRadius: 4,
    boxShadow: '1px 1px 9px -3px #000',
  }
})


@CSSPrism(md)
@withStyles(styles)
class FontAnimateCard extends React.PureComponent {
  state = {
    textContent: '',
    showText: '跳动文字',
    animateStyle: 'style1'
  }
  handleChange = event => {
    this.setState({
      textContent: event.target.value,
    });
  }
  handleChangeAction = (event, value) => {
    this.setState({animateStyle: value});
  }

  render() {
    const {code, classes, ...res} = this.props;
    const {showText, textContent, animateStyle} = this.state;
    return <CSSCard code={code} {...res} link={'http://down.admin5.com/demo/code_pop/19/2188/'}>
      <Grid container spacing={24}>
        <Grid item xs={8}>
          <TextField
            label="填写文字"
            margin="normal"
            style={{marginTop: -16}}
            onChange={this.handleChange.bind(this)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="raised" color="primary" onClick={() => {
            this.setState({showText: textContent})
          }}>确定</Button>
        </Grid>
        <div className={'is-animate'}>
          {[...showText].map((item, index) => {
            return <div key={`font${index}`} className={classes.text}
                        style={{animationDelay: `${0.1 * index}s`, animationName: animateStyle}}>{item}</div>
          })}
        </div>
        <BottomNavigation className={classes.navigation} value={animateStyle}
                          onChange={this.handleChangeAction.bind(this)}>
          <BottomNavigationAction label="跳动" value="style1" icon={<Icon style={{width: 'auto'}}>one</Icon>}/>
          <BottomNavigationAction label="果冻" value="style2" icon={<Icon style={{width: 'auto'}}>two</Icon>}/>
          <BottomNavigationAction label="摇晃" value="style3" icon={<Icon style={{width: 'auto'}}>three</Icon>}/>
          <BottomNavigationAction label="闪烁" value="style4" icon={<Icon style={{width: 'auto'}}>four</Icon>}/>
        </BottomNavigation>
      </Grid>
    </CSSCard>
  }
}

export default FontAnimateCard;
