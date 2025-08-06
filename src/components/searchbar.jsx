import React, { useState } from "react";
const apiKey = "2fb17a6da628a33f1c561a6d261cab78";
function Searchbars({onWeatherFetched}) {

    const [city, setCity] = useState("");

    const handleKeyDown = async (event) => {
        if (event.key === "Enter" && city.trim() !== "") {
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                const res = await fetch(url);
                const data = await res.json();
                if (data.cod !== 200) {
                    console.log("not fetching city");
                    return;
                }
                onWeatherFetched(data);
            } catch (error) {
                console.log("data cannot be fetching");
            }
        }
    };

    return (


        <div className="total_search">
            <div className="search_container">
                <div className="search_div">
                    <div className="search_icon">
                        <img id="search" src="./images/search.png" alt="search icon" />
                    </div>
                    <div className="search_box">
                        <input type="text"
                            placeholder="Search..."
                            id="search_input"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            onKeyDown={handleKeyDown} />
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