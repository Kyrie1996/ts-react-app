import React from "react";
import { Button } from "antd";

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

const Hello: React.FC<Greeting> = ({ name, firstName, lastName }) => <Button>hello {name}</Button>;

Hello.defaultProps = {
  firstName: "",
  lastName: "",
  name: ""
};

export default Hello;
