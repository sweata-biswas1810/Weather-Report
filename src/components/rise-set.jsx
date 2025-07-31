

import React from "react";

function RiseSet(props) {
    return (
        <div className="info">
            <div className="sunrise">
                <img className="sunrise_icon" src={props.imgs} alt="sunrise icon"/>
            </div>
            <div className="sunset">
                <h4>{props.value}</h4>
                <h2>{props.time}</h2>
            </div>
        </div>
    );

}

export default RiseSet;