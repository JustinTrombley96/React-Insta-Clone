import React, { Component } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
	state = {
		data     : [],
		comments : this.state.comments,
		id       : '',
		username : 'MyZarZar',
		text     : '',
	};
	componentDidMount() {
		this.setState({
			data : dummyData,
		});
	}

	handleChanges = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	addComment = (event, index) => {
		event.preventDefault();

		const newComment = {
			id       : this.state.id,
			username : this.state.username,
			text     : this.state.text,
		};

		this.setState({
			comments : [ ...this.state.comments, newComment ],
			id       : '',
			username : 'MyZarZar',
			text     : this.state.text,
		});
	};

	render() {
		return (
			<div>
				<SearchBar />
				<PostContainer postcontainer={this.state.data} />
			</div>
		);
	}
}

export default App;
