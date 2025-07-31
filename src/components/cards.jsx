

import React from "react";
import Bars from "./bargroup";

function Card() {

    return (
        <div className="chart">
            <Bars rainHeight={30} sunHeight={40} />
            <Bars rainHeight={60} sunHeight={20} />
            <Bars rainHeight={20} sunHeight={60} />
            <Bars rainHeight={50} sunHeight={30} />
            <Bars rainHeight={30} sunHeight={80} />
            <Bars rainHeight={30} sunHeight={50} />
            <Bars rainHeight={60} sunHeight={40} />
            <Bars rainHeight={35} sunHeight={70} />
            <Bars rainHeight={45} sunHeight={75} />
            <Bars rainHeight={25} sunHeight={65} />

        </div>

    );
}

export default Card;