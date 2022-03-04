import React from 'react';
import {Link} from 'react-router-dom';
import {Breadcrumb, Card, Col, Container, Figure, Row} from "react-bootstrap";

function About(props) {

  const RenderEmployees = (props) => {
    return (
      props.employees.map((employee) => {
        return (
          <Row className="m-1" key={employee.id}>
            <Col xs={12} sm={2} >
              <Figure>
                <Figure.Image src={employee.image} alt={employee.name}
                              width={128}
                              heigth={128}>
                </Figure.Image>
              </Figure>
            </Col>
            <Col xs={12} sm={10}>
              <Figure>
                <Figure.Caption>
                  <p>{employee.name}</p>
                  <p>{employee.jobPosition}</p>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        );
      })
    );
  };

  return (
    <Container>
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item active>Acerca de</Breadcrumb.Item>
        </Breadcrumb>
        <Col xs={12}>
          <h3>Acerca de</h3>
          <hr/>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs={12} md={6}>
          <h2>Historia</h2>
          <p>La Universidad Mayor de San Simón fue fundada mediante ley de 5 de noviembre de 1832 por el Mariscal Andrés
            de Santa Cruz. La Misma ley dispuso la creación y funcionamiento de una Academia de Practicantes Juristas,
            con la que en realidad se inicia la Facultad de Derecho.</p>
          <p>La Universidad toma parte activa en el estudio y discusión de los más candentes problemas, como la
            nacionalización de las minas, la reforma agraria, el voto universal, los derechos de los pueblos
            originarios, la ecología y las más apremiantes necesidades regionales. De esta manera
            la <em><b>AUTONOMIA</b></em> se abre a ideas nuevas e inquietudes patrióticas, creando una atmósfera
            espiritual
            frente al dogmatismo y a la intolerancia.</p>
        </Col>
        <Col xs={12} md={5}>
          <Card>
            <Card.Header className="bg-primary text-white">Hechos importantes</Card.Header>
            <Card.Body>
              <dl className="row p-1">
                <dt className="col-6">Fundada</dt>
                <dd className="col-6">5 de Noviembre de 1832</dd>
                <dt className="col-6">Fundada por</dt>
                <dd className="col-6">por Mariscal Andrés de Santa Cruz</dd>
                <dt className="col-6">Sigla</dt>
                <dd className="col-6">UMSS</dd>
                <dt className="col-6">Ranking HackTheBox2022</dt>
                <dd className="col-6">Nro 192</dd>
                <dt className="col-6">Docentes y Administrativos</dt>
                <dd className="col-6">240</dd>
              </dl>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <Card.Body className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-3">Lo maravilloso de aprender algo es que nadie puede arrebatárnoslo</p>
                <footer className="blockquote-footer">B. B. King,
                  <cite title="Source Title">The B.B. King Reader,
                    6 Decades of Commentary p.184</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="mt-3">
          <h2>Empleados</h2>
        </Col>
      </Row>
      <RenderEmployees employees={props.employees}/>
    </Container>
  );
}

export default About;
