import React from 'react'
import Imagef1 from '../imgs/f1.png';
import Imagef2 from '../imgs/f2.png';
import LhmainImage from '../imgs/lhmain.png';


function Header() {
    return (

        // HEAD START
        <>
            <div id="head">
                <div className="m-container">
                    <div className="head-1">
                        <img src={Imagef1} alt="" />
                        <div className="head1-content">
                            <h4>Sri B S Yediyurappa</h4>
                            <p>Hon’ble Chief Minister <br />
                Government  of Karnataka</p>
                        </div>
                    </div>
                    <div className="head-2">
                        <img src={LhmainImage} alt="" />
                    </div>
                    <div className="head-1">
                        <img src={Imagef2} alt="" />
                        <div className="head1-content">
                            <h4>Dr Ashwath Narayan C N </h4>
                            <p>Hon’ble Deputy Chief Minister <br />
                Higher Education, Medical Education, <br />
                IT, BT, S&amp;T</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // HEAD END 
    )
}

export default Header
