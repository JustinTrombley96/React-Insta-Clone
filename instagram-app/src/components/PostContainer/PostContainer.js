import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.scss';
import Post from './Post';

class PostContainer extends React.Component {
	render() {
		return (
			<div className='post-container'>
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
