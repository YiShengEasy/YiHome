/**
 * Created by yisheng on 2018/7/5
 */
import React from 'react';
import Node from "./Node";
import PropTypes from "prop-types";

class Tree extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array,
    contentStyle: PropTypes.object,
    rowStyle: PropTypes.object,
    nodeStyle: PropTypes.object,
    style: PropTypes.object,
    expandImg: PropTypes.any,
    unExpandImg: PropTypes.any,
    tagColor: PropTypes.string,
  };
  static defaultProps = {
    data: []
  };

  constructor(props) {
    super(props);
    this.nodeType = 'root';
  }


  // 渲染节点
  renderChildTree = (data) => {
    const {nodeHeight, hoveNode, style, ...res} = this.props;
    return data.map(item => {
      const nodeProps = {
        nodeType: this.nodeType,
        height: nodeHeight,
        hoveNode,
        record: item,
        ...item,
        ...res
      }
      this.nodeType = 'common';
      if (!item.children) {
        return (
          <Node {...nodeProps} key={item.id} nodeType={'leaf'}/>
        )
      } else {
        return (
          <Node {...nodeProps} key={item.id}>
            {this.renderChildTree(item.children)}
          </Node>
        )
      }
    })
  };


  render() {
    const {data, style} = this.props;
    this.nodeType = 'root';
    return (
      <div style={{display: 'flex', overflowX: 'auto', padding: 20, ...style}}>
        {data ? this.renderChildTree(data) : ''}
      </div>
    )
  }
};

export default Tree;
