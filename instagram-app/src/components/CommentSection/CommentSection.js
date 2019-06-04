import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.scss';

const CommentSection = props => {

		addNewComment = (event, index) => {
			event.preventDefault();

			const newComment = {
				comment: this.state.comment
			}
			this.ListeningStateChangedEvent({
				
			})
		}

		

	return (
		<div>
			<p>
				<strong>{props.commentsection.username} </strong>{props.commentsection.text}
			</p>
		</div>
	);
};



CommentSection.propTypes = {
	text : PropTypes.string,
};

export default CommentSection;
