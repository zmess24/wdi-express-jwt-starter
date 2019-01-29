import React, { Component } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import VIP from './components/VIP';
import Profile from './components/Profile';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/login" component={Login}/>
					{/* <Route exact path="/logout" component={Logout}/> */}
					<Route exact path="/signup" component={Signup}/>
					<Route exact path="/profile" component={Profile}/>
					<Route exact path="/vip" component={VIP}/>
				</Switch>
			</Layout>
		);
  	}
}

export default App;
