import React, {Component} from 'react';
import {Card} from "react-bootstrap";

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
          {this.renderItem(this.state.selectedItem)}
        </div>
      </div>
    );
  }

  onItemSelect(item) {
    this.setState({
      selectedItem: item
    });
  }

  renderItem(item) {
    if (item != null) {
      return (
        <div key={item.id} className="col-8 m-auto">
          <Card>
            <Card.Header>
              <Card.Title>{item.name}</Card.Title>
            </Card.Header>
            <Card.Img style={{width: '80%'}} className='m-4' src={item.image} alt={item.name}/>
            <Card.Body>
              <Card.Text>
                {item.requisites.map(requisite => (<div>{requisite}</div>))}
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      );
    } else {
      return (
        <div/>
      );
    }
  }

}

export default CatalogComponent;
