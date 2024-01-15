import React, { useState } from 'react';
import './WelcomePage.css';
// import fish1 from '../../assets/Images/Logo/3d-basketball-essentials.jpg';
import { CgMail } from "react-icons/cg";
import { BsArrowRightCircle } from "react-icons/bs";

import Button from '@mui/material/Button';

const WelcomePage = () => {

    // -----------------option 1 (click on a button and show new page) -------------------------------------------
    const messageHandle =() => {
        const newTab = window.open(  '_blank');
        if(newTab){
            newTab.location.href = 'https://mail.google.com/mail/u/0/#inbox';
        }
        else{
            console.error ('some error here')
        }

    }

    // -----------------option 2 (click on a button and show new page) -------------------------------------------
    // const [isButtonClick , setIsButtonClick] = useState(false);
    // const messageHandle = () => {
    //     console.log('hello');
    //     setIsButtonClick(true)
    // }
    //create a new tab open
    // const newTab = window.open('', '_message'); 
    // ---------------------and make a email field start------------

    // const myElement = document.getElementById('messageId');
    // if(myElement && newTab){
    //     // newTab.document.write(`
    //     // <html>
    //     //     <head>
    //     //       <title>Email Form</title>
    //     //     </head>
    //     //     <body>
    //     //       <h2>Email Form</h2>
    //     //       <form action="mailto:default@example.com" method="post" enctype="text/plain">
    //     //         <label>Email:</label>
    //     //         <input type="text" name="email" defaultValue="default@example.com" />
    //     //         <br />
    //     //         <input type="submit" value="Send Email" />
    //     //       </form>
    //     //     </body>
    //     //   </html>
    
    //     // `)
    //     // newTab.document.close();

    // }
    // else{
    //     console.error('could not find window or element')
    // }
     // ------------------and make a email field end----------------
   
    return (
        <div className='welcome' id='homeSingle'>
            <div className="pageHead">
                <div className="infoSection">
                    <div className="personalInfo">
                        <p className='sort_title'>Welcome To My World</p>

                        <div className="scrollerHead">
                            <div className="scroller">
                                <span>
                                    <h3 className='hey'>Hey </h3><br />
                                    <h2 className='nameSingle'>I'm Tamanna Afroz</h2>  <br />
                                    <small className='frontEnd'>Front-End Developer</small>

                                </span>
                            </div>

                        </div>

                        <p className='descriptionInfoWelSingle'>
                            As a Front-End Developer, I take great pride in my work and am devoted to it. I've gained the abilities and know-how required to see your project through to completion.
                        </p>
                        <div className="animationFrame">
                            <div id="frameDiv">

                                <span className='span' id="fish1"> * </span>

                                <svg className='svg' fill="none" stroke="orange" stroke-width="5" stroke-dasharray="5,8">
                                    <path d="M 50 80 C 150 -20 250 180 350 80" />

                                </svg>
                            </div>

                        </div>
                    </div>
                    <div className="contactInfo">
                        <div className="backgroundPart">
                            <div className="btnInfo1">

                                <Button id='messageId'

                                onClick={messageHandle}
                                 className='button'
                                  variant="outlined" startIcon={<CgMail className='mailIcon' size={18} />}>

                                    Message
                                    <BsArrowRightCircle color='black' className='arrowIcon' size={16} />
                                </Button>
                                {/* {isButtonClick } */}

                            </div>


                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default WelcomePage;