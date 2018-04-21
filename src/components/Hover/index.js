import React from 'react';
import PropsType from 'prop-types'
import EasyHover from "./EasyHover";

class Hover extends React.PureComponent{
  static EasyHover=EasyHover;
  render(){
    const { children,hoverAnimate,className,...res}=this.props;
    return (
      <div className={`${hoverAnimate} ${className||''}`} {...res }>
        {children}
      </div>
    )
}
};

Hover.propTypes = {
  hoverAnimate:PropsType.string.isRequired
};

export default Hover;
