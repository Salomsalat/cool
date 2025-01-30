import React from 'react'
import BlogItem from '../BlogItem/BlogItem'
import './Blog.css'

function Blog() {
  return (
    <div className='blog'>
        <div className="container">
            <div className="blog_inner">
                <div className="blog_text">
                    <h1 className="blog_h1">
                    Our Blog Posts
                    </h1>
                    <p className="blog_p">
                    We are an online plant shop offering a wide range of cheap and trendy plants. 
                    </p>
                </div>
                <div className="blog_main">
                    <BlogItem/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
