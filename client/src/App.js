import React, { Component } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import VIP from './components/VIP';
import Profile from './components/Profile';
import Logout from './components/Logout';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import httpClient from './utilities/httpClient';

class App extends Component {
	state = {
		currentUser: httpClient.getCurrentUser()
	}

	onAuthSuccess = () => {
		this.setState({ currentUser: httpClient.getCurrentUser() })
	}

	logout = () => {
		httpClient.logout();
		this.setState({ currentUser: null });
	}

	render() {
		return (
			<Layout currentUser={this.state.currentUser}>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/login" render={(props) => {
						return <Login {...props} onLoginSuccess={this.onAuthSuccess} />
					}}/>
					<Route exact path="/logout" render={() => {
						return <Logout logOut={this.logout}/>
					}}/>
					<Route exact path="/signup" component={Signup}/>
					<Route exact path="/profile" component={Profile}/>
					<Route exact path="/vip" render={() => {
						return this.state.currentUser ? <VIP/> : <Redirect to="/login"/>
					}}/>
				</Switch>
			</Layout>
		);
  	}
}

export default App;
