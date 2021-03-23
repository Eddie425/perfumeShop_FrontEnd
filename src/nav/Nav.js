import "./nav.css";
import React from "react";
import MenuAppBar from "./MenuAppBar.js";

class Nav extends React.Component {
    
  setPage(pageLocation) {
    this.props.setPage(pageLocation);
  }

  render() {
    return <MenuAppBar setPage={this.setPage.bind(this)} />;
  }
}
export default Nav;






