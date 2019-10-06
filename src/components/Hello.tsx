import * as React from "react";
import { render } from 'react-dom';

export interface HelloProps { compiler:string; framework:string; }

export class Hello extends React.Component<HelloProps, {}>{
  render() {
    return <h1>Hello form {this.props.compiler} and {this.props.framework}!</h1>;
  }
}
