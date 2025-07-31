import React from 'react';

function Header() {
    return (
        <div className="total_greet">
            <div className="greet">
                <h1 id="clock">07:32 AM</h1>
                <p id="wed">wednesday, 14 april 2021</p>
                <div className="morning">
                    <div id="sun_icon">
                        <img id="sun" src="./images/sun (2).png" alt="weather icon" />
                    </div>
                    <div id="sun_heading">
                        <h2 id="greeting">Good Morning, Sweata!</h2>
                    </div>
                </div>
            </div>

            <div className="sun_moon">
                <div className="light">
                    <img className="dim" src="./images/sunny.png" alt="" />
                </div>
                <div className="light">
                    <img className="dim" src="./images/moon (1).png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;