import React, {Component} from "react";
import {Navbar} from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      /*agrupa varios elementos sin necesidad de un div su forma abreviada es <></>*/

      <React.Fragment>
        <Navbar bg="dark" variant="dark" expand='md'>
          <div className="container">
            <Navbar.Brand className="me-auto" href="/">SIIU</Navbar.Brand>
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
