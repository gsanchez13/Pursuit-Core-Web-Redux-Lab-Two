import { NEW } from '../Actions/actionTypes'

const initalState = {
    todos: []
}
const todoReducer = (state = initalState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case NEW:
            let newArr = [...stateCopy.todos];
            newArr.push(action.todo);
            stateCopy.todo = newArr
            break;
        default:
            break;
    }
    return stateCopy
}

export default todoReducer;


//reducer makes the changes to the stateCopy
//the action being used as the argument is an object when the todoReducer function is called, therefore we have to key into the "type" key to get its value
