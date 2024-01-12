import React from 'react';
import './MultiPageFooter.css';

const MultiPageFooter = () => {
    return (
        <div className='MultiPageFooter'>
            <hr className='multiPageHr' />
            <div className="footer_infoMulti">
                <div className="footer_tag">
                    <p className='footerTag_title'>© T_A 2023 | All Rights Reserved
                    </p>

                </div>
                <div className="footerTerms">
                    <ul>
                        <li>
                            <a href="/terms-condition">Terms & Condition</a>
                        </li>
                        <li>
                            <a href="/terms-condition">Privacy policy</a>
                        </li>
                        
                    </ul>


                </div>
            </div>

        </div>
    );
};

export default MultiPageFooter;