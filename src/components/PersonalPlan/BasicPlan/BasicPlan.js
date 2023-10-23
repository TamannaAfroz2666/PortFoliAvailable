import React from 'react';
import './BasicPlan.css';
import { FiArrowRightCircle } from "react-icons/fi";


const BasicPlan = () => {
    const btnStart =() =>{
        console.log('new project');
    }
    return (
        <div className='basicPlanHed'>
            <div className="basicContent">
                <h3 className='basicTitle'>Basic Plan</h3>
                <h1 className='dollarBasic'>$99.00</h1>
                <p className='perMonth'>Per month</p>
                <hr />
                <p className='basicPlanTitles'> <span className='bsArrowBasic'> <FiArrowRightCircle size={20} color='purple' /> </span> 1 Page with Elementor</p>

                <p className='basicPlanTitles'> <span className='bsArrowBasic' > <FiArrowRightCircle color='purple' size={20} /> </span> Content Upload</p>

                <p  className='basicPlanTitles'> <span className='bsArrowBasic'> <FiArrowRightCircle color='purple' size={20} /> </span> Design customization</p>

                <p className='basicPlanTitles'> <span className='bsArrowBasic'> <FiArrowRightCircle color='purple'  size={20} /> </span> Design with XD</p>

                <p className='basicPlanTitles'> <span className='bsArrowBasic'> <FiArrowRightCircle color='purple' size={20} /> </span>Project Management</p>
                <a href="/projectShow">
                <button className='basicPlanBtn' type='button' onClick={btnStart}>Start My Project Now</button>
                </a>
               
            </div>
            
        </div>
    );
};

export default BasicPlan;