import React, {Component} from 'react';
import {Card} from "react-bootstrap";

class CatalogComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      items: [
        {
          name: 'Certificado de Diplomado',
          image: '/assets/images/certificadoDiplomado.png',
          category: 'certificado',
          label: 'diplomado',
          price: '200',
          description: 'El certificado de Diplomado es un documento que se otorga a quienes han logrado su titulacion en grado de diplomado'
        },
        {
          name: 'Certificado de Maestria',
          image: '/assets/images/certificadoMaestria.png',
          category: 'certificado',
          label: 'maestria',
          price: '300',
          description: 'El certificado de Maestria es un documento que se otorga a quienes han logrado su titulacion en grado de magister'
        },
        {
          name: 'Certificado Supletorio',
          image: '/assets/images/certificadoSupletorio.png',
          category: 'certificado',
          label: 'supletorio',
          price: '400',
          description: 'El certificado Supletorio es un documento que se otorga a quienes han justificado de forma pertinente la necesidad del supletorio'
        }

      ]
    }
  }

  render() {
    let catalog = this.state.items.map(item => {
      return (
        <div key={item.id} className="col-6 mt-5">
          <Card style={{width: '18rem'}}>
            <Card.Header>
              <Card.Img src={item.image} alt={item.name}/>
            </Card.Header>
            <Card.Body className="ml-5">
              <Card.Subtitle>{item.name}</Card.Subtitle>
              <p>{item.description}</p>
            </Card.Body>
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
}

export default CatalogComponent;
