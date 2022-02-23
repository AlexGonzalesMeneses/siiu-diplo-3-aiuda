import React from 'react';
import {Card} from "react-bootstrap";

const ItemDetail = props => {
    return (
      <div className='row'>
        <div className='col-12 col-md-5 m-1'>
          {/*{this.renderItem(this.props.item)}*/}
          <RenderItem item={props.item}/>
        </div>
        <br/>
        <div className='col-12 col-md-5 m-1'>
          {/*{this.renderComments(this.props.item?.comments)}*/}
          <RenderComments comments={props.item?.comments}/>
        </div>
      </div>
    );

  function RenderItem({item}) {// JS destructuring props
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
                {item.requisites.map( (requisite,index) => (<span key={index}>{requisite}</span>))}
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
      let commentElements = comments.map((comment) => {
          return (
            <div key={comment.id}>
              <li className='list-unstyled'>
                <ul className='list-unstyled'>
                  <li>{comment.comment}</li>
                  <li>--{comment.author} --
                    {new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit'
                    }).format(new Date(Date.parse(comment.date)))}</li>
                </ul>
              </li>
            </div>
          )
        }
      );
      return (
        <div>
          <h3>Comentarios</h3>
          {commentElements}
        </div>

      )
    } else {
      return (
        <div/>
      );
    }
  }
};

export default ItemDetail;
