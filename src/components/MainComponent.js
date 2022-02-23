import React, {Component} from "react";
import {ITEMS} from "../shared/items";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./HomeComponent";
import Catalog from "./CatalogComponent";

class Main extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      items: ITEMS
    }
    console.log("Main constructor es invocado");
  }

  componentDidMount() {
    console.log("Main componentDidMount es invocado");
  }

  render() {
    console.log("Main render es invocado");
    const HomePage = () => {
      return (
        <Home/>
      );
    };

    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route exact path='/catalog' element={<Catalog items={this.state.items}/>}/>
          <Route
            path="*"
            element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default Main;
