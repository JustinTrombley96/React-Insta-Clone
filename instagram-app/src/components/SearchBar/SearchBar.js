import './SearchBar.scss';
import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<div>
				<input name='search' onChange={this.props.searchFilter} placeholder='search...' type='text' />
			</div>
		);
	}
}

SearchBar.propTypes = {};

export default SearchBar;

/* <div className='navbar'>
				<div className='nav-left'>
					<i className='fab fa-instagram' />
					<div className='logo-text'>Instagram</div>
				</div>
				<div className='nav-center'>
					<input icon='fas fa-search' placeholder='Search' />
				</div>
				<div className='nav-right'>
                    <i className='far fa-compass' />
					<i className='far fa-heart' />
					<i className='far fa-user' />
				</div>
			</div>
			<hr /> */
