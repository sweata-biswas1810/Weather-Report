import React from "react";



function Airqualitycard(props) {
    return (
        <div className="wind_result">
            <h2>{props.value}</h2>
            <p>{props.label}</p>
        </div>

    );
}
export default Airqualitycard;