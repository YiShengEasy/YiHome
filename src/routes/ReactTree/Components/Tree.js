/**
 * Created by yisheng on 2018/7/5
 */
import React from 'react';
import Node from "./Node";
import PropTypes from "prop-types";

class Tree extends React.PureComponent {
  static propTypes = {
    defaultData: PropTypes.array,
    data: PropTypes.array,
    hoveNode:PropTypes.node
  };
  static defaultProps = {
    defaultData: []
  };

  constructor(props) {
    super(props);
    this.nodeType='root';
  }


  // 渲染节点
  renderChildTree = (data) => {
    const {nodeHeight,hoveNode,rootNode,commonNode,leafNode,treeNode}=this.props;
    // 默认节点为Node，可以自定义节点
    const RootCompont=rootNode||treeNode||Node;
    let CommonCompont=commonNode||treeNode||Node;
    const LeafCompont=leafNode||treeNode||Node;
    return data.map(item => {
      const nodeProps = {
        value: item.value,
        nodeType:this.nodeType,
        height:nodeHeight,
        hoveNode
      }
      this.nodeType = 'common';
      if (!item.children) {
        return (
          <LeafCompont {...nodeProps}   key={item.id} nodeType={'leaf'}/>
        )
      } else {
        return (
          <CommonCompont {...nodeProps}  key={item.id}>
            {this.renderChildTree(item.children)}
          </CommonCompont>
        )
      }
    })
  };


  render() {
    const {data} = this.props;
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {data ? this.renderChildTree(data) : ''}
      </div>
    )
  }
};

export default Tree;
