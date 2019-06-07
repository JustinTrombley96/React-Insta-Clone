import React from 'react';

//Create a High Order Component "withAuthenticate."

//As a HOC it takes in two components, PostComp and LoginComp, and returns them through the class.

//We render the two components that was passed in, into an IF statement,
//based on whether the user is logged in or not.

//The remainder of the functions set-up the login functionality. Within those functions we target
// the value, pulling out whatever the user types in for username and password.

//Using Local Storage, we are storing information on their username and password.

const withAuthenticate = PostComp => LoginComp =>
	class extends React.Component {
		state = {
			loggedIn     : false,
			usernameText : '',
			passwordText : '',
		};
		username = e => {
			this.setState({
				usernameText : e.target.value,
			});
		};

		password = e => {
			this.setState({
				passwordText : e.target.value,
			});
		};

		signIn = e => {
			// e.preventDefault();
			localStorage.setItem('user', this.state.usernameText);
			localStorage.setItem('pass', this.state.passwordText);
			this.setState({
				loggedIn : true,
			});
		};

		render() {
			if (this.state.loggedIn) {
				return <PostComp />;
			} else {
				return <LoginComp username={this.username} password={this.password} signIn={this.signIn} />;
			}
		}
	};

export default withAuthenticate;
