import React from 'react'
import {Link} from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ( {postID, thumbanil, category, title, description, authorID}) => {
  
    const shortDescription = description.length > 200 ? description.substr(0, 200) +'...' : description;
    const postTitle = title.length > 50 ? title.substr(0, 50) +'...' : title;

    return (
    <article className='post'>
        <div className="post-thumbnail">
            <img src={thumbanil} alt={title} />
        </div>
        <div className="post-content">
            <Link to={`/posts/${postID}`}>
                <h3>{postTitle}</h3>
            </Link>
            <p>{shortDescription} </p>
            <div className="post-footer">
                <PostAuthor/>
                <Link to={`/posts/categories/${category}`} className='btn category'> {category} </Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem
