import React from 'react'
import './BlogItem.css'
import blogplants from '../../assets/blogplants.png'

function BlogItem() {
  return (
    <div className='blogItem'>
      <div className="container">
        <div className="blogItem_inner">
        <div className="blogItem_card">
                <img src={blogplants} alt="" />
                <span className="blogItem_span">
                September 12  I Read in 6 minutes
                </span>
                <div className="blogItem_text">
                    <h3 className="blogItem_h3">
                    Cactus & Succulent 
                    Care Tips
                    </h3>
                    <p className="blogItem_p">
                    Cacti are succulents are easy care plants for any home or patio. 
                    </p>
                    <p className="color">Read more → </p>
                </div>
            </div>
            <div className="blogItem_card">
                <img src={blogplants} alt="" />
                <span className="blogItem_span">
                September 12  I Read in 6 minutes
                </span>
                <div className="blogItem_text">
                    <h3 className="blogItem_h3">
                    Cactus & Succulent 
                    Care Tips
                    </h3>
                    <p className="blogItem_p">
                    Cacti are succulents are easy care plants for any home or patio. 
                    </p>
                    <p className="color">Read more → </p>
                </div>
            </div>
            <div className="blogItem_card">
                <img src={blogplants} alt="" />
                <span className="blogItem_span">
                September 12  I Read in 6 minutes
                </span>
                <div className="blogItem_text">
                    <h3 className="blogItem_h3">
                    Cactus & Succulent 
                    Care Tips
                    </h3>
                    <p className="blogItem_p">
                    Cacti are succulents are easy care plants for any home or patio. 
                    </p>
                    <p className="color">Read more → </p>
                </div>
            </div>
            <div className="blogItem_card">
                <img  src={blogplants} alt="" />
                <span className="blogItem_span">
                September 12  I Read in 6 minutes
                </span>
                <div className="blogItem_text">
                    <h3 className="blogItem_h3">
                    Cactus & Succulent 
                    Care Tips
                    </h3>
                    <p className="blogItem_p">
                    Cacti are succulents are easy care plants for any home or patio. 
                    </p>
                    <p className='color'>Read more → </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
