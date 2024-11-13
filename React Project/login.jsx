import React from "react";
import "./login.css"; 

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: ''
        };
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
            error: ''
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
            error: ''
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;

        try {
            const response = await fetch('http://localhost:3000/users');
            const users = await response.json();

            const user = users.find(user => user.email === username && user.password === password);

            if (user) {
                console.log('Login successful:', user);
                window.location.href = '/dashboard'; // Change this as needed
            } else {
                this.setState({ error: 'Invalid email or password' });
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            this.setState({ error: 'An error occurred. Please try again.' });
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-box">
                    <center>
                        <h1>Login</h1>
                        {this.state.error && <p className="error">{this.state.error}</p>}
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group">
                                <p>Email</p>
                                <input 
                                    type="text" 
                                    value={this.state.username} 
                                    onChange={this.handleUsernameChange} 
                                    placeholder="Enter your email"
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
                            <button type="submit" className="login-button">Login</button>
                        </form>
                    </center>
                </div>
            </div>
        );
    }
}

export default Login;
