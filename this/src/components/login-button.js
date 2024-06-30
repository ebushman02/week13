import React from 'react';
import './style.css';

export default class LoginButton extends React.Component {
    render() {
        return (
        <button id="login-button" onClick={LogInUser()}>Login</button>
    )
    }
}
function LogInUser(){

}