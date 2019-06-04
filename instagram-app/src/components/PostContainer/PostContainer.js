import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.scss';

const PostContainer = props => {
	return props.postcontainer.map(post => (
		<div className='postContainer'>
			<div className='postContainerTop'>
				<div className='imgUser'>
					<div className='imgTop'>
						<img src={post.thumbnailUrl} alt='' />
					</div>
					<h6>{post.username}</h6>
				</div>
				<i className='fas fa-ellipsis-h' />
			</div>

			<img className='imageMid' src={post.imageUrl} alt='' />
			<div className='imagesBottom'>
				<div className='imagesLeft'>
					<i className='far fa-heart' />
					<i className='far fa-comment' />
					<i className='far fa-share-square' />
				</div>
				<div className='imagesRight'>
					<i className='far fa-bookmark' />
				</div>
			</div>
			<h6>{post.likes} likes</h6>
			{post.comments.map(comment => <CommentSection commentsection={comment} />)}
			<p className='time'>{post.timestamp}</p>
			<input type='text' placeholder='Add a Comment...' />
		</div>
	));
};

PostContainer.propTypes = {
	username     : PropTypes.string,
	likes        : PropTypes.number,
	thumbnailUrl : PropTypes.string,
	imageUrl     : PropTypes.string,
	timestamp    : PropTypes.string,
};

export default PostContainer;
