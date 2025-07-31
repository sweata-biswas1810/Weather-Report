

import React from "react";

function Bars({ rainHeight, sunHeight }) {

    return (

        <div className="bar-group">
            <div className="total-bar"></div>
            <div className="rain-segment" style={{ height: `${rainHeight}px` }}></div>
            <div className="sun-segment" style={{ height: `${sunHeight}px`, bottom: `${rainHeight}px` }}></div>
        </div>
    );
}

export default Bars;