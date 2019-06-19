import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
// import styled from 'styled-components';

// const PContainerStyle = styled.div`
// 	max-width: 440px;
// 	display: inline-block;
// 	margin: 45px auto;
// 	border: .2px darkgrey solid;
// `;

class PostContainer extends React.Component {
	render() {
		return (
			<div>
				{this.props.filteredPosts.length === 0 ? (
					this.props.data.map(post => {
						return <Post post={post} />;
					})
				) : (
					this.props.filteredPosts.map(post => {
						return <Post post={post} />;
					})
				)}
			</div>
		);
	}
}

PostContainer.propTypes = {
	username     : PropTypes.string,
	likes        : PropTypes.number,
	thumbnailUrl : PropTypes.string,
	imageUrl     : PropTypes.string,
	timestamp    : PropTypes.string,
};

export default PostContainer;



//Card.js Complete
//Cards.js = Complete
//Content.js= Completed?