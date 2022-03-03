import React from 'react';
import {Breadcrumb, Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Link} from "react-router-dom";

class Contact extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contactType: 'Tel.',
      message: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('Current State is: ' + JSON.stringify(this.state));
    alert('Current State is: ' + JSON.stringify(this.state));
    // evita que el browser por defecto vaya a la pagina siguiente
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
          </Breadcrumb>
          <Col xs={12}>
            <h3>Contact Us</h3>
            <hr/>
          </Col>
        </Row>

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
        <Row className="row-content">
          <Col xs={12}>
            <h3>Envia tu Comentario</h3>
          </Col>
          <Col xs={12} md={9}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId='firstname'> {/*controlId is label htmlFor and input id*/}
                <Form.Label column htmlFor="firstname" md={2}>Nombre</Form.Label>
                <Col md={10}>
                  <Form.Control type="text" id="firstname" name="firstname"
                                placeholder="Nombre"
                                value={this.state.firstname}
                                onChange={this.handleInputChange}/>
                </Col>
              </Form.Group>
              <Form.Group className="mb-3" controlId='lastname'>
                <Form.Label md={2}>Apellido</Form.Label>
                <Col md={10}>
                  <Form.Control type="text" name="lastname"
                                placeholder="Apellido"
                                size='sm'
                                value={this.state.lastname}
                                onChange={this.handleInputChange}/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId='telnum'>
                <Form.Label column md={2}>Tel. Contacto</Form.Label>
                <Col md={8}>
                  <Form.Control type="tel" name="telnum"
                                pattern="[0-9]{3}-[0-9]{8}"
                                placeholder="591-xxxxxxxx"
                                value={this.state.telnum}
                                onChange={this.handleInputChange}/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId='email'>
                <Form.Label column md={2}>Email</Form.Label>
                <Col md={8}>
                  <Form.Control type="email" name="email"
                                placeholder="name@example.com"
                                value={this.state.email}
                                onChange={this.handleInputChange}/>
                </Col>
                <Form.Text id="email" muted>
                  Nunca compartiremos tu email con nadie mas.
                </Form.Text>
              </Form.Group>
              <Row className="mb-3">
                <Col md={{span: 4, offset: 0}} className='mt-4'>
                  <Form.Group controlId='agree'>
                    <Form.Check type="checkbox"
                                name="agree"
                                label='Podemos contactarte?'
                                checked={this.state.agree}
                                onChange={this.handleInputChange}/> {' '}
                  </Form.Group>
                </Col>
                <Col md={{span: 3, offset: 0}}>
                  <Form.Group controlId='contactType'>
                    <Form.Label></Form.Label>
                    <Form.Select type="select" name="contactType"
                                 value={this.state.contactType}
                                 onChange={this.handleInputChange}
                                 size='sm'>
                      <option>Tel.</option>
                      <option>Email</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId='message'>
                <Form.Label md={2}>Comentario</Form.Label>
                <Col md={10}>
                  <Form.Control as="textarea" rows={3}
                                name="message"
                                value={this.state.message}
                                onChange={this.handleInputChange}/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mt-3'>
                <Col md={{span: 10, offset: 2}}>
                  <Button type="submit" variant="primary">
                    Enviar
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;

