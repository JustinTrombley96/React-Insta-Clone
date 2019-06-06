import React, { Component } from 'react';
// import './SearchBar.scss';
import styled from 'styled-components';

const NavBar = styled.div`
	max-width: 660px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
`;

const NavLeft = styled.div`display: flex;`;

const ImgContainer = styled.div`width: 20%;`;

const NavCenter = styled.div`display: flex;`;

const NavRight = styled.div`display: flex;`;

const Img = styled.img`width: 100%;`;

const IconRight = styled.i`margin-right: 22px;`;

const Search = styled.input`
	text-align: center;
	font-size: 12px;
`;

const IconLeft = styled.i`
	padding-right: 10px;
	margin-top: 4px;
	font-weight: 500;
`;

class SearchBar extends Component {
	render() {
		return (
			<NavBar>
				<NavLeft>
					<IconLeft className='fab fa-instagram' />
					<ImgContainer>
						<Img
							src='https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png
https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png
'
							alt=''
						/>
					</ImgContainer>
				</NavLeft>
				<NavCenter>
					<Search name='search' onChange={this.props.searchFilter} placeholder='search' type='text' />
				</NavCenter>

				<NavRight>
					<IconRight className='far fa-compass' />
					<IconRight className='far fa-heart' />
					<IconRight className='far fa-user' />
				</NavRight>
			</NavBar>
		);
	}
}

SearchBar.propTypes = {};

export default SearchBar;
