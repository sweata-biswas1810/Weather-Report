import React from "react";

import Airqualitycard from './airqualitycard';
import Selection from "./select";
function Airquality() {
    return (
        <div id="air_quality_container">

            <div className="air_quality_heading">
                <div id="air_quality">
                    <h2 style={{ fontSize: '17px' }}>Air Quality Index</h2>
                </div>
                <div id="location">
                    <img id="location_icon" src="./images/placeholder.png" alt="air quality icon" />
                    <label htmlFor="location">Kolkata , </label>
                    <Selection />
                </div>
            </div>
            <div id="good_heading_container">
                <div id="good_heading_icon">
                    <div id="windy">
                        <img id="wind_icon" src="./images/wind.png" alt="good air quality icon" />
                    </div>
                    <div id="good_heading">
                        <h2 style={{ fontSize: '17px' }}> Good</h2>
                        <p style={{ fontSize: '9px' }}> A Perfect Day For A Walk!</p>
                    </div>
                </div>
                <div id="refresh_button">
                    <button id="refresh" type="button">Refresh</button>
                </div>
            </div>
            <div id="wind_speed_container">
                <Airqualitycard value="9.3" label="PM2" />
                <Airqualitycard value="12.2" label="PM10" />
                <Airqualitycard value="4.8" label="SO2" />
                <Airqualitycard value="4.6" label="NO2" />
                <Airqualitycard value="6.5" label="O3" />
                <Airqualitycard value="0.9" label="CO" />
            </div>
        </div>
    );
}

export default Airquality;