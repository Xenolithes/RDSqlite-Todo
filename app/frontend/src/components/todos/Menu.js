import React from 'react';
import Form from './Form';
import Todos from './Todos';

class Menu extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Form />
                <Todos />
            </React.Fragment>
        )
    }
}

export default Menu