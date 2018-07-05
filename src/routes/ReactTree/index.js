import React from 'react';
import ReactLayout from "~/ReactModular/Layout/ReactLayout";
import Tree from "./Components/Tree";

const data = [{
  value: '根节点11111111111111',
  id: 1,
  children: [
    {
      value: '二层节点1',
      id: 3,
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
  ]
}]

class ReactTree extends React.PureComponent {
  render() {
    const content = <div className={`yi-treeNode-edit`}>
      编辑
    </div>
    return (
      <ReactLayout>
        <Tree data={data} nodeHeight={60} hoveNode={content}/>
      </ReactLayout>
    )
  }
};

export default ReactTree;
