import React from 'react';
import './BreakingNews.css';


const BreakingNews = () => {


    return (
        <div>
            <marquee className='newsTitle' behavior="scroll" direction="left">
                20 + Satisfied Clients   <span className='starIcon'>*</span> 10 + Team Members
                <span className='starIcon'>*</span>     2500+ project Complete   <span className='starIcon'>*</span>  2 Languages
            </marquee>
        </div>
    );
};

export default BreakingNews;