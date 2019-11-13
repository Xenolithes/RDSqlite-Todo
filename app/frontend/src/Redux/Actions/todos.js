import axios from 'axios';
import {GET_TODOS, DELETE_TODO ,ADD_TODO} from '../Types/todos';

export const getTodos = () => dispatch => {
        axios.get('http://localhost:8000/api/todo/')
            .then(res => {
                
                dispatch({
                    type: GET_TODOS,
                    payload: res.data
                })
            })
            .catch(error => {
                // console.log('this occurs')
                console.log(error)
            })
    }


export const deleteTodo = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/todo/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_TODO,
                payload: id
            })
        })
        .catch(error => {
                // console.log('this occurs')
            console.log(error)
        })
    }

export const addTodo = (name, category, message) => dispatch => {
    axios.post(`http://localhost:8000/api/todo/`, {
        name : name,
        category : category,
        message : message
    })
    .then(res => {
        dispatch({
            type: ADD_TODO,
            payload: res.data
        })
    })
    .catch(error => {
        // console.log('this occurs')
        console.log(error)
    })
}