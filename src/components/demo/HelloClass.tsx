import React, { Component } from "react";
import { Button } from "antd";
import { Components } from "antd/lib/date-picker/generatePicker";

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

interface State {
  count: number;
}

class HelloClass extends Component<Greeting, State> {
  state: State = { count: 0};
  static defaultProps = {
    firstName: '',
    lastName: '',
  }
  render() {
    return (
      <> 
        <div>您点击了 {this.state.count} 次</div>
        <Button
        onClick={()=> {
          this.setState({count: this.state.count + 1})
        }}>
          hello {this.props.name}
        </Button>
      </>
    )
  }
}
export default HelloClass;