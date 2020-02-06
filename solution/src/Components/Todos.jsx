import React, { Component } from 'react';
import { newTodo } from '../Actions/todoActions';
import { connect } from 'react-redux';

class Todos extends Component {
    constructor() {
        super()
        this.state = {
            todo: "",
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNew(this.state);
        console.log(this.props.todos)
    }
    handleInputChange = (e) => {
        let newInput = e.target.value;
        this.setState({
            todo: newInput
        })
    }
    render() {
        const { todo } = this.state;
        let todosArr = this.props.todos;
        let todosList = todosArr.map((todo) => {
            return(
                <li key={todo}>{todo}</li>
            )
        })
        return (
            <div>
                <h1>Todos</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Write a todo here" onChange={this.handleInputChange} value={todo}/>
                    <button type="submit" >Submit</button>
                </form>
                <ul>
                    {todosList}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer.todos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNew: (payload) => dispatch(newTodo(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);