import React from 'react';
import './Customer.css';
import image1 from '../../../assets/Images/Blog/1.png'
import image2 from '../../../assets/Images/Blog/2.png';
import image3 from '../../../assets/Images/Blog/3.png';


const Customer = () => {
    return (
        <div className='customerHead'>
            <div className="customerBody">
                <div className="customerContent">
                    <a href="/customer">
                        <div className="customerCard">
                        <img className='img' src={image1} alt="" />
                        <p className='customerDate'>Web Design /April 30, 2023</p>
                        <p className='titleCard'>Building brands though customer service </p>
                        <p> It approach that brands can use to establish familiarity, trust, and added-value for their customers through brand positioning.</p>





                        </div>

                   
                  
                    </a>

                </div>

            </div>
            
        </div>
    );
};

export default Customer;