import React from 'react'
import Category from './Category'
import SelectCards from './SelectCards'
import L1Image from '../imgs/l1.png'
import L2Image from '../imgs/l2.png'
import UniCards from './UniCards'


function MainCards() {
    return (

        //MAIN CARDS START 
        <>
            <div id="main-cards">
                <div className="m-container">
                    <div className="mc-1 med-none">

                        <SelectCards selectDistrict="Select Districts" searchId="srchDist" placeSearchDistrict="Search District"
                            searchOption1="Bangluru Urban" searchOption2="Dakshina Kannada" searchOption3="Bangluru Urban"
                            searchOption4="Bangluru Urban" searchOption5="Bangluru Urban" searchOption6="Bangluru Urban" searchOption7="Bangluru Urban"
                            searchOption8="Bangluru Urban" searchOption9="Bangluru Urban"
                        />

                        <SelectCards selectDistrict="Select Taluk" searchId="srchTaluk" placeSearchDistrict="Search Taluk"
                            searchOption1="Bagalkote" searchOption2="Jamkhandi" searchOption3="Mudhol"
                            searchOption4="Dakshina Kannada" searchOption5="Badami" searchOption6="Dakshina Kannada" searchOption7="Bangluru Urban"
                            searchOption8="Badami" searchOption9="Jamkhandi"
                        />

                        <SelectCards selectDistrict="Branch" searchId="srchBranch" placeSearchDistrict="Search Branch"
                            searchOption1="Electronics &amp; Communication Engineering" searchOption2="Aerospace Engineering" searchOption3="Aerospace Engineering"
                            searchOption4="Computer Science &amp; Engineering" searchOption5="Electronics &amp; Communication Engineering" searchOption6="Mechanical Engineering" searchOption7="Aerospace Engineering"
                            searchOption8="Aerospace Engineering" searchOption9="Electronics &amp; Communication Engineering"
                        />

                        <SelectCards selectDistrict="University" searchId="srchUni" placeSearchDistrict="Search University"
                            searchOption1="University Visvesvaraya College of Engineering" searchOption2="Bangalore University" searchOption3="Bangalore University"
                            searchOption4="Computer Science &amp; Engineering" searchOption5="Central University of Karnataka" searchOption6="Dakshina Kannada" searchOption7="Bangluru Urban"
                            searchOption8="Christ University" searchOption9="Bangalore University"
                        />


                    </div>
                    <div className="mc-2">
                        <div className="category sml-none">


                            <Category categoryName="Type of college:"
                                categoryId="clg"
                                categoryOption1="All"
                                categoryOption2="All"
                                categoryOption3="All"
                                categoryOption4="All" />

                            <Category categoryName="Courses"
                                categoryId="cor"
                                categoryOption1="All"
                                categoryOption2="All"
                                categoryOption3="All"
                                categoryOption4="All" />

                            <Category categoryName="Sort By"
                                categoryId="sort"
                                categoryOption1="All"
                                categoryOption2="All"
                                categoryOption3="All"
                                categoryOption4="All"
                            />

                        </div>

                        <div className="uni-cards">
                            <UniCards image={L1Image} text1="M S Ramaiah Institute of Technology"
                                text2="M.S.R Nagar, Bangalore" text3="NBA:A++" text4="Affiliated to:  Visvesvaraya Technological"
                                text5="Type of college  :  Private" text6="Website" text7="Contect"
                            />
                            <UniCards image={L2Image} text1="University Visvesvaraya College of Engineering"
                                text2="Bangalore, Karnataka" text3="NBA:B++" text4="Affiliated to:  Bangalore University"
                                text5="Type of college  :  Private" text6="Website" text7="Contect"
                            />
                            <UniCards image={L2Image} text1="University Visvesvaraya College of Engineering"
                                text2="Bangalore, Karnataka" text3="NBA:B++" text4="Affiliated to:  Bangalore University"
                                text5="Type of college  :  Private" text6="Website" text7="Contect"
                            />

                            <UniCards image={L2Image} text1="University Visvesvaraya College of Engineering"
                                text2="Bangalore, Karnataka" text3="NBA:B++" text4="Affiliated to:  Bangalore University"
                                text5="Type of college  :  Private" text6="Website" text7="Contect"
                            />
                            <UniCards image={L1Image} text1="University Visvesvaraya College of Engineering"
                                text2="Bangalore, Karnataka" text3="NBA:B++" text4="Affiliated to:  Bangalore University"
                                text5="Type of college  :  Private" text6="Website" text7="Contect"
                            />
                           <UniCards image={L2Image} text1="University Visvesvaraya College of Engineering"
                                text2="Bangalore, Karnataka" text3="NBA:B++" text4="Affiliated to:  Bangalore University"
                                text5="Type of college  :  Private" text6="Website" text7="Contect"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
        //MAIN CARDS END
    )
}

export default MainCards
