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
        <div key={item.id} className="col-6 mt-5">
          <Card style={{width: '18rem'}}>
            <Card.Header>
              <Card.Img src={item.image} alt={item.name}/>
            </Card.Header>
            <Card.Body className="ml-5">
              <Card.Subtitle>{item.name}</Card.Subtitle>
              <p>{item.description}</p>
            </Card.Body>
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
