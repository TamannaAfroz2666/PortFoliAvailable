import React from 'react';
import './Blogs.css';
import Customer from './Customer/Customer';
import BlogWebsite from './BlogWebsite/BlogWebsite';
import Usability from './Usability/Usability';

const Blogs = () => {
    return (
        <div className='blogs' id='blogs'>
            <div className="blogHead">
                <div className="blogBody">
                    <p className='blogSort'>From my blog</p>
                    <p className='blogTitle'>Visit my blog and <br />Keep your feedback</p>
                </div>
                <div className="cardContent">
                    <div className="customer">
                        <Customer></Customer>

                    </div>
                    <div className="websiteBlog">
                        <BlogWebsite></BlogWebsite>

                    </div>
                    <div className="usability">
                        <Usability></Usability>
                        
                    </div>




                </div>

            </div>
        
            
        </div>
    );
};

export default Blogs;