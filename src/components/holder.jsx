
import React from "react";

function Holder1(props) {
    return (
        
        <div className="holder">
            <div className="footer_icon">
                <img className="sunny_img" src={props.imgs} alt="footer sunny icon"/>
            </div>
            <div className="footer">
                <h5>{props.value}</h5>
            </div>
        </div>
    )
}

export default Holder1;