

import React from 'react';

function Rows(props) {
    return (
        <div className="row">
            <div className="locationrow">
                <div className="information">
                    <img className="img_location" src="./images/location.png" alt="" />
                </div>
                <div className="information_location">
                    <h4>{props.city}</h4>
                </div>
            </div>
            <div className="locationrow2">
                <div className="information">
                    <img className="img_info" src="./images/sun (2).png" alt="" />
                </div>
                <div className="information_time">
                    <h4 className="timeclassName">{props.time}</h4>
                </div>
            </div>
            <div className="locationrow2">
                <div className="information">
                    <img className="img_info" src="./images/moon.png" alt="" />
                </div>
                <div className="information_time">
                    <h4 className="timeclassName">{props.time2}</h4>
                </div>
            </div>
        </div>


    )
}

export default Rows;