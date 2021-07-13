import {ADD_TEXT} from '../actions/index';
import IF from '../test-interface';

export function texts(state = [], action: IF) {
    switch(action.type) {
        case ADD_TEXT: 
            return [...state, action.text];
        default:
            return state;
    }
}