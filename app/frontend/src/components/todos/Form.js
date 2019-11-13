import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../Redux/Actions/todos'

class Form extends React.Component{
    render(){
        return (
            <div className="card-panel row green lighten-4 ">
                <div className="row">
                    <p>Name: </p>
                    <input className="input-field white" id="name-input" type="text"></input>
               </div>
               <div className="row">
                    <p>Category:</p>
                    <input className="input-field white" id="category-input" type="text"></input>
               </div>
               <p>Description: </p>
               <textarea className="input-field white col" id="message-input"></textarea>
               <button className="btn-floating btn-large waves-effect waves-light teal darken-2" onClick={event => {
                   event.preventDefault();
                   let name = document.getElementById('name-input').value
                   document.getElementById('name-input').value = '';
                   let category = document.getElementById('category-input').value
                   document.getElementById('category-input').value = '';
                   let message = document.getElementById('message-input').value
                   document.getElementById('message-input').value = '';
                   this.props.addTodo(name, category, message)
               }}><i className="material-icons">add</i></button>
            </div>
        )
    }
}

export default connect(null, {addTodo})(Form)