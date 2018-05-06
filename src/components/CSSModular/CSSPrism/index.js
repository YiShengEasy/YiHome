/* 预计 使用方式 CSSPrism(cssString)(WrappedComponent)
CSSPrism(cssString)后返回一个高级组件，传入需要装饰的组件
*/
import Prism from 'prismjs'//第三方的一个开源的代码染色库
import React from 'react';


const CSSPrism = (path) => {
  return (WrappedComponent) => class extends React.PureComponent{
    constructor(props)
    {
      super(props);
      this.state={
        html:''
      }
    }
    componentDidMount(){
      fetch(path)
        .then(response => response.text())
        .then(text => {
          const html = Prism.highlight(text, Prism.languages.css);
          this.setState({html});
        });
    }
    render(){
      return <WrappedComponent cssHtml={this.state.html}></WrappedComponent>
    }
  }
}
export default CSSPrism;
