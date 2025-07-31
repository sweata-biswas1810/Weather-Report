import React from "react";
import Holder1 from "./holder";
import Holder2 from "./holder-one";


function Pinkdiv() {
    return (
        <div className="pink_div_inside">

            <div className="footer_total">
                <Holder1 imgs="./images/wind.png" value="Wind" />
                <Holder1 imgs="./images/drop.png" value="Hum" />
            </div>
            <div className="footer_total" id="footer1">
                <Holder2 wind="19 Km/h" />
                <Holder2 wind="22%" />
            </div>
            
        </div>
    )
}

export default Pinkdiv;