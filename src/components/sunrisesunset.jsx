

import React from "react";

import RiseSet from "./rise-set";

function Sunriseset() {
    return (

        
            <div className="sunrise_sunset" id="sunrise_sunset">
                <div className="location_box">
                    <div className="area" id="kolkata">
                        <img className="location_icon" src="./images/gps.png" alt="kolkata icon" />
                    </div>
                    <div className="heading" id="kolkata_header">
                        <h2>Kolkata</h2>
                    </div>
                </div>

                <div className="info_container">
                    <RiseSet imgs="./images/sun (2).png" value="Sunrise" time="04:40 AM" />
                    <RiseSet imgs="./images/moon.png" value="Sunset" time="6:53 PM" />
                </div>
            </div>

       
            )
}

            export default Sunriseset;