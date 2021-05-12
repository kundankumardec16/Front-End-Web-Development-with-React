import React, { Component } from 'react';
import Moment from 'moment';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap' ;

class DishDetail extends Component {

    constructor(props){
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish) {
        if(dish != null){
            const dishComments = dish.comments.map((feedback) => {
                return (
                    <div>
                        <li>{feedback.comment}</li><br></br>
                        <li>-- {feedback.author} , {Moment(feedback.date).format('MMM DD, YYYY')}</li><br></br>
                    </div>
                );
            });
            return (
                <ul className="list-unstyled">
                    <li><h4>Comments</h4></li>
                    {dishComments}
                </ul>
            );
        }
        else   
            return (
                <div></div>
            );
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }

}

export default DishDetail;