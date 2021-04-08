import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComment from './LoadComment';


const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                        <p>
                            {props.dish.price}

                        </p>
                        <p>


                        </p>
                    </CardText>
                    <hr />
                    {
                        props.dish.comments.map(comment => <LoadComment comment={comment} key={comment.id} />)
                    }
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;