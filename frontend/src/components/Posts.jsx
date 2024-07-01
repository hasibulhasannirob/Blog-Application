import React, { useState } from 'react'
import Thumbnail1 from '../assets/blog1.jpg'
import Thumbnail2 from '../assets/blog2.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
    {
        id: 1,
        thumbanil: Thumbnail1,
        category: 'Business',
        title: 'The psychology behind discounts and how it can benefit your business',
        desc: 'Many customers are motivated to purchase at a discounted price, even if it wasnot initially part of their plans. In fact a whopping 93% of US consumers consider discounts to be a smart move and a crucial factor influencing their purchase decisions',
        authorID: 3
    },
    {
        id: 2,
        thumbanil: Thumbnail2,
        category: 'Business',
        title: 'The psychology behind discounts and how it can benefit your business',
        desc: 'Many customers are motivated to purchase at a discounted price, even if it wasnot initially part of their plans. In fact a whopping 93% of US consumers consider discounts to be a smart move and a crucial factor influencing their purchase decisions',
        authorID: 1
    },
    {
        id: 3,
        thumbanil: Thumbnail2,
        category: 'Business',
        title: 'The psychology behind discounts and how it can benefit your business',
        desc: 'Many customers are motivated to purchase at a discounted price, even if it wasnot initially part of their plans. In fact a whopping 93% of US consumers consider discounts to be a smart move and a crucial factor influencing their purchase decisions',
        authorID: 1
    }
]


const Posts = () => {

    const [posts, setPosts] = useState(DUMMY_POSTS);

    return (
        <section className='posts'>
            <div className="container posts-container">

                {
                    posts.map((
                        { id, thumbanil, category, title, desc, authorID }
                    ) => <PostItem key={id} postID={id} thumbanil={thumbanil} category={category} title={title} description={desc} authorID={authorID} />)
                }
            </div>
        </section>
    )
}

export default Posts
