import "./App.scss";
import React, { Component } from "react";

import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Products from "./Products/Products";
import Footer from "./Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return (
      <div className="container">
        <Header />
        <Slider />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default App;
