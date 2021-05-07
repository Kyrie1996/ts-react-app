import React, { useEffect, useState } from "react";
import { Button } from "antd";

interface Greeting {
  name: string;
  firstName: string;
  lastName: string;
}

const HelloHooks = (props: Greeting) => {
  // 定义 [组件的状态，设置状态的方法]，给定状态的初始值：不需要再定义类型
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    if(count>5) {
      setText("休息一下");
    }
  }, [count])
  return (
    <>
      <div>您点击了 {count} 次，{text}</div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        hello {props.name}
      </Button>
    </>
  );
};

HelloHooks.defaultProps = {
  firstName: "",
  lastName: "",
};

export default HelloHooks;