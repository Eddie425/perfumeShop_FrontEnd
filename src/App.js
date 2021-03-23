import React, { Component } from "react";
import Nav from "./nav/Nav.js";
import StaffCard from "./staff/StaffCard.js";
import StaffDetail from "./staff/staffDetail/StaffDetail.js";
import CheckOut from "./order/CheckOut.js";
// import SignUpFrom from "./member/signup.js";
import './App.css';
// import { ChakraProvider } from "@chakra-ui/react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      page: "home",
    };
  }

  state = {};

  setPage(pageLocation) {
    console.log("pageLocation => " + pageLocation);
    this.setState({
      page: pageLocation,
    });
  }

  componentDidMount() {
    // this.testApi();
  }

  testApi = () => {
    fetch("https://perfumeshop.herokuapp.com/api/test")
      .then((response) => response.text())
      .then((message) => {
        this.setState({ message: message });
      });
  };

  render() {
    let page;
    let statePage = this.state.page;
    if (this.state.page == null) {
      page = <main>Loading...</main>;
    } else {
      switch (statePage) {
        case "home":
          page = <StaffCard setPage={this.setPage.bind(this)} />;
          break;
        case "product":
          page = <StaffDetail setPage={this.setPage.bind(this)} />;
          break;
        case "checkout":
          page = <CheckOut />;
          break;
        default:
          break;
      }
    }
    return (
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <div className="App">
            <Nav setPage={this.setPage.bind(this)} />

            {/* <SignUpFrom /> */}
            <header className="App-header">
              {page}
              <h3 className="App-title">{this.state.message}</h3>
            </header>

          </div>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
