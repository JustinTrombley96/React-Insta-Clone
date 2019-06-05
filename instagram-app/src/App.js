import React, { Component } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
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
			<div className='App'>
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

export default App;
