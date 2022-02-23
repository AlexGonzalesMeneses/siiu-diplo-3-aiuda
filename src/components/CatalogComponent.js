import React from 'react';
import {Card} from "react-bootstrap";

function CatalogComponent({items, onClick}) {
  let catalog = items.map(item => {
    return (
      <div key={item.id} className="col-12 col-md-5 m-1">
        <Card text='primary' style={{width: '90%'}}
              className='bg-dark bg-opacity-25'
              onClick={() => {
                onClick(item.id)
              }}>
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

export default CatalogComponent;
