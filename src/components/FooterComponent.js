import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {brands, solid} from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Catalog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
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
          </div>
          <div className="col-12 col-sm-4 align-self-center"> {/*alineado vertical*/}
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
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2022 SIIU</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
