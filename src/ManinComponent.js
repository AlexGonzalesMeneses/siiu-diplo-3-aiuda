import {Navbar} from "react-bootstrap";
import CatalogComponent from "./components/CatalogComponent";
import React, {Component} from "react";
import {ITEMS} from "./shared/items";
import ItemDetail from "./components/ItemdetailComponent";

class Main extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      items: ITEMS,
      selectedItem: null
    }
    console.log("Main constructor es invocado");
  }


  componentDidMount() {
    console.log("Main componentDidMount es invocado");
  }

  onItemSelect(itemId) {
    this.setState({
      selectedItem: itemId
    })
  }

  render() {
    console.log("Main render es invocado");
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <div className="container">
            <Navbar.Brand href="/">
              Sistema de Integrado Informacion Universitario
            </Navbar.Brand>
          </div>
        </Navbar>
        <CatalogComponent items={this.state.items}
                          onClick={(itemId) => {
                            this.onItemSelect(itemId)
                          }}
        />
        <ItemDetail item={this.state.items.filter((item) => item.id === this.state.selectedItem)[0]} />
      </div>
    );
  }
}

export default Main;
