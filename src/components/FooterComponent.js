import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {brands, solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

function Footer(props) {
  return (
    <div className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col xs={{span: 4, offset: 1}} sm={2}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/aboutus">About</Link></li>
              <li><Link to="/catalog">Catalog</Link></li>
              <li><Link to="/contactus">Contact</Link></li>
            </ul>
          </Col>
          <Col xs={7} sm={5}>
            <h5>Nuestra direccion</h5>
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
          <Col xs={12} sm={4} className="align-self-center"> {/*alineado vertical*/}
            <div className="text-center"> {/*alineado horizontal*/}
              <a className="btn btn-social-icon btn-google" href="http://google.com/+">
                <FontAwesomeIcon icon={brands('google-plus')} size='lg'/></a>
              <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">
                <FontAwesomeIcon icon={brands('facebook')} size='lg'/></a>
              <a className='btn btn-social-icon' href="http://www.linkedin.com/in/">
                <FontAwesomeIcon icon={brands('linkedin')} size='lg'/></a>
              <a className='btn btn-social-icon' href="http://twitter.com/">
                <FontAwesomeIcon icon={brands('twitter')} size='lg'/></a>
              <a className='btn btn-social-icon' href="http://youtube.com/">
                <FontAwesomeIcon icon={brands('youtube')} size='lg'/></a>
              <a className="btn btn-social-icon" href="mailto:">
                <FontAwesomeIcon icon={solid('envelope')} size='lg'/></a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2022 SIIU</p>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;
