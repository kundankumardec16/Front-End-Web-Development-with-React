import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap' ;
import { Link } from 'react-router-dom';

    function RenderDish({dish}) {
        return(
            <Card key={dish.id}>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({dishComments}) {
        const dishComment = dishComments.map((feedback) => {
            return (
                <div key={dishComments.id}>
                    <li>{feedback.comment}</li><br></br>
                    <li>-- {feedback.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(feedback.date)))}</li><br></br>
                </div>
            );
        });
        return (
            <ul className="list-unstyled">
                <li><h4>Comments</h4></li>
                {dishComment}
            </ul>
        );
    }

    const DishDetail = (props) => {
        if (props.dish != null){
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish key={props.dish.id} dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments dishComments={props.comments} />
                        </div>
                    </div> 
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
        
    }

export default DishDetail;