/**
 * Created by yisheng on 2018/7/4
 */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './node.css'

class Node extends React.PureComponent {

  static propTypes = {
    hasChild: PropTypes.bool, //是否有子节点
    defaultExpand: PropTypes.bool,  //是否展开
    value: PropTypes.string,
    nodeType: PropTypes.string,
    expandChange: PropTypes.func,
    hoveNode:PropTypes.node
  };
  static defaultProps = {
    nodeType: 'common', // common,root,leaf
    defaultExpand: true,
    value: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      isExpand: props.defaultExpand,
      isHove: false
    }
  }

  handleExpandChange() {
    this.setState({isExpand: !this.state.isExpand})
  }

  render() {
    const {value, children, nodeType,hoveNode,height} = this.props;
    const {isHove} = this.state;
    return (
      <div className={`yi-tree-row`}>
        <div className={`yi-treeNode yi-treeNode-${nodeType}`}
             onMouseMove={() => this.setState({isHove: true})}
             onMouseLeave={() => this.setState({isHove: false})}>
          <div className={'yi-nodeContent'} style={{height,lineHeight:`${height}px`}} onClick={ this.handleExpandChange.bind(this)}>
            {
              isHove ? hoveNode : value
            }
          </div>
        </div>
        <div style={{display: 'flex'}}>
          {this.state.isExpand ? children : ''}
        </div>
      </div>
    )
  }
}

export default Node
