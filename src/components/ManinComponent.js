import CatalogComponent from "./../components/CatalogComponent";
import React, {Component} from "react";
import {ITEMS} from "./../shared/items";
import ItemDetail from "./../components/ItemdetailComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

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
        <div >
          <FontAwesomeIcon />
          <FontAwesomeIcon icon={solid('user-secret')} size='xs'/>
          <FontAwesomeIcon icon={regular('clock')} size='lg' />
          <FontAwesomeIcon icon={brands('twitter')} size='6x' rotation={90} spin/>

        </div>

        <Header/>
        <CatalogComponent items={this.state.items}
                          onClick={(itemId) => {
                            this.onItemSelect(itemId)
                          }}
        />
        <ItemDetail item={this.state.items.filter((item) => item.id === this.state.selectedItem)[0]} />
        <Footer/>
      </div>
    );
  }
}

export default Main;
