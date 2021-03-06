import React from 'react';

import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = props => {
    return (
        <div>
            <Card style={{ margin: "10px", cursor: "pointer" }} 
            onClick={() => props.DishSelect(props.dish)}
            >
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                        style={{
                            opacity: ".5",
                        }}
                        
                    />
                    <CardImgOverlay>
                        <CardTitle
                            onClick={() => props.DishSelect(props.dish)}
                            style={{ cursor: "pointer"}}
                        >
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;