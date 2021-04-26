import React from 'react';
import dateFormat from 'dateformat';

const LoadComment = (props) => {
    return (
        <div>
             <hr/>
            <h5> {props.comment.author}</h5>
            <h6> Rating:  {props.comment.rating}</h6>

            <p> {props.comment.comment}</p>
            <p>{dateFormat(props.comment.date,"dddd, mmmm dS, yyyy, h:MM:ss TT") }</p>

        </div>
    );
};

export default LoadComment;