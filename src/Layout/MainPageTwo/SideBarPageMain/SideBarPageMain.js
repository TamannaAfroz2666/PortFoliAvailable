import React from 'react';
import './SideBarPageMain.css';
import LogoPart from '../../../pages/SideBar/LogoPart/LogoPart';
import SideInfo from '../../../pages/SideInfo/SideInfo';
import img1 from '../../../assets/Images/PageTwo/1.jpg'

const SideBarPageMain = () => {
    return (
        <div className='SideBarPageMain'>
            <div className='sideBarMain'>
                <div className="sideBarContent">
                    <div className="sideBarSection">
                        <LogoPart></LogoPart>
                        {/* <div className="logoPartContent1">
                            <div className="logoSide">
                                <img src={img1} alt="not found" />

                            </div>
                            <div className="nameSide">
                                <p className='name-title'>tamanna</p>
                            </div>
                        </div> */}


                    </div>
                    <div className="sideBarInfo">
                        <SideInfo></SideInfo>
                        {/* <div className='sideInfoC'>
                            <h1>hhh</h1>


                        </div> */}

                    </div>
                </div>

            </div>

        </div>
    );
};

export default SideBarPageMain;