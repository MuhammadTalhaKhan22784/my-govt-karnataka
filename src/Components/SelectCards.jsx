import React from 'react'

function SelectCards(props) {
    return (
        <>
            <div className="mc1-card">
                <p className="blue">{props.selectDistrict}</p>
                <input type="text" name="srch" id="srch" placeholder={props.placeSearchDistrict} />
                <div className="mc1-content">
                    <input type="radio" name="radio" id="radio" />
                    <p>{props.searchOption1}</p>
                </div>
                <div className="mc1-content">
                    <input type="radio" name="radio" id="radio" />
                    <p>{props.searchOption2}</p>
                </div>
                <div className="mc1-content">
                    <input type="radio" name="radio" id="radio" />
                    <p>{props.searchOption3}</p>
                </div>
                <div className="mc1-content">
                    <input type="radio" name="radio" id="radio" />
                    <p>{props.searchOption4}</p>
                </div>
                <div className="mc1-content">
                    <input type="radio" name="radio" id="radio" />
                    <p>{props.searchOption5}</p>
                </div>
                <div className="mc1-content">
                    <input type="radio" name="radio" id="radio" />
                    <p>{props.searchOption6}</p>
                </div>
                <div className="mc1-content">
                    <input type="radio" name="radio" id="radio" />
                    <p>{props.searchOption7}</p>
                </div>
                <div className="mc1-content">
                    <input type="radio" name="radio" id="radio" />
                    <p>{props.searchOption8}</p>
                </div>
                <div className="mc1-content">
                    <input type="radio" name="radio" id="radio" />
                    <p>{props.searchOption9 }</p>
                </div>
            </div>
        </>
    )
}

export default SelectCards
