import {Navbar} from "react-bootstrap";
import CatalogComponent from "./CatalogComponent";
import {Component} from "react";
import {ITEMS} from "./../shared/items";
import ItemDetail from "./ItemdetailComponent";

class Main extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      items: ITEMS,
      selectedItemId: null
    }
  }

  onItemSelect(item) {
    this.setState({
      selectedItemId: item
    });
  }

  render() {
    return (
      <div className="App">
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
                          }}/>
        <ItemDetail item={this.state.items.filter((item)=>item.id===this.state.selectedItemId)[0]}/>
      </div>
    );
  }
}

export default Main;
