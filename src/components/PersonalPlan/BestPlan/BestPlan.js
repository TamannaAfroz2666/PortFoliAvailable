import React from 'react';
import './BestPlan.css';
import { FiArrowRightCircle } from "react-icons/fi";
const BestPlan = () => {

    const btnStart = () => {
        console.log('new project of gold');
    }
    return (

        <div className='bestPlanHead'>

            <div className="bestPlanContent">
                <h3 className='bestPlanTitle'>Best Plan</h3>
                <h1 className='bestPlanDollar'>$279.00</h1>
                <p className='bestPlanMonth'>Per month</p>
                <hr />
                <p className='bestPlanTitles'> <span className='bsArrowBestPlan'> <FiArrowRightCircle size={20} color='purple' /> </span> 3 Page with Elementor</p>

                <p className='bestPlanTitles'> <span className='bsArrowBestPlan' > <FiArrowRightCircle color='purple' size={20} /> </span> Content Upload</p>

                <p className='bestPlanTitles'> <span className='bsArrowBestPlan'> <FiArrowRightCircle color='purple' size={20} /> </span> Design customization</p>

                <p className='bestPlanTitles'> <span className='bsArrowBestPlan'> <FiArrowRightCircle color='purple' size={20} /> </span> Design with XD</p>

                <p className='bestPlanTitles'> <span className='bsArrowBestPlan'> <FiArrowRightCircle color='purple' size={20} /> </span>Project Management</p>
                <a href="/projectShow">
                    <button type='button' onClick={btnStart}>Start My Project Now</button>
                </a>

            </div>


        </div>
    );
};

export default BestPlan;