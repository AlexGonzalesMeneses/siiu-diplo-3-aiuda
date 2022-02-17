import React, {Component} from 'react';
import {Card} from "react-bootstrap";

class CatalogComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

  render() {
    let catalog = this.props.items.map(item => {
      return (
        <div key={item.id} className="col-12 col-md-5 m-1">
          <Card text='primary' style={{width: '90%'}}
          className='bg-dark bg-opacity-25'>
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
      </div>
    );
  }
}

export default CatalogComponent;
