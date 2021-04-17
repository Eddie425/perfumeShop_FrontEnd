import React, { Component } from "react";
import Nav from "./header/nav/Nav";
import ProductCard from "./product/ProductCard";
import ProductDetail from "./product/productDetail/ProductDetail";
import CheckOut from "./order/CheckOut";
import MemberOrders from "./order/memberOrders";
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

  render() {
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
                  <Route path="/memberOrders">
                    <MemberOrders />
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
