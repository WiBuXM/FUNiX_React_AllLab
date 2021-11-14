import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
        if (dish != null)
        return (
        <div className="col-md-6 col-lg-6">
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );
    else
        return (
            <div></div>
        );

    }

    function RenderComments({comments}) {}
        
    const  DishDetail = (props) => (props) => {
        const comments = props.dish != null ? props.dish.comments : null;
        return (
            <div className={'container'}>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {RenderDish(props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {props.dish?.name ? <div>{props.dish?.name}</div> : null}
                        {RenderComments(comments)}
                    </div>
                </div>
            </div>
    
    
        )
    }

export default DishDetail;
