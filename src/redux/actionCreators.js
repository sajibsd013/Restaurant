import * as actionTypes from './actionTypes';

export const addComment = (dishID, rating, author, comment) => ({
    type: actionTypes.ADD_COMMENT,
    payloaad: {
        dishID: dishID,
        author: author,
        rating: rating,
        comment: comment
    }
})