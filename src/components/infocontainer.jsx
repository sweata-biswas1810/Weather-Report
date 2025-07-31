

import React from "react";
import Rows from "./row";

function Info() {
    return (
        <div className="information_container" id="information_container">

            <Rows city="Kolkata" time="5.50 AM" time2="6.50 PM" />
            <Rows city="Hariyana" time="5.40 AM" time2="6.35 PM" />
            <Rows city="Chennai" time="5.30 AM" time2="6.25 PM" />
        </div>
    )
}

export default Info;