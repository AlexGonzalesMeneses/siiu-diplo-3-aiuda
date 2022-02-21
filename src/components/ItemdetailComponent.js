import React, {Component} from 'react';
import {Card} from "react-bootstrap";

class ItemDetail extends Component {

  componentDidMount() {
    console.log("ItemDetail componentDidMount es invocado");
  }

  componentDidUpdate() {
    console.log("ItemDetail componentDidUpdate es invocado");
  }

  render() {
    console.log("ItemDetail render es invocado");
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderItem(this.props.item)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.item != null ? this.props.item.comments : null)}
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

  renderComments(comments) {
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

}

export default ItemDetail;
