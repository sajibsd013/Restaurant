import DISHES from '../data/dishes';
import COMMENTS from '../data/Comments';
import { combineReducers } from "redux";
import * as actionTypes from './actionTypes'


const dishReduicer = (dishState = DISHES, action) => {

    switch (action.type) {

        default:
            return dishState;
    }
}

const commentReduicer = (commentState = COMMENTS, action) => {

    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payloaad;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            return commentState.concat(comment);
            break;
        default:
            return commentState;
    }


}

export const Reducer = combineReducers({
    dishes: dishReduicer,
    comments: commentReduicer
})