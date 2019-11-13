import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../../Redux/Actions/todos'

const Todo = (props) => {
    return (

        <div>
        <div className="col s12 m6">
          <div className="card light-green lighten-5">
            <div className="card-content">
              <span className="card-title">{`${props.name}:  ${props.category}`}</span>
              <br></br>
              <p>{props.message}</p>
            </div>
            <div className="card-action">
              <a className="row btn black-text" href="#" onClick={ event => {
                                event.preventDefault()
                                props.deleteTodo(props.item)
                            }}>Delete
                </a>
            </div>
          </div>
        </div>
      </div>



        // <div className="card panel center-align light-green lighten-5">
        //     <div className="row">
        //         <div className="col s1">
        //             <p  >{props.name}</p>
        //         </div>
        //         <div className="col s2">
        //             <p >{props.category}</p>
        //         </div>
        //         <div className="col s3">
        //             <p >{props.message}</p>
        //         </div>
        //         <div className="col s2">
        //             <p  >{props.created_at.slice(0,9)}</p>
        //         </div>
        //         <div  className="col s1 offset-s1" >
        //             <div style={{position: "relative", margin: "50%"}} className="row btn-floating" onClick={ event => {
        //                 event.preventDefault()
        //                 props.deleteTodo(props.item)
        //             }}> <i className="material-icons">check</i></div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default connect(null, {deleteTodo})(Todo);