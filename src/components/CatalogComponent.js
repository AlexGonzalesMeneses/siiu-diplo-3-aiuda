import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import ItemDetail from "./ItemdetailComponent";

class CatalogComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedItem: null
    }
  }

  render() {
    let catalog = this.props.items.map(item => {
      return (
        <div key={item.id} className="col-12 col-md-5 m-1">
          <Card text='primary' style={{width: '90%'}}
                className='bg-dark bg-opacity-25'
          onClick={()=> {this.onItemSelect(item)}}>
            <Card.Header>
              <Card.Img src={item.image} alt={item.name}/>
              <Card.ImgOverlay>
                <Card.Title>{item.name}</Card.Title>
              </Card.ImgOverlay>
            </Card.Header>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          {catalog}
        </div>
        <div className="row">
          {/*{this.renderItem(this.state.selectedItem)}*/}
          <ItemDetail selectedItem={this.state.selectedItem }/>
        </div>
      </div>
    );
  }

  onItemSelect(item) {
    this.setState({
      selectedItem: item
    });
  }
}

export default CatalogComponent;
