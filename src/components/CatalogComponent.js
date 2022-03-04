import React from 'react';
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function RenderCatalogItem({item}) {
  return (
    <Card text="primary" style={{width: "90%"}} className="bg-dark bg-opacity-25">
      <Link to={`/catalog/${item.id}`}>
        <Card.Header>
          <Card.Img style={{width: "80%"}} className="m-4" src={item.image} alt={item.name}/>
          <Card.ImgOverlay>
            <Card.Title>{item.name}</Card.Title>
          </Card.ImgOverlay>
        </Card.Header>
      </Link>
    </Card>
  )
}

const Catalog = (props) => {
  let catalog = props.items.map(item => {
    return (
      <div key={item.id} className="col-12 col-md-5 m-1">
        <RenderCatalogItem item={item}/>
      </div>
    );
  });
  return (
    <Container>
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item active>Catalog</Breadcrumb.Item>
        </Breadcrumb>
        <Col xs={12}>
          <h3>Catalog</h3>
          <hr/>
        </Col>
      </Row>
      <Row>
        {catalog}
      </Row>
    </Container>
  );
}


export default Catalog;
