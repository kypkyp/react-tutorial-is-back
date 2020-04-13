import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {title: "Please Wait..."};
  }

  changeTitle = (title) => {
    this.setState({title}); // = this.setState({title: title}});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle} title={this.state.title} />
        <Footer />
      </div>
    )
  }
}
