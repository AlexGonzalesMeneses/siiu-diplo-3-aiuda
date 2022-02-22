import React, {Component} from 'react';
import {Card} from "react-bootstrap";

class ItemDetail extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-12 col-md-5 m-1'>
          {this.renderItem(this.props.selectedItem)}
        </div>
        <br/>
        <div className='col-12 col-md-5 m-1'>
          {this.renderComments(this.props.selectedItem?.comments)}
        </div>
      </div>
    );
  }

  renderItem(item) {
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

  renderComments(comments) {
    if (comments != null) {
      let commentElements = comments.map((comment) => {
          return (
            <div key={comment.id}>
              <Card>
                <Card.Body>
                  <Card.Text>{comment.comment}</Card.Text>
                  <Card.Text>--{comment.author} --{comment.date}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          )
        }
      );
      return (
        <div>
          <h3>Commentarios</h3>
          {commentElements}
        </div>

      )
    } else {
      return (
        <div/>
      );
    }
  }
}

export default ItemDetail;
