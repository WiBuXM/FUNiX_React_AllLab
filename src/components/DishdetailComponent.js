import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle,BreadcrumbItem,Breadcrumb } from 'reactstrap';
    import {Link} from 'react-router-dom'


    function RenderDish({dish}) {
        if (dish != null)
        return (
        <div className="col-md-5 col-12 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );
    else{
        return (
            <div></div>
        );}

    }

    function RenderComments({comments}) {
        if (comments != null)
        return (
        <div className="col-md-5 col-12 m-1">
            <h4>Comment</h4>
            <ul>
                {comments.map((comment)=>
                {
                    return (
                        <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>{comment.author}</p>
                        </li>
                    )
                }
                )}
            </ul>
            </div>
        );
    else{
        return (
            <div></div>
        );
    }
    }
        
    const  DishDetail = (props) => {
        if (props.dish != null){
        return (
            <div className={'container'}>
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem><Link to="/Menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}
                    </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} /></div>
                    </div>
                </div>
        
        )}
        else {return (
            <div></div>
        );}
    }

export default DishDetail;
