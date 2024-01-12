import React from 'react';
import './MessagePage.css';

const MessagePage = () => {
    return (
        <div className='MessagePage'>
            <form action="">
                <div className="nameSubjectContent">
                    <div className="name_message">
                        <input type="text" name='name' className='name_fieldMess' id='name_fieldMess' placeholder='Your Name Here' />
                    </div>
                    <div className="sub_message">
                    <input type="text" name='name' className='name_fieldMess' id='name_fieldMess' placeholder='Subject' />
                    </div>
                </div>

            </form>
            
        </div>
    );
};

export default MessagePage;