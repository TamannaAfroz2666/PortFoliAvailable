import React from 'react';
import './BasicPlan.css';
import { BsArrowRightCircle } from "react-icons/bs";


const BasicPlan = () => {
    return (
        <div className='basicPlanHed'>
            <div className="basicContent">
                <h3 className='basicTitle'>Basic Plan</h3>
                <h1 className='dollarBasic'>$99.00</h1>
                <p className='perMonth'>Per month</p>
                <hr />
                <p> <span> <BsArrowRightCircle size={20} color='red'/> </span> 1 Page with Elementor</p>
                <p> <span> <BsArrowRightCircle size={20} color='red'/> </span> Content Upload</p>
                <p> <span> <BsArrowRightCircle size={20} color='red'/> </span> Design customization</p>
                <p> <span> <BsArrowRightCircle size={20} color='red'/> </span> Design with XD</p>
                <p> <span> <BsArrowRightCircle size={20} color='red'/> </span>Project Management</p>
                <button>Start My Project Now</button>
               
            </div>
            
        </div>
    );
};

export default BasicPlan;