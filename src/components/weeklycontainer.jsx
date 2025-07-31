

import React from "react";
import WeeklyCards from "./weeklycard";

function Weeklyweather() {

    return (
        <div id="weekly_weather_conrainer">
            <WeeklyCards day="Sun" temp="25°C" imgs="./images/sun (1).png"/>
            <WeeklyCards day="Mon" temp="25°C" imgs="./images/sun (1).png"/>
            <WeeklyCards day="Tue" temp="25°C" imgs="./images/sun (1).png"/>
            <WeeklyCards day="Wed" temp="25°C" imgs="./images/sun (1).png"/>
            <WeeklyCards day="Thu" temp="25°C" imgs="./images/sun (1).png"/>
            <WeeklyCards day="Fri" temp="25°C" imgs="./images/sun (1).png"/>
            <WeeklyCards day="Sat" temp="25°C" imgs="./images/sun (1).png"/>
        </div>
    );
}

export default Weeklyweather;