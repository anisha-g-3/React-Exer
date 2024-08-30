import React from "react";
import "./login.css"; 
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-box">
                    <h1>Login</h1>
                    <div className="input-group">
                        <p>Username</p>
                        <input 
                            type="text" 
                            value={this.state.username} 
                            onChange={this.handleUsernameChange} 
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="input-group">
                        <p>Password</p>
                        <input 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.handlePasswordChange} 
                            placeholder="Enter your password"
                        />
                    </div>
                    <button className="login-button">Login</button>
                </div>
            </div>
        );
    }
}

export default Login;
