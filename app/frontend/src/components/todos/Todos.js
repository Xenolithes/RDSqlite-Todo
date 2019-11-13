import React from 'react';
import { connect } from 'react-redux';
import {getTodos} from '../../Redux/Actions/todos'
import Todo from './Todo'

class Todos extends React.Component{
    componentDidMount(){
        console.log("original")
        this.props.getTodos();
    }

    render(){
        
        return (
            <div>
                {this.props.todos === undefined ? [] : this.props.todos.map(todo => {
                    return <Todo 
                    key={todo.id + "todo"}
                    item={todo.id}
                    name={todo.name} 
                    category={todo.category}
                    message={todo.message}
                    created_at={todo.created_at}
                    />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos.list
})

export default connect(mapStateToProps, {getTodos})(Todos) 