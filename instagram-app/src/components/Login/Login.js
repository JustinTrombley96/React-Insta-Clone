import React, { Component } from 'react';

//Simply creating a login page. We are pulling the props aka the passed state, 
//from the signIn function.

export class Login extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.signIn}>
					<input placeholder='Username' type='text' required />
					<input placeholder='Password' type='password' required />
					<button>Login</button>
				</form>
			</div>
		);
	}
}

export default Login;
