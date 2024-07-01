import React from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../assets/avatar1.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/`} className='post-author'>
        <div className="post-author-avatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="post-author-details">
            <h5>By: Martin Luther King</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor
