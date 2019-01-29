import React, { Component } from 'react';

export default class Login extends Component {
    state = { 
        email: "",
        password: "",
        name: ""
    };

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        let { email, password, name } = this.state;
        return (
            <div>
                <h1>Signup</h1>
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form>
                            <label>Name: </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Johnny Appleseed" 
                                onChange={this.handleChange}
                                value={name}
                                />
                            <label>Email: </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="john@applseed.com" 
                                onChange={this.handleChange}
                                value={email}
                                />
                            <label>Password: </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Secret Password..." 
                                onChange={this.handleChange}
                                value={password}
                                />
                            <input type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};