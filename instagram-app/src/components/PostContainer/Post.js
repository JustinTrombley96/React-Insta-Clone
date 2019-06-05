import React, { Component } from 'react'
import CommentSection from '../CommentSection/CommentSection'

export class Post extends Component {
    state = {
		isLiked : false,
		likes : 0
    };
    
    componentDidMount() {
        this.setState ({
            likes: this.props.post.likes
        })
    }

	toggleLike = () => {
        const addLike = this.state.isLiked ? this.state.likes -1 : this.state.likes + 1;
		this.setState({
			isLiked : !this.state.isLiked,
			// subtractLike: this.state.liked,
			likes : addLike,
		});
	};
    render() {
        const {post} = this.props
        return (
            <>
            <header>
              <img src={post.thumbnailUrl} alt='thumbnail' />
              <h3>{post.username}</h3>
              <i className='fas fa-ellipsis-h' /> 

            </header>

            <img src={post.imageUrl} alt={post.id} />
            <div className='imagesBottom'>
            <div className='imagesLeft'>
                {this.state.isLiked ? <i onClick={this.toggleLike} className="fas fa-heart"></i> :
            <i onClick={this.toggleLike} className="far fa-heart" ></i>} 
                <i className='far fa-comment' />
                <i className='far fa-share-square' />
            </div>

            <div className='imagesRight'>
                <i className='far fa-bookmark' />
            </div>
            </div>
            

            <section className='likebar'>{this.state.likes} likes</section>

            <CommentSection
              comments={post.comments}
              timestamp={post.timestamp}
            />
          </>
        )
    }
}

export default Post
