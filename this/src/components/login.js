import React from 'react';
import Username from './Username';
import Password from './Password';
import ShowPassword from './show-password';
import LoginButton from './login-button';
import './style.css'



export default class Login extends React.Component {
    render() {

        return (
            <div id='login'>
                <h3>Login</h3>
                <Username />
                <br />
                <Password />
                <ShowPassword />
                <LoginButton />
                
              
            </div>
        )
    }
}