import React from 'react';
import './GoldPlan.css';
import { FiArrowRightCircle } from "react-icons/fi";

const GoldPlan = () => {
    const btnStart =() =>{
        console.log('new project of gold');
    }
    return (
        <div className='goldPlanHead'>
            <div className="goldContent">
                <h3 className='goldTitle'>Gold Plan</h3>
                <h1 className='goldDollarBasic'>$799.00</h1>
                <p className='GoldMonth'>Per month</p>
                <hr />
                <p className='goldPlanTitles'> <span className='bsArrowGold'> <FiArrowRightCircle size={14} color='purple' /> </span> 5 Page with Elementor</p>

                <p className='goldPlanTitles'> <span className='bsArrowGold' > <FiArrowRightCircle color='purple' size={14} /> </span> Content Upload</p>

                <p  className='goldPlanTitles'> <span className='bsArrowGold'> <FiArrowRightCircle color='purple' size={14} /> </span> Design customization</p>

                <p className='goldPlanTitles'> <span className='bsArrowGold'> <FiArrowRightCircle color='purple'  size={14} /> </span> Design with XD</p>

                <p className='goldPlanTitles'> <span className='bsArrowGold'> <FiArrowRightCircle color='purple' size={14} /> </span>Project Management</p>
                <a href="/projectShow">
                <button className='goldPlanBtn' type='button' onClick={btnStart}>Start My Project Now</button>
                </a>
               
            </div>
            
        </div>
    );
};

export default GoldPlan;