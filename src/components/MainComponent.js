import React, {Component} from "react";
import {ITEMS} from "../shared/items";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./HomeComponent";
import Catalog from "./CatalogComponent";
import Contact from "./ContactComponent";
import {COMMENTS} from "../shared/comments";
import {EMPLOYEES} from "../shared/employees";
import ItemDetail from "./ItemdetailComponent";

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

    const ItemWithId = ({match}) => {
      return(
        <ItemDetail item={this.state.items.filter((item) => item.id === parseInt(match.params.itemId,10))[0]}
                    comments={this.state.comments.filter((comment) => comment.itemId === parseInt(match.params.itemId,10))} />
      );
    };

    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/home' element={<Home
            item={this.state.items.filter(item => item.featured)[0]}
            employee={this.state.employees.filter(employee => employee.featured)[0]}
          />
          }/>
          <Route exact path='/catalog' element={<Catalog items={this.state.items}/>}>
            <Route path=':itemId' component={ItemWithId}/>
          </Route>
          <Route exact path='/contactus' element={<Contact/>}/>
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
