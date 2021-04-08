import React from 'react';
import dateFormat from 'dateformat';

const LoadComment = (props) => {
    console.log(props.comment);
    return (
        <div>
            {/* <h5>
                {props.comment.rating}
            </h5> */}
            <h5>
                {props.comment.author}
            </h5>
            <p>
                {props.comment.comment}
            </p>
            <p>
                {dateFormat(props.comment.date,"dddd, mmmm dS, yyyy, h:MM:ss TT") }
            </p>

        </div>
    );
};

export default LoadComment;