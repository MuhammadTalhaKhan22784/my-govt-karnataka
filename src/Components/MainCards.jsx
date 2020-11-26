import React from 'react'
import Category from './Category'
import SelectCards from './SelectCards'

function MainCards() {
    return (

        //MAIN CARDS START 
        <>
            <div id="main-cards">
                <div className="m-container">
                    <div className="mc-1 med-none">

                        <SelectCards selectDistrict="Select Districts" placeSearchDistrict="Search District"
                            searchOption1="Bangluru Urban" searchOption2="Dakshina Kannada" searchOption3="Bangluru Urban"
                            searchOption4="Bangluru Urban" searchOption5="Bangluru Urban" searchOption6="Bangluru Urban" searchOption7="Bangluru Urban"
                            searchOption8="Bangluru Urban" searchOption9="Bangluru Urban"
                        />

                        <SelectCards selectDistrict="Select Taluk" placeSearchDistrict="Search Taluk"
                            searchOption1="Bagalkote" searchOption2="Jamkhandi" searchOption3="Mudhol"
                            searchOption4="Dakshina Kannada" searchOption5="Badami" searchOption6="Dakshina Kannada" searchOption7="Bangluru Urban"
                            searchOption8="Badami" searchOption9="Jamkhandi"
                        />

                        <SelectCards selectDistrict="Branch" placeSearchDistrict="Search Branch"
                            searchOption1="Electronics &amp; Communication Engineering" searchOption2="Aerospace Engineering" searchOption3="Aerospace Engineering"
                            searchOption4="Computer Science &amp; Engineering" searchOption5="Electronics &amp; Communication Engineering" searchOption6="Mechanical Engineering" searchOption7="Aerospace Engineering"
                            searchOption8="Aerospace Engineering" searchOption9="Electronics &amp; Communication Engineering"
                        />

                        <SelectCards selectDistrict="University" placeSearchDistrict="Search University"
                            searchOption1="University Visvesvaraya College of Engineering" searchOption2="Bangalore University" searchOption3="Bangalore University"
                            searchOption4="Computer Science &amp; Engineering" searchOption5="Central University of Karnataka" searchOption6="Dakshina Kannada" searchOption7="Bangluru Urban"
                            searchOption8="Christ University" searchOption9="Bangalore University"
                        />


                    </div>
                    <div className="mc-2">
                        <Category />
                        <div className="uni-cards">
                            <div className="uni-1">
                                <img src="imgs/l1.png" alt="" />
                                <h4 className="center">M S Ramaiah Institute of Technology</h4>
                                <p className="center">M.S.R Nagar, Bangalore</p>
                                <button className="btn-gr">NBA:A++</button>
                                <p className="center">Affiliated to:  Visvesvaraya Technological</p>
                                <p className="center">Type of college  :  Private</p>
                                <div className="uni1-btns">
                                    <button className="btn-o">Website</button>
                                    <button className="btn-pr">Contect</button>
                                </div>
                            </div>
                            <div className="uni-1">
                                <img src="imgs/l2.png" alt="" />
                                <h4 className="center">University Visvesvaraya College of Engineering </h4>
                                <p className="center">Bangalore, Karnataka</p>
                                <button className="btn-gr">NBA:B++</button>
                                <p className="center">Affiliated to:  Bangalore University </p>
                                <p className="center">Type of college  :  Private</p>
                                <div className="uni1-btns">
                                    <button className="btn-o">Website</button>
                                    <button className="btn-pr">Contect</button>
                                </div>
                            </div>
                            <div className="uni-1">
                                <img src="imgs/l2.png" alt="" />
                                <h4 className="center">University Visvesvaraya College of Engineering </h4>
                                <p className="center">Bangalore, Karnataka</p>
                                <button className="btn-gr">NBA:B++</button>
                                <p className="center">Affiliated to:  Bangalore University </p>
                                <p className="center">Type of college  :  Private</p>
                                <div className="uni1-btns">
                                    <button className="btn-o">Website</button>
                                    <button className="btn-pr">Contect</button>
                                </div>
                            </div>
                            <div className="uni-1">
                                <img src="imgs/l1.png" alt="" />
                                <h4 className="center">M S Ramaiah Institute of Technology</h4>
                                <p className="center">M.S.R Nagar, Bangalore</p>
                                <button className="btn-gr">NBA:A++</button>
                                <p className="center">Affiliated to:  Visvesvaraya Technological</p>
                                <p className="center">Type of college  :  Private</p>
                                <div className="uni1-btns">
                                    <button className="btn-o">Website</button>
                                    <button className="btn-pr">Contect</button>
                                </div>
                            </div>
                            <div className="uni-1">
                                <img src="imgs/l1.png" alt="" />
                                <h4 className="center">M S Ramaiah Institute of Technology</h4>
                                <p className="center">M.S.R Nagar, Bangalore</p>
                                <button className="btn-gr">NBA:A++</button>
                                <p className="center">Affiliated to:  Visvesvaraya Technological</p>
                                <p className="center">Type of college  :  Private</p>
                                <div className="uni1-btns">
                                    <button className="btn-o">Website</button>
                                    <button className="btn-pr">Contect</button>
                                </div>
                            </div>
                            <div className="uni-1">
                                <img src="imgs/l2.png" alt="" />
                                <h4 className="center">University Visvesvaraya College of Engineering </h4>
                                <p className="center">Bangalore, Karnataka</p>
                                <button className="btn-gr">NBA:B++</button>
                                <p className="center">Affiliated to:  Bangalore University </p>
                                <p className="center">Type of college  :  Private</p>
                                <div className="uni1-btns">
                                    <button className="btn-o">Website</button>
                                    <button className="btn-pr">Contect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        //MAIN CARDS END
    )
}

export default MainCards
