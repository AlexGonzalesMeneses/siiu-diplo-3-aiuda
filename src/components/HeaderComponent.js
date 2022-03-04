import React, {Component} from "react";
import {Button, Container, Form, Modal, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Link} from "react-router-dom";

class Header extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.rememberRef = React.createRef();
  }

  toggleModal() {
    this.setState({
      show: !this.state.show
    });
  }

  handleLogin(event) {
    event.preventDefault();
    console.log('handleLogin');
    console.log('this.usernameRef.current.value'+ this.usernameRef.current.value);
    //console.log('this.usernameRef'+ JSON.stringify(this.usernameRef));
    alert("Username: " + this.usernameRef.current.value
      + " Username html: " + window.username.value
      + " Password: " + this.passwordRef.current.value
      + " Remember: " + this.rememberRef.current.checked);
    this.toggleModal();

  }

  render() {
    return (
      /*agrupa varios elementos sin necesidad de un div su forma abreviada es <></>*/

      <React.Fragment>
        <Navbar bg="dark" variant="dark" expand='md' sticky="top" collapseOnSelect>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Brand className="p-0" href="/">
              <img src='/assets/images/logo.png' alt="SIIU" width="50" className="d-inline-block align-top"/>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href='/home'>
                  <FontAwesomeIcon icon={solid('home')} size='lg'/> Home
                </Nav.Link>
                <Nav.Item>
                  <Link className="nav-link" to='/aboutus'>
                    <FontAwesomeIcon icon={solid('info')} size='lg'/> About Us
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="nav-link" to='/catalog'>
                    <FontAwesomeIcon icon={solid('list')} size='lg'/> Catalog
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="nav-link" to='/contactus'>
                    <FontAwesomeIcon icon={solid('address-card')} size='lg'/> Contact Us</Link>
                </Nav.Item>
              </Nav>
              <Nav className="ms-auto" navbar>
                <Nav.Item>
                  <Button onClick={this.toggleModal}>
                    <FontAwesomeIcon icon={solid('sign-in')} size='lg'/> Login</Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='bg-primary bg-opacity-75 fa-inverse jumbotron'>
          <div className="container">
            <div className="row row-header">
              <div className="col-12">
                <h1>Sistema Integrado de Informacion Universitario</h1>
                <p>El SIIU integra la informacion de los diferentes sistemas de la UMSS!!!</p>
              </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleLogin}>
              <Form.Group controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username"
                              ref={this.usernameRef}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control type="password" id="password" name="password"
                              ref={this.passwordRef}/>
              </Form.Group>
              {/*itemRef={(input) => {this.remember = input}}*/}
              <Form.Group>
                <Form.Check type="checkbox" name="remember"
                            label='Remember me'
                            ref={this.rememberRef}/>
              </Form.Group>
              <Button type="submit" value="submit" variant="primary" onSubmit={()=>this.handleLogin}>Login</Button>
            </Form>
          </Modal.Body>

        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
