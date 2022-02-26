import React from 'react';
import {Breadcrumb, Card, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const ItemDetail = (props) => {
  return (
    <Container>
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/catalog">Catalog</Link></Breadcrumb.Item>
          <Breadcrumb.Item active>{props.item.name}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.item.name}</h3>
          <hr/>
        </div>
      </Row>

      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {/*{this.renderItem(this.props.item)}*/}
          <RenderItem item={props.item}/>
        </div>
        <div className="col-12 col-md-5 m-1">
          {/*{this.renderComments(this.props.item != null ? this.props.item.comments : null)}*/}
          {/*<RenderComments comments={props.item != null ? props.item.comments : null}/>*/}
          <RenderComments comments={props.item?.comments}/>
        </div>
      </div>
    </Container>
  );
}

function RenderItem({item}) {// destructuring js
  if (item != null) {
    return (
      <div key={item.id} className="col-8 m-auto">
        <Card>
          <Card.Header>
            <Card.Title>{item.name}</Card.Title>
          </Card.Header>
          <Card.Img style={{width: '80%'}} className='m-4' src={item.image} alt={item.name}/>
          <Card.Body>
            <Card.Text>
              {item.requisites.map((requisite, index) => (<span key={index}>{requisite}</span>))}
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    );

  } else {
    return (
      <div/>
    );
  }
}

function RenderComments({comments}) {
  if (comments != null) {
    let commentsElements = comments.map((comment) => {
      return (
        <div key={comment.id}>
          <li key={comment.id} className="list-unstyled">
            <ul className="list-unstyled">
              <li>{comment.comment}</li>
              <li>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
              }).format(new Date(Date.parse(comment.date)))}</li>
            </ul>
          </li>
        </div>
      )
    });
    return (
      <div>
        <h4>Comments</h4>
        {commentsElements}
      </div>
    );
  } else {
    return (
      <div/>
    );
  }
}


export default ItemDetail;
