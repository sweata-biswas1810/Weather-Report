

import Holder2 from "./holder-one";
import Holder1 from "./holder";
import Selection from "./select";
import { useState } from "react";
import { useEffect } from "react";

function Sunny({ weather }) {

    if (!weather) {
        return <div>Loading...</div>;
    }

     const [gettoday, settoday] = useState('');

    function updatetoday() {
        const now = new Date();
        const options = {
            day: 'numeric', 
            month: 'long',   
        };
        const todaystring = now.toLocaleDateString('en-US', options);
        settoday(`Today, ${todaystring}`);
    }
    useEffect(() => {
        updatetoday();
    }, [])

    return (
        <div className="sunny_container">
            <Selection />

            <div className="sunny_information">
                <div className="sunny_icon">
                    <img className="sunny_icon1" src="./images/sun (1).png" alt="sunny icon" />
                </div>
                <div className="sunny_heading">
                    <p id="today" style={{ color: 'white' }}>{gettoday}</p>
                </div>
                <div className="sunny_temp">
                    <h2>{`${weather.main.temp}°C`}</h2>
                </div>
            </div>


            <div className="footer_sunny">
                <div className="footer_sunny_heading">
                    <h2>{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</h2>
                </div>
                <div className="footer_sunny_info">
                    <div className="footer_total">
                        <Holder1 imgs="./images/wind.png" value="Wind" />
                        <Holder1 imgs="./images/drop.png" value="Hum" />
                    </div>
                    <div className="footer_total" id="footer_total">
                        <Holder2 wind={`${weather.wind.speed}km/h`} />
                        <Holder2 wind={`${weather.main.humidity}%`} />
                    </div>
                </div>
            </div>
        </div >


    );
}

export default Sunny;