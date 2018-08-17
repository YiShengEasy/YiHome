/**
 * Created by yisheng on 2018/7/4
 */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import plus from './img/plus.png'
import reduce from './img/reduce.png'
import userImg from './img/rtuUser.png';
import noUserImg from './img/noRtuUser.png';
import './node.css'


class Node extends React.PureComponent {
  static propTypes = {
    hasChild: PropTypes.bool, //是否有子节点
    defaultExpand: PropTypes.bool,  //是否展开
    value: PropTypes.string,
    nodeType: PropTypes.string,
    expandChange: PropTypes.func,
    contentStyle: PropTypes.object,
    rowStyle: PropTypes.object,
    nodeStyle: PropTypes.object,
    borderColor: PropTypes.string,
    expandImg: PropTypes.any,
    unExpandImg: PropTypes.any,
    record: PropTypes.object,
    isTag: PropTypes.bool,
    titile: PropTypes.string
  };
  static defaultProps = {
    nodeType: 'common', // common,root,leaf
    defaultExpand: true,
    value: '',
    record: {}
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
    const {
      value, record, children, nodeType, isTag, tagColor, hoveNode, height, id, contentStyle, rowStyle, nodeStyle,
      expandImg, unExpandImg, tagParam, borderColor, title
    } = this.props;
    const {isHove, isExpand} = this.state;
    // 自定义编辑区域
    const tagRender = tagParam && record[tagParam] ?
      <Fragment>
        <div className={'tagRender'}>{record[tagParam]}</div>
        <div className={'tagRender-leaf'} style={{borderBottomColor:contentStyle.background}}/>
      </Fragment> :
      null;
    const editRender = isHove ? hoveNode(value, id, record) : '';
    const expandRender =
      nodeType !== 'leaf' ?
        <img className={`yi-expand-img`}
             alt={isExpand ? '收缩' : '展开'}
             width={25} src={isExpand ? (unExpandImg || reduce) : (expandImg || plus)}
             onClick={this.handleExpandChange.bind(this)}/>
        : ''
    return (
      <div className={`yi-tree-row`} style={rowStyle}>
        <div className={`yi-treeNode yi-treeNode-${nodeType}`}
             style={nodeStyle}
             onMouseMove={() => this.setState({isHove: true})}
             onMouseLeave={() => this.setState({isHove: false})}>
          <div className={'yi-nodeContent'} style={{
            height,
            lineHeight: `${height}px`,
            background: isTag ? tagColor || '#FFDC35' : '',
            ...contentStyle,
            borderColor: borderColor
          }}>
            <div className={'yi-nodeContent-title'} style={!title ? {color: '#B4B4B4'} : {}} title={title}>
              <img
                style={{margin: 0}}
                src={title ? userImg : noUserImg} height={20} width={20}></img>
              <span>{title || '未分配'}</span></div>
            <div className={'yi-nodeContent-value'}>
              {value}
            </div>
            {tagRender}
          </div>
          {
            expandRender
          }
          {
            editRender
          }
        </div>
        <div style={{display: 'flex'}}>
          {this.state.isExpand ? children : ''}
        </div>
      </div>
    )
  }
}

export default Node
