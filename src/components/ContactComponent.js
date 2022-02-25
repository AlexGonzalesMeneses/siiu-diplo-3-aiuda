import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {brands, solid} from '@fortawesome/fontawesome-svg-core/import.macro';

function Contact(props) {
  return (
    <Container>
      <Row className="row-content">
        <Col xs={12}>
          <h3>Información de Ubicación</h3>
        </Col>
        <Col xs={12} sm={4} className="offset-sm-1">
          <h5>Dirección</h5>
          <address>
            Av. Ballivián esquina Reza #591<br/>
            Cochabamba<br/>
            BOLIVIA<br/>
            <FontAwesomeIcon icon={solid('phone')} size='lg'/>: +591 4220717<br/>
            <FontAwesomeIcon icon={solid('fax')} size='lg'/>: +591 4522114<br/>
            <FontAwesomeIcon icon={solid('envelope')} size='lg'/>: <a
            href="mailto:info@siiu.umss.edu.bo">info@siiu.umss.edu.bo</a>
          </address>
        </Col>
        <Col xs={12} sm={6} className="offset-sm-1">
          <h5>Mapa de nuestra ubicación</h5>
        </Col>
        <Col xs={12} sm={11} className="offset-sm-1">
          <div className="btn-group" role="group">
            <a role="button" className="btn btn-primary" href="tel:+591 4220717">
              <FontAwesomeIcon icon={solid('phone')} size='lg'/> Call</a>
            <a role="button" className="btn btn-info">
              <FontAwesomeIcon icon={brands('skype')} size='lg'/> Skype</a>
            <a role="button" className="btn btn-success" href="mailto:info@siiu.umss.edu.bo">
              <FontAwesomeIcon icon={solid('envelope')} size='lg'/> Email</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
