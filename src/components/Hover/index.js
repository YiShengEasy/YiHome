import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = {
  hover:{
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
class Hover extends React.PureComponent{
  render(){
    const { children,classes,className,...res}=this.props;
    return (
      <div className={`${classes.hover} ${className}`} {...res }>
        {children}
      </div>
    )
  }
};

Hover.propTypes = {
};

export default withStyles(styles)(Hover);
