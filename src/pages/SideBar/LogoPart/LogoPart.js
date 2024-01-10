import React from 'react';
import './LogoPart.css';
import img1 from '../../../assets/Images/PageTwo/1.jpg'

const LogoPart = () => {
    return (
        <div className='logoPart1'>
            <div className="logoPartContent1">
                <div className="logoSide">
                    <img src={img1} alt="not found" />

                </div>
                <div className="nameSide">
                    <p className='name-title'>tamanna</p>
                </div>
            </div>

        </div>
    );
};

export default LogoPart;