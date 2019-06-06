import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

//Copied over from App.js to clean up App.js.

export class PostsPage extends Component {
	state = {
		data          : [],
		filteredPosts : [],
	};

	changeHandler = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	componentDidMount() {
		this.setState({
			data : dummyData,
		});
	}

	searchFilter = e => {
		const filtered = this.state.data.filter(post =>
			post.username.toLowerCase().includes(e.target.value.toLowerCase()),
		);
		this.setState({ filteredPosts: filtered });
	};

	render() {
		return (
			<div>
				<SearchBar newSearch={this.state.search} searchFilter={this.searchFilter} />
				<PostContainer
					data={this.state.data}
					filteredPosts={this.state.filteredPosts}
					searchFilter={this.searchFilter}
					likes={this.state.likes}
				/>
			</div>
		);
	}
}

export default PostsPage;
