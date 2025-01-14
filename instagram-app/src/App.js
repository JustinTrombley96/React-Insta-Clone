import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';
// import styled from 'styled-components';

//Creating a HOC "ComponentFromWithAuthenticate" and setting it equal to another HOC,
//passing in PostsPage and Login.

//We are then rendering the HOC that we just created and using it to display all pages.

// const NavBar = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	margin: 10px auto;
// `;

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);
class App extends Component {
	render() {
		return (
			<div className='App'>
				<ComponentFromWithAuthenticate />
			</div>
		);
	}
}

export default App;
