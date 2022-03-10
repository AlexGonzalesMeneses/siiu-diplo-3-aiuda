import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

const Home = (props) => {
  return (
    <Container>
      <Row className="align-items-start">
        <Col xs={12} md={5} className="m-1">
          <RenderCard item={props.item}/>
        </Col>
        <Col xs={12} md={5} className="m-1">
          <RenderCard item={props.employee}/>
        </Col>
      </Row>
    </Container>
  );
};

function RenderCard({item}) {
  return(
    <Card>
      <Card.Img src={item.image} alt={item.name} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        {item.jobPosition ? <Card.Subtitle>{item.jobPosition}</Card.Subtitle> : null }
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;
