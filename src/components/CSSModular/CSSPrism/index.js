/* 预计 使用方式 CSSPrism(cssString)(WrappedComponent)
CSSPrism(cssString)后返回一个高级组件，传入需要装饰的组件
*/
import Prism from 'prismjs'//第三方的一个开源的代码染色库
import React from 'react';

const CSSPrism = (cssString) => {
  const html = Prism.highlight(cssString, Prism.languages.css);
  return (WrappedComponent) => class extends React.PureComponent{
    render(){
      return <WrappedComponent cssHtml={html}></WrappedComponent>
    }
  }
}
export default CSSPrism;
