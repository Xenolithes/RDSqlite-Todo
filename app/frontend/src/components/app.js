import React from 'react';
import ReactDOM from 'react-dom';
import Header from './design/Header';
import Menu from './todos/Menu';
import { Provider } from 'react-redux';
import Store from '../Redux/store'

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                
                <Header />
                <Menu />


            </div>
            )
    }
}

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('app'))