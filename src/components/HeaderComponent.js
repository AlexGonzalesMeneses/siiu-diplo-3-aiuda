import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      /*agrupa varios elementos sin necesidad de un div su forma abreviada es <></>*/
      <React.Fragment>
        <Navbar bg="dark" variant="dark" expand='md' sticky="top" collapseOnSelect>
          <div className="container">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Brand className="p-0" href="/">
              <img src='/assets/images/logo.png' alt="SIIU" width="50"/>
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
            </Navbar.Collapse>
          </div>
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
      </React.Fragment>
    );
  }
}

export default Header;
