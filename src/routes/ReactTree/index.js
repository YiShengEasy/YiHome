import React from 'react';
import Tree from './Components/Tree';
import EditNode from './EditNode'
import hsImg from '../../assets/huangse.jpg'
import lxImg from '../../assets/lx.png'


const data = [{
  value: '根节点11111111111111',
  id: 1,
  isTag: true,
  children: [
    {
      value: '二层节点1',
      id: 3,
      level: 3,
      contentStyle:{background:'blue',color:'#fff',boxShadow:0},
      children: [
        {
          value: '三层节点5',
          id: 5,
        },
        {
          value: '三层节点6',
          id: 6,
          children: [
            {
              value: '四层节点7',
              id: 7,
              contentStyle:{background:'blue',color:'#fff'}
            },
            {
              value: '四层节点8',
              id: 8,
            }, {
              value: '四层节点8',
              id: 8,
            },
            {
              value: '四层节点8',
              id: 8,
            },
            {
              value: '四层节点8',
              id: 8,
            },
            {
              value: '四层节点8',
              id: 8,
            },

          ]
        },
      ]
    },
    {
      value: '二层节点2',
      id: 4,
    },
    {
      value: '二层节点2',
      id: 41,
    },
  ]
}]

class ReactTree extends React.PureComponent {
  render() {
    return (
      <div style={{overflowX: 'auto', display: 'flex', justifyContent: 'center'}}>
        <Tree
          tagParam={'level'}
          data={data}
          hoveNode={(value, id, record) => (<EditNode value={value} id={id} record={record}/>)}/>
      </div>
    )
  }
};

export default ReactTree;
