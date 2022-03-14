import { useState } from 'react';
import { Breadcrumb, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addComment } from '../features/comments/commentsSlice';

const NewContact = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: '',
    touched: {
      firstname: false,
      lastname: false,
      telnum: false,
      email: false,
    },
    errors: {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
    },
  });

  const validate = (firstname, lastname, telnum, email) => {
    const errors = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
    };

    if (firstname.length < 3) {
      errors.firstname = 'First Name must be at least 3 characters long';
    }

    if (lastname.length < 3) {
      errors.lastname = 'Last Name must be at least 3 characters long';
    }

    if (telnum.length < 8) {
      errors.telnum = 'Tel. number must be at least 10 characters long';
    }

    if (email.split('').filter((v) => v === '@').length !== 1) {
      errors.email = 'Email must be valid';
    }

    return errors;
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleBlur = (field) => (event) => {
    setState({
      ...state,
      touched: { ...state.touched, [field]: true },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(
      state.firstname,
      state.lastname,
      state.telnum,
      state.email
    );
    setState({
      ...state,
      errors: errors,
    });

    dispatch(
      addComment({
        firstname: state.firstname,
        lastname: state.lastname,
        telnum: state.telnum,
        email: state.email,
        agree: state.agree,
        contactType: state.contactType,
        message: state.message,
      })
    );
    
    props.history.push('/contact');
  };

  return (
    <Container>
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to='/home'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
        </Breadcrumb>
        <Col xs={12}>
          <h3>Contact Us</h3>
          <hr />
        </Col>
      </Row>

      <Row className='row-content'>
        <Col xs={12}>
          <h3>Información de Ubicación</h3>
        </Col>
        <Col xs={12} sm={4} className='offset-sm-1'>
          <h5>Dirección</h5>
          <address>
            Av. Ballivián esquina Reza #591
            <br />
            Cochabamba
            <br />
            BOLIVIA
            <br />
            <FontAwesomeIcon icon={solid('phone')} size='lg' />: +591 4220717
            <br />
            <FontAwesomeIcon icon={solid('fax')} size='lg' />: +591 4522114
            <br />
            <FontAwesomeIcon icon={solid('envelope')} size='lg' />:{' '}
            <a href='mailto:info@siiu.umss.edu.bo'>info@siiu.umss.edu.bo</a>
          </address>
        </Col>
        <Col xs={12} sm={6} className='offset-sm-1'>
          <h5>Mapa de nuestra ubicación</h5>
        </Col>
        <Col xs={12} sm={11} className='offset-sm-1'>
          <div className='btn-group' role='group'>
            <a
              role='button'
              className='btn btn-primary'
              href='tel:+591 4220717'
            >
              <FontAwesomeIcon icon={solid('phone')} size='lg' /> Call
            </a>
            <a role='button' className='btn btn-info' href='tel:+591 4220717'>
              <FontAwesomeIcon icon={brands('skype')} size='lg' /> Skype
            </a>
            <a
              role='button'
              className='btn btn-success'
              href='mailto:info@siiu.umss.edu.bo'
            >
              <FontAwesomeIcon icon={solid('envelope')} size='lg' /> Email
            </a>
          </div>
        </Col>
      </Row>
      <Row className='row-content'>
        <Col xs={12}>
          <h3>Envia tu Comentario</h3>
        </Col>
        <Col xs={12} md={9}>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group as={Col} md={10} className='mb-3' controlId='firstname'>
              {' '}
              {/*controlId is label htmlFor and input id*/}
              <Form.FloatingLabel
                column
                htmlFor='firstname'
                md={2}
                label='Nombre'
              >
                <Form.Control
                  type='text'
                  id='firstname'
                  name='firstname'
                  placeholder='Nombre'
                  value={state.firstname}
                  isValid={state.touched.firstname}
                  isInvalid={state.touched.firstname}
                  onBlur={handleBlur('firstname')}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type='valid'>
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  {state.errors.firstname}
                </Form.Control.Feedback>
              </Form.FloatingLabel>
            </Form.Group>
            <Form.Group className='mb-3' controlId='lastname'>
              <Form.Label md={2}>Apellido</Form.Label>
              <Col md={10}>
                <Form.Control
                  type='text'
                  name='lastname'
                  placeholder='Apellido'
                  size='sm'
                  value={state.lastname}
                  isValid={state.touched.lastname}
                  isInvalid={state.touched.lastname}
                  onBlur={handleBlur('lastname')}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type='valid'>
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  {state.errors.lastname}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='telnum'>
              <Form.Label column md={2}>
                Tel. Contacto
              </Form.Label>
              <Col md={8}>
                <Form.Control
                  type='tel'
                  name='telnum'
                  pattern='[0-9]{3}-[0-9]{8}'
                  placeholder='591-xxxxxxxx'
                  value={state.telnum}
                  isValid={state.touched.telnum}
                  isInvalid={state.touched.telnum}
                  onBlur={handleBlur('telnum')}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type='valid'>
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  {state.errors.telnum}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='email'>
              <Form.Label column md={2}>
                Email
              </Form.Label>
              <Col md={8}>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='name@example.com'
                  value={state.email}
                  isValid={state.touched.email}
                  isInvalid={state.touched.email}
                  onBlur={handleBlur('email')}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type='valid'>
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  {state.errors.email}
                </Form.Control.Feedback>
              </Col>
              <Form.Text id='email' muted>
                Nunca compartiremos tu email con nadie mas.
              </Form.Text>
            </Form.Group>
            <Row className='mb-3'>
              <Col md={{ span: 4, offset: 0 }} className='mt-4'>
                <Form.Group controlId='agree'>
                  <Form.Check
                    type='checkbox'
                    name='agree'
                    label='Podemos contactarte?'
                    checked={state.agree}
                    onChange={handleInputChange}
                  />{' '}
                </Form.Group>
              </Col>
              <Col md={{ span: 3, offset: 0 }}>
                <Form.Group controlId='contactType'>
                  <Form.Label></Form.Label>
                  <Form.Select
                    type='select'
                    name='contactType'
                    value={state.contactType}
                    onChange={handleInputChange}
                    size='sm'
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId='message'>
              <Form.Label md={2}>Comentario</Form.Label>
              <Col md={10}>
                <Form.Control
                  as='textarea'
                  rows={3}
                  name='message'
                  value={state.message}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mt-3'>
              <Col md={{ span: 10, offset: 2 }}>
                <Button type='submit' variant='primary'>
                  Enviar
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewContact;
