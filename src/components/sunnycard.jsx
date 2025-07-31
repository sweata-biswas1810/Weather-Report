
import React from "react";
import Holder2 from "./holder-one";
import Holder1 from "./holder";
import Selection from "./select";

function Sunny() {
    return (
        <div className="sunny_container">
            <Selection />

            <div className="sunny_information">
                <div className="sunny_icon">
                    <img className="sunny_icon1" src="./images/sun (1).png" alt="sunny icon" />
                </div>
                <div className="sunny_heading">
                    <p id="today" style={{ color: 'white' }}>Today, 14 April</p>
                </div>
                <div className="sunny_temp">
                    <h2>29°C</h2>
                </div>
            </div>


            <div className="footer_sunny">
                <div className="footer_sunny_heading">
                    <h2>Sunny</h2>
                </div>
                <div className="footer_sunny_info">
                    <div className="footer_total">
                        <Holder1 imgs="./images/wind.png" value="Wind" />
                        <Holder1 imgs="./images/drop.png" value="Hum" />
                    </div>
                    <div className="footer_total" id="footer_total">
                        <Holder2 wind="19 Km/h" />
                        <Holder2 wind="22 %" />
                    </div>
                </div>
            </div>
        </div >


    );
}

export default Sunny;