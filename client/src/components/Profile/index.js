import React, { Component } from 'react';

class Profile extends Component {
    state = { 
        email: "",
        name: ""
    };

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        let { email, name } = this.state;
        return (
            <div>
                <h1>Profile</h1>
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
                            <input type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;