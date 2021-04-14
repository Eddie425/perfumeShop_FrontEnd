import React, { Component } from "react";
import Nav from "./header/nav/Nav";
import ProductCard from "./product/ProductCard";
import ProductDetail from "./product/productDetail/ProductDetail";
import CheckOut from "./order/CheckOut";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
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
    };
  }

  state = {};

  componentDidMount() {
    // this.testApi();
  }

  render() {
    // let page;
    // if (this.props.pageName == null) {
    //   page = <main>Loading...</main>;
    // } else {
    //   switch (this.props.pageName) {
    //     case "home":
    //       page = <ProductCard />;
    //       break;
    //     case "product":
    //       page = <ProductDetail />;
    //       break;
    //     case "checkout":
    //       page = <CheckOut />;
    //       break;
    //     default:
    //       break;
    //   }
    // }
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ColorModeProvider>
            <CSSReset />
            <div className="App">
              <Nav />
              <header className="App-header">
                <Switch>
                  <Route exact path="/">
                    <ProductCard />
                  </Route>
                  <Route path="/productDetails">
                    <ProductDetail />
                  </Route>
                  <Route path="/checkout">
                    <CheckOut />
                  </Route>
                </Switch>
                <h3 className="App-title">{this.state.message}</h3>
              </header>
            </div>
          </ColorModeProvider>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
