import './App.css';
import {Navbar} from "react-bootstrap";
import CatalogComponent from "./components/CatalogComponent";
import {Component} from "react";
import {ITEMS} from "./shared/items";

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      items: ITEMS
    }
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <div className="container">
            <Navbar.Brand href="/">
              Sistema de Integrado Informacion Universitario
            </Navbar.Brand>
          </div>
        </Navbar>
        <CatalogComponent items={this.state.items}/>
      </div>
    );
  }
}

export default App;
