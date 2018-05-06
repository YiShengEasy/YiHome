import React from 'react';
import ReactLayout from "~/ReactModular/Layout/ReactLayout";

console.log('ReactLayout',ReactLayout.test)
class ReactFunc extends React.PureComponent {
  render() {
    return (
      <ReactLayout>
        func
      </ReactLayout>
    )
  }
};

export default ReactFunc;
