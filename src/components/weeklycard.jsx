

import React from "react";

function WeeklyCards(props) {

    return (
        <div className="weekly_weather">
            <img className="weather_icon" src={props.imgs} alt="weather icon" />
            <p>{props.day}</p>
            <p>{props.temp}</p>
        </div>
    );
}

export default WeeklyCards;