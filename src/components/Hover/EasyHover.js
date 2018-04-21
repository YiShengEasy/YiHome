import React from 'react';
import { withStyles } from 'material-ui/styles';
import Hover from "./index";


const styles = {
  hoverAnimate:{
    '&::before':{
      content:'"["',// ""  必须转义
      display:'inline-block',
      opacity:0,
      marginRight:10,
      transform: 'translateX(20px)',
      transition:'transform 0.3s, opacity 0.2s',
    },
    '&::after':{
      content:'"]"',
      display:'inline-block',
      opacity:0,
      marginLeft:10,
      transform: 'translateX(-20px)',
      transition:'transform 0.3s, opacity 0.2s',
    },
    '&:hover::after,&:hover::before':{
      opacity:1,
      transform:'translateX(0)'
    }
  }
};
const EasyHover =({classes,children,...res})=>{
    return (
      <Hover {...res} hoverAnimate={classes.hoverAnimate}>
        {children}
      </Hover>
    )
}
EasyHover.propTypes = {
};
export default withStyles(styles)(EasyHover);
