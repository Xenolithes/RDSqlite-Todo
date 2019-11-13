import {GET_TODOS, DELETE_TODO, ADD_TODO} from '../Types/todos'

const initialState = {
    list: []
}

export default function (state = initialState, action) {
    switch(action.type){
        case GET_TODOS:
            return {
                ...state,
                list: action.payload
            }
        case DELETE_TODO:
            return {
                ...state,
                list: state.list.filter(todo => todo.id !== action.payload)
            }
        case ADD_TODO:
            return {
                ...state,
                list: state.list.concat(action.payload)
            }
        default:
            return state;
    }

}