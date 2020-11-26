import React from 'react'

function Search() {
    return (
        //SEARCH START
        <>
            <div id="search">
                <div className="m-container">
                    <div className="breadcrumb">
                        <a href="#">Home</a>
                        <p>/</p>
                        <a href="#">Education</a>
                        <p>/</p>
                        <a href="#">Engineering</a>
                    </div>
                    <div className="searchbox">
                        <input type="text" name="text" id="text" placeholder="Enter college, university, course name " />
                        <button className="btn-o"><i className="fas fa-search" />Search</button>
                    </div>
                    <h2>Engineering</h2>
                </div>
            </div>
        </>
        //SEARCH END
    )
}

export default Search
