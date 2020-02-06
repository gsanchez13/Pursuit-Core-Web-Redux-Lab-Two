import { NEW } from './actionTypes';

export const newTodo = (todo) => {
    return {
        type: NEW,
         todo
    }
};