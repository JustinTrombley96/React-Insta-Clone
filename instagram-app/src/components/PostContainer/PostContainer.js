import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types'
import './PostContainer.scss'

export class PostContainer extends Component {
  

	render() {
        return (
        <div className="post-container">

          {this.props.filteredPosts.length === 0 ? this.props.data.map(post => {
              return (
                 <>
                 <header>
                     <img src={post.thumbnailUrl} alt="thumbnail"/>  
                     <h3>{post.username}</h3>  
                 </header>
                 <img src={post.imageUrl} alt={post.id}/>
                 <section className="likebar">
                     {post.likes} likes
                 </section>
                 <CommentSection comments={post.comments} timestamp={post.timestamp} />
                 </>
              )
          }): this.props.data.map(post => {
            return (
               <>
               <header>
                   <img src={post.thumbnailUrl} alt="thumbnail"/>  
                   <h3>{post.username}</h3>  
               </header>
               <img src={post.imageUrl} alt={post.id}/>
               <section className="likebar">
                   {post.likes} likes
               </section>
               <CommentSection comments={post.comments} timestamp={post.timestamp} />
               </>
            ) }
            )}
         </div>
        )
        
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



// <i className='fas fa-ellipsis-h' /> 


// <div className='imagesBottom'>
// 					<div className='imagesLeft'>
// 						<i className='far fa-heart' />
// 						<i className='far fa-comment' />
// 						<i className='far fa-share-square' />
// 					</div>

// 					<div className='imagesRight'>
// 						<i className='far fa-bookmark' />
// 					</div>