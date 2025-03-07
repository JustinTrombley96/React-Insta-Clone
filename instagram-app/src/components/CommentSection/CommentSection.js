import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentSection extends Component {
	state = {
		comments   : this.props.comments,
		newComment : '',
	};
	addNewComment = e => {
		e.preventDefault();
		const newComment = {
			username : 'MayaZarZar',
			text     : this.state.newComment,
		};
		this.setState({
			comments   : [ ...this.state.comments, newComment ],
			newComment : '',
		});
	};
	changeHandler = e => {
		this.setState ({
			[e.target.name]: e.target.value
		})
	}
	render() {
		return (
			<div className="comment-section">
				{this.state.comments.map(comment => {
					return (
						<>
						<h3>{comment.username}</h3>
						<p>{comment.text}</p>
						</>
					)
				})}
				<p className="timestamp">{this.props.timestamp}</p>
				<form onSubmit = {this.addNewComment}>
					<input type='text' name='newComment' value= {this.state.newComment} onChange={this.changeHandler} placeholder='Add a comment...' required/>
					</form>
			</div>
		)
	}
}

CommentSection.propTypes = {
	text : PropTypes.string,
};

export default CommentSection;
