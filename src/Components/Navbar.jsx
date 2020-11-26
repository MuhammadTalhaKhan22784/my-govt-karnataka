import React from 'react'
import LmainImage from '../imgs/lmain.png';

function Navbar() {

  
  return (
    //NAVBAR START
    <>
      <div id="nav">
        <div className="m-container">
          <div className="nav-1">
            <img src={LmainImage} alt="" />
            <p>Government of <br /> Karnataka</p>
          </div>
          <ul className="nav-2">
            <li><a href="#">HOME</a></li>
            <li><a href="#">YOUTH SERVICES</a></li>
            <li><a href="#">COUNSELLING</a></li>
            <li><a href="#">UPCOMING EVENTS</a></li>
          </ul>
          <div className="nav-3">
          <a href="#" className="med-none">SIGN IN</a>
            <div className="switch">
              <button className="btn-tgl">EN</button>
              <button className="btn-tgl wht">CH</button>
            </div>
          </div>
        </div>
        <i class="fas fa-bars fa-5x menu" onClick=""></i>
      </div>
    </>

    //NAVBAR END
  )
}


export default Navbar
