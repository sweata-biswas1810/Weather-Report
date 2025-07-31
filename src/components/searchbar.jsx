import React from "react";

function Searchbars() {
    return (

    
            <div className="total_search">
                <div className="search_container">
                    <div className="search_div">
                        <div className="search_icon">
                            <img id="search" src="./images/search.png" alt="search icon" />
                        </div>
                        <div className="search_box">
                            <input type="text" placeholder="Search..." id="search_input" />
                        </div>
                    </div>
                    <div className="search_location">
                        <img src="./images/gps.png" alt="location icon" />
                    </div>

                </div>
                <div className="sun_moon" id="sun_moon">
                    <div className="light">
                        <img className="dim" src="./images/bell.png" alt="" />
                    </div>
                    <div className="light">
                        <img className="dim" src="./images/woman.png" alt="" />
                    </div>
                </div>
            </div>
     
    );
}

export default Searchbars;