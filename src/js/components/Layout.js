import React from "react";
import Header from "./Header"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "App";
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}
