import './SearchBar.scss';
import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<div className='navbar'>
				<div className='nav-left'>
					<i className='fab fa-instagram' />
					<div className='logo-text'>Instagram</div>
				</div>
				<div className='nav-center'>
					<input name='search' onChange={this.props.searchFilter} placeholder='search...' type='text' />
				</div>
				<div className='nav-right'>
					<i className='far fa-compass' />
					<i className='far fa-heart' />
					<button>
						<i className='far fa-user' />
					</button>
				</div>
				<hr />
			</div>
		);
	}
}

SearchBar.propTypes = {};

export default SearchBar;
