import React from 'react';
import cx from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = {
  base: {
    fontFamily: 'quicksand',
    fontSize: '16px',
    width: "100px",
    fontWeight: '500',
    background: '#6bada7',
    borderRadius: '4px',
    border: '0px',
    color: 'white',
    cursor: 'pointer',
    padding: '5px 15px 5px 15px',
    '&:hover': {
      animation: 'x 0.8s ease',
    },
    '&:focus':{
      outline: 'none'
    },
    '&:disabled': {
      background: '#ccc',
      color: "white",
      cursor: "not-allowed"
    },
  },
  block: {
    fontSize: "20px",
    color: 'red'
  }
};


class Button extends React.Component {
  handleClick(){
    this.props.click &&this.props.click()
  }
  render() {
    const {classes,block,customStyle}=this.props;
    const cxStr=cx(classes.base,{[classes.block]:block})
    return (
      <button
        type={this.props.type}
        onClick={this.handleClick.bind(this)}
        disabled={this.props.disabled}
        className={cxStr}
        style={[
          customStyle ? {background: customStyle} : "",
        ]}>
        {this.props.children}
      </button>
    );
  }
}
export default withStyles(styles)(Button)
