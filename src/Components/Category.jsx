import React from 'react'

function Category() {
    return (
        <>
              <div className="category">
                            <div className="category1">
                                <label htmlFor="clg">Type of college:</label>
                                <select name="clg" id="clg">
                                    <option value="all">All</option>
                                    <option value="all">All</option>
                                    <option value="all">All</option>
                                    <option value="all">All</option>
                                </select>
                            </div>
                            <div className="category1">
                                <label htmlFor="cor">Courses</label>
                                <select name="cor" id="cor">
                                    <option value="all">All</option>
                                    <option value="all">All</option>
                                    <option value="all">All</option>
                                    <option value="all">All</option>
                                </select>
                            </div>
                            <div className="category1">
                                <label htmlFor="sort">Sort By</label>
                                <select name="sort" id="sort">
                                    <option value="all">All</option>
                                    <option value="all">All</option>
                                    <option value="all">All</option>
                                    <option value="all">All</option>
                                </select>
                            </div>
                        </div>
        </>
    )
}

export default Category
