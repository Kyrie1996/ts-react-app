import React, { Component } from "react";
import HelloClass from "./HelloClass";

interface Loading {
  loading: boolean;
}
/*
 ** WrapperComponent: 需要被包装的组件
 */

 function HelloHOC<P>(WrapperComponent: React.ComponentType<P>) {
  // 定义 props 为 P 和 Loading 的交叉类型
  return class extends Component<P & Loading> {
    render() {
      // 解构 props，拆分出 loading
      const { loading, ...props } = this.props;
      // {...props}：属性透传
      return loading ? (
        <div>Loading...</div>
      ) : (
        <WrapperComponent {...(props as P)} />
      );
    }
  };
}

// 导出经过高阶组件包装后的组件
export default HelloHOC(HelloClass);
