import {Component} from "react";
import {ITEMS} from "./../shared/items";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Route, Routes} from "react-router-dom";
import Home from "./HomeComponent";
import Catalog from "./CatalogComponent";
import Contact from "./ContactComponent";
import {COMMENTS} from "../shared/comments";
import {EMPLOYEES} from "../shared/employees";

class Main extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      items: ITEMS,
      comments: COMMENTS,
      employees: EMPLOYEES
    }
    console.log("Main constructor es invocado");
  }

  render() {
    console.log("Main render es invocado");

    return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path='home' element={
            <Home
              item={this.state.items.filter(item => item.featured)[0]}
              employee={this.state.employees.filter(employee => employee.featured)[0]}
            />
          }/>
          <Route exact path='catalog' element={<Catalog items={this.state.items}/>}/>
          <Route exact path='/contactus' element={<Contact/>}/>
          <Route
            path="*"
            element={<Home
              item={this.state.items.filter(item => item.featured)[0]}
              employee={this.state.employees.filter(employee => employee.featured)[0]}
            />}/>
        </Routes>
        <Footer/>
      </div>
    );
  }

  componentDidMount() {
    console.log("Main componentDidMount es invocado");
  }
}

export default Main;
