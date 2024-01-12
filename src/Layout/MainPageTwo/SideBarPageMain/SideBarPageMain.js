import React from 'react';
import './SideBarPageMain.css';
import LogoPart from '../../../pages/SideBar/LogoPart/LogoPart';
import SideInfo from '../../../pages/SideInfo/SideInfo';
import img1 from '../../../assets/Images/PageTwo/1.jpg'
import Footer from '../../Footer/Footer';

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
            {/* <Footer></Footer> */}

        </div>
    );
};

export default SideBarPageMain;