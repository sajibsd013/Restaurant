import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import CommentFrom from './CommentFrom';
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

                    </CardText>
                    <hr />
                    {
                        props.comments.map(comment => <LoadComment comment={comment} key={comment.id} />)
                    }
                    <hr />
                    <CommentFrom
                        dishID={props.dish.id}
                        addComment = {props.addComment}
                    />
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;