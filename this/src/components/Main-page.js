import React from 'react';
import Login from './login';
import NavBar from './Navbar';

export default class MainPage extends React.Component {
    render(){
        return(
            <div className='container'>
                <NavBar />
                <br /><br /><br /><br />
                <Login />
            </div>
        )
        
    }   
}
