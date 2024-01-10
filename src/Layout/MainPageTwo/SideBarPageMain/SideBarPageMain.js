import React from 'react';
import LogoPart from '../../../pages/SideBar/LogoPart/LogoPart';
import SideInfo from '../../../pages/SideInfo/SideInfo';

const SideBarPageMain = () => {
    return (
        <div className='SideBarPageMain'>
            <div className='sideBarMain'>
            <div className="sideBarContent">
                <div className="sideBarSection">
                  <LogoPart></LogoPart>
                    

                </div>
                <div className="sideBarInfo">
                    <SideInfo></SideInfo>

                </div>
            </div>
            
        </div>
            
        </div>
    );
};

export default SideBarPageMain;