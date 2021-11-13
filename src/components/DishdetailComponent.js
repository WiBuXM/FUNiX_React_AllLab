import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


function RenderDish({dish, dishID}) {
  if(dish != null){
    return(
        <Card>
              <CardImg width="50%%" src={dish.image} alt={dish.name} />
                <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
                </CardBody>
        </Card>
    )
}
else{
    return (
    <div></div>
    )

    }
}

function RenderComments({comments}) {



}

const  DishDetail = (props) => {
    //Return về div để không lỗi
    return (
        <div></div>
    )
}

export default DishDetail;